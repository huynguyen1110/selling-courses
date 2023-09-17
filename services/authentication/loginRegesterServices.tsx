import { registerUri } from "../api/appApi";
import { RegisterInterface } from "../interfaces/authenticateInterfaces/authenticateInterface"
import axios from 'axios'

export function validateFullName(fullName: string) {
    if (fullName.trim() === '') {
      return 'Không để trông trường này';
    }
    return '';
  }
  
export function validateEmail(email: string) {
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

    if (email.trim() === '') {
      return 'Vui lòng nhập email';
    } else if(!emailRegex.test(email)) {
        return 'email không hợp lệ'
    }
    return '';
}
  
export function validatePassword(password: string) {

    const specialCharRegex = /[!@#$%^&*()_+{}\[\]:;<>,.?~\\-]/
    const capitalLettersRegex = /[A-Z]/

    if (password.trim() === '') {
      return 'Vui lòng nhập mật khẩu'
    }

    if (password.length < 8) {
        return 'Độ dài mật khẩu tối thiểu 8 ký tự'
    } 
    
    if (!capitalLettersRegex.test(password)) {
        return 'Mật khẩu phải có ít nhất một ký tự in hoa'
    }

    if (!specialCharRegex.test(password)) {
        return 'Mật khẩu có ít nhất một ký tự đặc biệt';
    }
    return '';
}

export function validatePhoneNumber(phoneNumber: string) {
  const regex = /^(0[1-9][0-9]{8}|[+][8][4][1-9][0-9]{7})$/;

  if(phoneNumber === '') {
    return 'Vui lòng nhập số điện thoại'
  }

  if (!regex.test(phoneNumber)) {
    return 'Số điện thoại không hợp lệ'
  }
  return ''
}

export function registerService( { firstname, lastname, email, phoneNumber, password } : RegisterInterface ) {
  try {
    const responseData = axios({
      method: 'POST',
      url: registerUri,
      data: {
        firstName: firstname,
        lastName: lastname,
        email: email,
        sdt: phoneNumber,
        password: password
      }
    })
    return responseData
  } catch(err) {
    console.log(err + "sa")
  }
}