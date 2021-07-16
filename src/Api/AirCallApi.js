import axios from "axios";

const api = axios.create({
    baseURL: 'https://frontend-test-api.aircall.io',
    headers: {
        Authorization: `Bearer ${localStorage.getItem('access-token')}`
    }
})

export const authenticate = () => {
    api.post('/auth/login',
        {
            username: 'mustafa',
            password: 'password'
        }
    ).then(res => {
        localStorage.setItem('access-token', res.data.access_token)
        refreshtoken();
    })
}

const refreshtoken = () => {
    api.post('/auth/refresh-token',
    ).then(res => {
        localStorage.setItem('access-token', res.data.access_token)
        setTimeout(() => {
            refreshtoken();
        }, 9 * 60 * 1000)
    })
}

export const getCalls = () => {
    api.get('/calls')
        .then(res => {
            console.log(res.data);
        })
}