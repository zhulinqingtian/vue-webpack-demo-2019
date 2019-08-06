import axios from 'axios'

axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded'

const apiServerUrl = window.location.protocol + '//' + window.location.host

// 全局的 axios 默认值
axios.defaults.timeout = 30000
axios.defaults.headers.post['Content-Type'] = 'application/json;charset=UTF-8'
axios.defaults.baseURL = apiServerUrl

// 添加请求拦截器
axios.interceptors.request.use(config => {
  // 在发送请求之前做些什么
  return config
}, err => {
  // 对请求错误做些什么
  return Promise.reject(err)
})

// 添加响应拦截器
axios.interceptors.response.use(response => {
  // 对响应数据进行操作
  return response
}, err => {
  // 对响应错误进行操作
  return Promise.reject(err)
})

function fetch (url, param = {}, method = 'get') {
  return new Promise((resolve, reject) => {
    const config = {
      method, url
    }

    if (method === 'get') {
      config.param = param
    } else {
      // post方式请求时，浏览器把form数据封装到http body中，然后发送到server
      // 这里的`data` 是作为请求主体被发送的数据
      config.data = param
      config.headers = {
        'Content-Type': 'application/json;charset=UTF-8'
      }
    }

    axios(config)
      .then(res => {
        resolve(res.data.data)
      })
      .catch(err => {
        reject(err.data)
      })
  })
}

export default {
  getUser (param) {
    return fetch('/api/getUser', param, 'get')
  },
  /**
   * 上传
   * @param param {file}
   */
  uploadImage (param) {
    return fetch('/api/upload/uploadImage', param, 'post')
  }
}
