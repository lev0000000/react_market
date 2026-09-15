import { $authHost, $host } from "./index";
import { jwtDecode } from 'jwt-decode';
export const createType = async (type) => {
    const { data } = await $authHost.post('api/type/create', type)
    return data
}

export const fetchTypes = async () => {
    const { data } = await $host.get('api/type')
    return data
}

export const createBrand = async (type) => {
    const { data } = await $authHost.post('api/brand/create', type)
    return data
}

export const fetchBrands = async () => {
    const { data } = await $host.get('api/brand/')
    return data
}

export const createDevice = async (type) => {
    const { data } = await $authHost.post('api/device/create', type)
    return data
}

export const fetchDevices = async () => {
    const { data } = await $host.get('api/device/')
    return data
}

export const fetchOneDevices = async (id) => {
    const { data } = await $host.get('api/device/' + id)
    return data
}

export const check = async () => {
    const response = await $authHost.get('api/user/auth')
    localStorage.setItem('token', data.token)
    return jwtDecode(data.token)
}