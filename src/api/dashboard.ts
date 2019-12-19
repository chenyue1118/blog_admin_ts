import request from '@/utils/request'
const baseUrl = '/apis/v1'

export const getDashboardInfo = () =>
  request({
    url: `${baseUrl}/dashboard/info`,
    method: 'get'
  })
