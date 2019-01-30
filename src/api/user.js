import request from '@/utils/request'

export function getList () {
  return request({
    url: '/list',
    method: 'get'
  })
}

export function testPost () {
  return request({
    url: '/testPost',
    method: 'post'
  })
}
