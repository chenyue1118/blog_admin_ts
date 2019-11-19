import request from '@/utils/request'
const baseUrl = '/apis/v1'

export const getUserInfo = (data: any) =>
  request({
    url: `${baseUrl}/users/info`,
    method: 'post',
    data
  })

export const login = (data: any) =>
  request({
    url: `${baseUrl}/users/login`,
    method: 'post',
    data
  })

export const logout = () =>
  request({
    url: `${baseUrl}/users/logout`,
    method: 'post'
  })
