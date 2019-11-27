import axios from './index'
// 本地代理
const baseUrl = '/api'
// switch (process.env.NODE_ENV) {
//   case 'dev':
//     break
//   case 'pre':
//     break
//   case 'production':
//     break
// }

export default {
  getCarousels(params, headers) {
    return axios.get(`${baseUrl}/carousels`, params, headers)
  },
  getPostList(params, headers) {
    return axios.get(`${baseUrl}/posts`, params, headers)
  },
  getCategoryPostList(category, params, headers) {
    return axios.get(`${baseUrl}/category/${category}`, params, headers)
  },
  getTagPostList(tag, params, headers) {
    return axios.get(`${baseUrl}/tag/${tag}`, params, headers)
  },
  getPostInfo(id, params, headers) {
    return axios.get(`${baseUrl}/post/${id}`, params, headers)
  },
  getRecommendPostList(params, headers) {
    return axios.get(`${baseUrl}/posts/recommend`, params, headers)
  },
  getTopPostList(params, headers) {
    return axios.get(`${baseUrl}/posts/top`, params, headers)
  },
  getHotPostList(params, headers) {
    return axios.get(`${baseUrl}/posts/hot`, params, headers)
  },
  getCommentList(params, headers) {
    return axios.get(`${baseUrl}/comment/new`, params, headers)
  },
  getBlogrollList(params, headers) {
    return axios.get(`${baseUrl}/blogrolls`, params, headers)
  },
  getNoticeList(params, headers) {
    return axios.get(`${baseUrl}/notices`, params, headers)
  },
  getCategoryList(params, headers) {
    return axios.get(`${baseUrl}/categories`, params, headers)
  },
  getUserInfo(params, headers) {
    return axios.get(`${baseUrl}/user`, params, headers)
  },
  commentPost(post, params, headers, data) {
    return axios.post(`${baseUrl}/comment/post/${post}`, params, headers, data)
  },
  replayComment(comment, params, headers, data) {
    return axios.post(`${baseUrl}/comment/reply/${comment}`, params, headers, data)
  },
  praisePost(post, params, headers, data) {
    return axios.post(`${baseUrl}/praise/post/${post}`, params, headers, data)
  },
  getWeather(location, key = 'f3f851722b2c4ead86dca63283f5f352') {
    return axios.get(`/weather?location=${location}&key=${key}`)
  }
}

