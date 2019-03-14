import request from './request'
import axios from 'axios';

const get = path => {
    return request({
        url: path,
        method: 'GET'
    });
}

const post = (path, payload) => {
    return request({
        url: path,
        method: 'POST',
        data: payload
    });
}

export const login = user => {
    return axios.post('/login', {
        email: user.email,
        password: user.password
    })
    .then(res => {
        localStorage.setItem('access_token', res.data.token)
        console.log('DEU BOM')
        console.log(localStorage.getItem('access_token'))
        return res.data
    })
    .catch(err => {
        console.log(user)
        console.log('Invalid username or password', err)
    })
}

const API = {
    get,
    post,
    login
}

export default API