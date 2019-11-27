import Cookies from 'vue-cookie'

const TokenKey = 'Blog-Token'

export function getToken() {
  return Cookies.get(TokenKey)
}

export function setToken(token) {
  return Cookies.set(TokenKey, token)
}

export function removeToken() {
  return Cookies.delete(TokenKey)
}