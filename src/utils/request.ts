import axios, { type AxiosError, type AxiosRequestConfig, type AxiosResponse } from 'axios'
import config from '@/config'
import { _notice } from './index'
import CryptoJS from 'crypto-js'
import TripleDES from 'crypto-js/tripledes'

// 获取当前时间戳
function getTimestamp() {
  return new Date().getTime()
}

// 获取随机字符串（建议使用时间戳）
function getNonce() {
  return getTimestamp().toString()
}

// 计算MD5
function md5(input: string) {
  return CryptoJS.MD5(input).toString()
}

// 计算3DES
function encrypt3DES(message: string, key: CryptoJS.lib.WordArray) {
  return TripleDES.encrypt(message, key, {
    mode: CryptoJS.mode.ECB,
    padding: CryptoJS.pad.Pkcs7
  }).toString()
}

// 获取签名
function getSignature(
  accessToken: string,
  version: string,
  deviceNo: string,
  timestamp: string,
  nonce: string
) {
  // Step 1: 获取signKeys
  const signKeys = CryptoJS.enc.Utf8.parse(md5(accessToken).substring(0, 24))

  // Step 2: 拼接serverSign
  const serverSign = `${version}${deviceNo}${timestamp}${nonce}`

  // Step 3: 3DES加密
  let serverSignNew = encrypt3DES(serverSign, signKeys)

  // Step 4: 替换“\r"和"\n”, 并转换成大写
  serverSignNew = serverSignNew.replace(/\r/g, '').replace(/\n/g, '').toUpperCase()

  // Step 5: 计算最终签名字符串
  const signature = md5(serverSignNew)

  return signature
}

// 创建axios实例
export const axiosInstance = axios.create({
  baseURL: config.baseUrl,
  timeout: 60000
})

// request拦截器
axiosInstance.interceptors.request.use(
  (config) => {
    // 设置公共参数
    // const timestamp = getTimestamp().toString()
    // const nonce = getNonce()
    // const accessToken = 'your-access-token' // 在实际项目中需要动态获取
    // const deviceNo = 'your-device-no' // 在实际项目中需要动态获取
    // const userId = 'your-user-id' // 在实际项目中需要动态获取
    //
    // const commonParams = {
    //   noAuthCheck: 1,
    //   version: '16.0.2',
    //   deviceNo,
    //   timestamp,
    //   nonce,
    //   terminal: 2,
    //   accessToken,
    //   signature: getSignature(accessToken, '16.0.2', deviceNo, timestamp, nonce),
    //   userId,
    //   hrApp: 1,
    //   h5: 1
    // }
    // console.log('commonParams', config)
    //
    // // 如果请求是GET方法，参数添加到params中；如果是POST方法，参数添加到data中
    // if (config.method === 'get') {
    //   config.params = { ...config.params, ...commonParams }
    // } else {
    //   config.data = { ...config.data, ...commonParams }
    // }
    //
    // // 设置默认Content-Type
    // if (!config.headers['Content-Type']) {
    //   config.headers['Content-Type'] = 'application/json'
    // }

    return config
  },
  (error) => {
    return Promise.reject(error)
  }
)

// response拦截器
axiosInstance.interceptors.response.use(
  (response: AxiosResponse) => {
    console.log('response', response)
    const { data } = response
    if (data === undefined || data === null || data === '') {
      _notice('请求失败，请稍后重试！')
      return { success: false, code: 500, data: [] }
    } else if (typeof data === 'string') {
      return { success: true, code: 200, data }
    } else {
      if (data.data === undefined || data.data === null) {
        data.data = { ...data }
      }
      let resCode = data.code
      if (resCode) {
        try {
          resCode = Number(resCode)
        } catch (e) {
          data.code = resCode = 500
          data.success = false
        }
        if (resCode === 0) {
          data.code = resCode = 200
          data.success = true
        }
        if (resCode !== 200) {
          _notice(response.data.message || '请求失败，请稍后重试！')
        } else {
          data.success = true
        }
      } else {
        data.code = 200
        data.success = true
      }
      return data
    }
  },
  (error: AxiosError) => {
    console.log('error', error)

    if (error.response === undefined) {
      _notice('服务器响应超时')
      return { success: false, code: 500, msg: '服务器响应超时', data: [] }
    }
    if (error.response.status >= 500) {
      _notice('服务器出现错误')
      return { success: false, code: 500, msg: '服务器出现错误', data: [] }
    }
    if (error.response.status === 404) {
      _notice('接口不存在')
      return { success: false, code: 404, msg: '接口不存在', data: [] }
    }
    if (error.response.status === 400) {
      _notice('接口报错')
      return { success: false, code: 400, msg: '接口报错', data: [] }
    }
    if (error.response.status === 401) {
      return { success: false, code: 401, msg: '用户名或密码不正确', data: [] }
    } else {
      const data: any = error.response.data
      if (data === null || data === undefined) {
        _notice('请求失败，请稍后重试！')
        return { success: true, code: 200, data: [] }
      } else {
        const resCode = data.code
        if (data.data === undefined || data.data === null) {
          data.data = { ...data }
        }
        if (resCode && typeof resCode === 'number' && resCode !== 200) {
          _notice('请求失败，请稍后重试！')
        } else {
          data.code = 200
          data.success = true
        }
        return data
      }
    }
  }
)

export interface ApiResponse<T = any> {
  data: T
  success: boolean
}

export async function request<T = any>(config: AxiosRequestConfig): Promise<ApiResponse<T>> {
  return axiosInstance
    .request<T>(config)
    .then(({ data }) => {
      return { success: true, data } as const
    })
    .catch((err) => {
      return { success: false, data: err } as const
    })
}
