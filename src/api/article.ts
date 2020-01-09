import request from '@/utils/request'
const baseUrl = '/apis/v1'

export const getArticleList = (params: any) =>
  request({
    url: `${baseUrl}/article/list`,
    method: 'get',
    params
  })

// 文章添加
export const addArticle = (data: any) =>
  request({
    url: `${baseUrl}/article/add`,
    method: 'post',
    data
  })
