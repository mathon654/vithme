import { request } from '@/utils/request'
import request1 from '@/utils/api'

export function userinfo(params?: any, data?: any) {
  return request({ url: '/user/userinfo', method: 'get', params, data })
}

export function userVideoList(params?: any, data?: any) {
  return request({ url: '/user/video_list', method: 'get', params, data })
}

export function panel(params?: any, data?: any) {
  return request({ url: '/user/panel', method: 'get', params, data })
}

export function friends(params?: any, data?: any) {
  return request({ url: '/user/friends', method: 'get', params, data })
}

export function userCollect(params?: any, data?: any) {
  return request({ url: '/user/collect', method: 'get', params, data })
}

export function recommendedPost(params?: any, data?: any) {
  return request({ url: '/post/recommended', method: 'get', params, data })
}

export function recommendedShop(params?: any, data?: any) {
  return request({ url: '/shop/recommended', method: 'get', params, data })
}

export function getCountry(params?: any, data?: any) {
  return request({ url: '/login/getAreaCode', method: 'get', params, data })
}
export function getPhoneCode(params?: any, data?: any) {
  return request1({ url: '/login/getCode.do', method: 'get', params, data })
}
export function checkLogin(params?: any, data?: any) {
  return request1({ url: '/login/checkReg.do', method: 'get', params, data })
}
export function gotoLogin(params?: any, data?: any) {
  return request1({ url: '/login/signIn.do', method: 'get', params, data })
}
