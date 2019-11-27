import axios from './axios'

const instance = axios()

export default {
  get(url, params, headers) {
    const options = {}

    if (params) {
      options.params = params
    }
    if (headers) {
      options.headers = headers
    }
    return instance.get(url, options)
  },
  post(url, params, headers, data) {
    const options = {}

    if (params) {
      options.params = params
    }
    if (headers) {
      options.headers = headers
    }
    return instance.post(url, data, options)
  },
  put(url, params, headers) {
    const options = {}

    if (headers) {
      options.headers = headers
    }
    return instance.put(url, params, options)
  },
  delete(url, params, headers) {
    const options = {}

    if (params) {
      options.params = params
    }
    if (headers) {
      options.headers = headers
    }
    return instance.delete(url, options)
  }
}
