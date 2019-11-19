import request from '@/utils/request'
const baseUrl = '/apis/v1'

export const getArticleList = (params: any) =>
  request({
    url: `${baseUrl}/article/list`,
    method: 'get',
    params
  })
