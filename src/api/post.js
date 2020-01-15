import request from '@/utils/request'

const prefix = 'posts/'

export function postList(params) {
  return request({
    url: prefix,
    method: 'get',
    params
  })
}

export function recommendPostList(params) {
  return request({
    url: prefix + 'recommend',
    method: 'get',
    params
  })
}

export function topPostList(params) {
  return request({
    url: prefix + 'top',
    method: 'get',
    params
  })
}

export function hotPostList(params) {
  return request({
    url: prefix + 'hot',
    method: 'get',
    params
  })
}
