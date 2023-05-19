import {API, AUTH_API} from "../http";
import jwtDecode from "jwt-decode";


export const registration = async (email: string, password: string) => {
    const {data} = await API.post('users/registration', {email, password, role: 'ADMIN'})
    localStorage.setItem('token', data.token)
    return jwtDecode(data.token)
}

export const login = async (email: string, password: string) => {
    const data = await API.post('users/login', {email, password})
    localStorage.setItem('token', data.data.token)
    return jwtDecode(data.data.token)
}

export const check = async () => {
    const {data} = await AUTH_API.get('users/auth')
    localStorage.setItem('token', data.token)
    return jwtDecode(data.token)
}

export const incLikeCount = async (commentId: string, email: string) => {
    const {data} = await AUTH_API.post('comments/increase', {
        commentId: commentId,
        email: email
    })
    return data;
}
export const decLikeCount = async (commentId: string, email: string) => {
    const {data} = await AUTH_API.post('comments/decrease', {
        commentId: commentId,
        email: email
    })
    return data;
}