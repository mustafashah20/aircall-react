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

export const quickRefreshToken = () => {
    api.post('/auth/refresh-token',
    ).then(res => {
        localStorage.setItem('access-token', res.data.access_token)
    })
}

const refreshtoken = () => {
    setTimeout(() => {
        api.post('/auth/refresh-token',
        ).then(res => {
            localStorage.setItem('access-token', res.data.access_token)
            refreshtoken();
        })
    }, 9 * 60 * 1000)
}

export const getCalls = (offset, limit) => {
    return api.get(`/calls?offset=${offset}&limit=${limit}`).then(
        res => {
            return res.data
        }
    )
}

export const getCallById = (id) => {
    return api.get(`/calls/${id}`).then(
        res => {
            return res.data
        }
    )
}