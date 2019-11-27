import request from '@/utils/request'

// const prefix = '/user/'

export function getInfo() {
  return request({
    url: '/auth/user',
    method: 'get'
  })
}
