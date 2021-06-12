import axios from './index'

export const getUserInfo = parmas => axios.post('apis/user/info', parmas)
