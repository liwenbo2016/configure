import axios from 'axios'
// import store from '@/store'
const debug = process.env.NODE_ENV !== 'production'

const service = axios.create({
  // baseURL: process.env.BASE_API, // api 的 base_url
  timeout: 15000 // request timeout
})

service.interceptors.request.use(
  config => {
    // config.headers['token'] = store.getters.token
    if (debug) {
      // config.url = `/api${config.url}`
    }

    return config
  },
  error => {
    console.log(error) // for debug
    Promise.reject(error)
  }
)

// response interceptor
service.interceptors.response.use(
  response => {
    // if (response.data.code !== 1) {
    //   if (response.data.msg) {
    //     Toast(response.data.msg)
    //   }
    //   if (response.data.code === 2) {
    //     store.dispatch('setToken', '')
    //   }
    // }
    // response -1--系统异常, 0--处理失败,1--处理成功,2--未登陆, 3--参数错误
    // console.log(response)
    return response.data
  },
  error => {
    // Toast('网络超时')
    console.log(error)
    return Promise.reject(error)
  }
)

export default service
