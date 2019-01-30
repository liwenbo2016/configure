import Mock, {Random} from 'mockjs'

Mock.mock('/list', 'get', {
  name: 'jack',
  password: '1244qaz'
})

Mock.mock('/testPost', 'post', {
  'array|3-5': [{name: Random.cname(), time: Random.datetime()}]
})
