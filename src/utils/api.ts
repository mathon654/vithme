import axios from 'axios'
import CryptoJS from 'crypto-js'
import { _notice } from '@/utils/index'

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
  //大写
  return CryptoJS.MD5(input).toString().toUpperCase()
}

// 截取前 24 个字符并转换为字节数组
function getMd5SubstringBytes(key) {
  const encryptedKey = md5(key)
  const substring = encryptedKey.substring(0, 24)
  const encoder = new TextEncoder()
  const uint8Array = encoder.encode(substring)
  return Array.from(uint8Array)
}

function encrypt3DES(src, keyBytes) {
  try {
    // 将 keyBytes 转换为 CryptoJS 支持的格式
    const keyString = keyBytes.map((byte) => String.fromCharCode(byte)).join('')
    const key = CryptoJS.enc.Utf8.parse(keyString)

    // 使用 CryptoJS 进行 3DES 加密
    const encrypted = CryptoJS.TripleDES.encrypt(src, key, {
      mode: CryptoJS.mode.ECB,
      padding: CryptoJS.pad.Pkcs7
    })

    // 返回 Base64 编码的加密结果
    return encrypted.toString()
  } catch (error) {
    console.error('Encryption error:', error)
    return null
  }
}
let signKeys
// 获取签名
function getSignature(accessToken: string, version: string, deviceNo: string, timestamp: string) {
  // Step 1: 获取signKeys
  signKeys = getMd5SubstringBytes(accessToken)
  // Step 2: 拼接serverSign
  const serverSign = `${version}_${deviceNo}_${timestamp}_${timestamp}`
  // Step 3: 3DES加密
  let serverSignNew = encrypt3DES(serverSign, signKeys)
  // Step 4: 替换“\r"和"\n”, 并转换成大写
  serverSignNew = serverSignNew.replace(/\r/g, '').replace(/\n/g, '').toUpperCase()
  // Step 5: 计算最终签名字符串
  return md5(serverSignNew)
}

// 创建一个 Axios 实例
const api = axios.create({
  baseURL: 'https://api.vithme.com', // 基础 URL
  timeout: 10000 // 请求超时时间
})

// 请求拦截器
api.interceptors.request.use(
  (config) => {
    // 在发送请求之前做些什么
    // 例如，在请求头中添加授权 token
    // config.headers.Authorization = `Bearer ${token}`;
    // 设置公共参数
    const timestamp = getTimestamp().toString()
    let accessToken = '' // 在实际项目中需要动态获取
    const deviceNo = 'sfden9527000268' // 在实际项目中需要动态获取
    const userId = '' // 在实际项目中需要动态获取
    if (config.url.includes('/login')) {
      accessToken = 'sNfW6ZK4OeHmQJCz7pU9auVUBddPI4BN'
    }
    const commonParams = {
      noAuthCheck: 1,
      version: '16.0.2',
      deviceNo,
      timestamp,
      nonce: timestamp,
      terminal: 2,
      accessToken,
      signature: getSignature(accessToken, '16.0.2', deviceNo, timestamp),
      userId,
      hrApp: 1,
      h5: 1
    }

    // 如果请求是GET方法，参数添加到params中；如果是POST方法，参数添加到data中
    if (config.method === 'get') {
      config.params = { ...config.params, ...commonParams }
    } else {
      config.data = { ...config.data, ...commonParams }
    }

    // 设置默认Content-Type
    if (!config.headers['Content-Type']) {
      config.headers['Content-Type'] = 'application/json'
    }

    return config
  },
  (error) => {
    // 对请求错误做些什么
    return Promise.reject(error)
  }
)

// 响应拦截器
api.interceptors.response.use(
  (response) => {
    // 对响应数据做点什么
    const { isEncrypt, data } = response.data
    if (isEncrypt) {
      const decrypted = CryptoJS.TripleDES.decrypt(
        data,
        CryptoJS.enc.Utf8.parse(signKeys.map((byte) => String.fromCharCode(byte)).join('')),
        {
          mode: CryptoJS.mode.ECB,
          padding: CryptoJS.pad.Pkcs7
        }
      )
      response.data = JSON.parse(decrypted.toString(CryptoJS.enc.Utf8))
    }
    const { code, errMsg } = response.data
    if (code === '0') {
      return response.data
    } else {
      _notice(errMsg)
      return Promise.reject(errMsg)
    }
  },
  (error) => {
    // 对响应错误做点什么
    return Promise.reject(error)
  }
)

const request1 = ({ url, method, params, data }) => {
  return api({
    url,
    method,
    params,
    data
  })
}

export default request1
