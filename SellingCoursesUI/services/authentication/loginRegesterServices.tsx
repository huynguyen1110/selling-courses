import axios from "axios";
import * as SecureStore from 'expo-secure-store'
import { LoginData, RegisterData } from "../interfaces/authenticateInterfaces";
import axiosInstance, { addTokenToAxios } from "../../axios";

export const loginApi = ({ email, password }: LoginData) => {
    return axiosInstance({
        method: "POST",
        url: "/user/login",
        data: {
            email,
            password
        }
    })
}

export function registerApi( { firstName, lastName, sdt, email, password } : RegisterData ) {
  try {
    const responseData = axiosInstance({
      method: 'POST',
      url: "/user/create",
      data: {
        firstName: firstName,
        lastName: lastName,
        email: email,
        sdt: sdt,
        password: password
      }
    })
    return responseData
  } catch(err) {
    alert(err)
  }
}

//Access token 
export const setAccessToken = async(accessToken : string) => {
    if(!accessToken) {
        return false
    }
    try {
        await SecureStore.setItemAsync('accessToken', accessToken)
        addTokenToAxios(accessToken)
        return true
    } catch(error) {
        alert(error)
    }
    return false
}

export const getAccessToken = async() => {
    try {
        const accessToken = await SecureStore.getItemAsync('accessToken')
        return accessToken
    } catch (error) {
        alert(error)
        return null
    }
}

// const getUsersTest = async() => {
//     return axios({
//         method: "GET",
//         url: BASE_URL.concat("/users"),
//     })
// }
