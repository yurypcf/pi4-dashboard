import axios from 'axios';

const client = axios.create({
    baseUrl: 'http://localhost:3333'
})

const request = options => {
    const onSuccess = res => {
        return res.data
    }

    const onError = err => {
        console.error('Request Failed!', err.config)

        if (err.response) {
            // Request was made but server responded with something other than 2xx
            console.error('Status: ', err.response.status)
            console.error('Data: ', err.response.data)
            console.error('Headers: ', err.response.headers)
        } else {
            console.error('Error Message: ', err.message)
        }

        return Promise.reject(err.response || err.message);
    }

    return client(options).then(onSuccess).catch(onError)
}

export default request

