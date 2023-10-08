import axios from "axios"
import { GET_KHOA_HOC_URI } from "../api"


export const getAllKhoaHoc = (theLoai: string, page: number, pageSize: number) => {
    const response = axios({
        method: 'GET',
        url: GET_KHOA_HOC_URI.concat("?theLoai=" + theLoai + "&page=" + page + "&pageSize=" + pageSize)
    })
    return response
}