import axios from 'axios'
import Qs from 'qs'
import { message } from 'antd'

const IS_PRD = process.env.NODE_ENV == 'production'

export const BASE_URL = IS_PRD ? 'test.prd.com' : 'test.dev.com'
const instance = axios.create({
    baseURL: BASE_URL
})
instance.defaults.timeout = 30000
axios.interceptors.request.use(config => {
    const token = window.localStorage.getItem('userToken') || window.sessionStorage.getItem('userToken')
    config.data = Object.assign({}, config.data, {
        token: token
    })
    config.headers = {
        'Content-Type': 'application/x-www-form-urlencoded; charset=utf-8'
    }
    config.data = Qs.stringify(config.data)
    return config
}, error => {
    return error
})

axios.interceptors.response.use(response => {
    if (response.code) {
        switch (response) {
            case 200:
                return response.data
            case 401:
                // 未登录
                break
            case 403:
                // token过期处理
                break
            default:
                message.error(response.data.msg)
        }
    } else {
        message.error(response.data.msg)
    }
    return response
}, error => {
    return Promise.reject(error)
})

export default instance