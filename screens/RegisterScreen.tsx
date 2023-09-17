import { SafeAreaView,
        Text,
        TextInput,
        TouchableOpacity,
        View } from "react-native"
import {useState, useEffect} from 'react'
import { Svg, Path  } from 'react-native-svg';
import { styles } from "../styles/commonStyle";
import { loginRegisterStyles } from "../styles/loginRegisterStyles";
import { buttonStyles } from "../components/ButtonStyles";
import { registerService, validateEmail, validateFullName, validatePassword, validatePhoneNumber } from "../services/authentication/loginRegesterServices"
import { RegisterInterface } from "../services/interfaces/authenticateInterfaces/authenticateInterface"



const RegisterScreen = ( { navigation } : {navigation: any} ) => {

    const [formData, setFormData] = useState({
        firstname: '',
        lastname: '',
        email: '',
        phoneNumber: '',
        password: '',
    });
    
    const [errors, setErrors] = useState({
        fullName: '',
        email: '',
        phoneNumber: '',
        password: ''
    });

    const handleRegister = () => {
        const fullNameError = validateFullName(formData.firstname)
        const emailError = validateEmail(formData.email)
        const phoneNumberError = validatePhoneNumber(formData.phoneNumber)
        const passwordError = validatePassword(formData.password)

        setErrors({
            fullName: fullNameError,
            email: emailError,
            phoneNumber: phoneNumberError,
            password: passwordError,
        })
        if (fullNameError === '' &&
                emailError === '' &&
                phoneNumberError === '' &&
                passwordError === '') {
               getInput()
        }
    }

    const getInput = async () => {
        const firstname = formData.firstname
        const lastname = formData.lastname
        const email = formData.email
        const phoneNumber = formData.phoneNumber
        const password = formData.password
        try {
            const data = await registerService( {firstname, lastname, email, phoneNumber, password} )
            console.log(data)
            return data
            
        } catch(err) {
            console.log(err + "1")
        }
    }

    return (
        <SafeAreaView style={[styles.main_container]} >
            <View style={[loginRegisterStyles.form_container]}>
                <Text style={[styles.header_text_1, styles.text_center, styles.large_margin_top]}>ULALA</Text>
                <Text style={[styles.header_text_2, styles.text_center]}>ĐĂNG KÝ TÀI KHOẢN</Text>

                <View style={[styles.large_margin_top]}>
                    <View style={[styles.horizontal_container, styles.small_margin_vertical]}>
                        <Svg style={[styles.icon_style]} viewBox="0 0 448 512">
                            <Path d="M304 128a80 80 0 1 0 -160 0 80 80 0 1 0 160 0zM96 128a128 128 0 1 1 256 0A128 128 0 1 1 96 128zM49.3 464H398.7c-8.9-63.3-63.3-112-129-112H178.3c-65.7 0-120.1 48.7-129 112zM0 482.3C0 383.8 79.8 304 178.3 304h91.4C368.2 304 448 383.8 448 482.3c0 16.4-13.3 29.7-29.7 29.7H29.7C13.3 512 0 498.7 0 482.3z"/>
                        </Svg>
                        <View style={[styles.horizontal_container, styles.item_space_between]}>
                            <TextInput style={[styles.small_text_input]} placeholder="Họ" onChangeText={(value) => setFormData( {
                                ...formData,
                                firstname: value
                            } )}/>
                            <TextInput style={[styles.small_text_input]} placeholder="Tên" onChangeText={(value) => setFormData( {
                                ...formData,
                                lastname: value
                            } )}/>
                        </View>
                    </View>
                    <View style={[styles.horizontal_container, styles.item_space_between]}>
                            <View style={[styles.half_underline_border]}></View>
                            <View style={[styles.half_underline_border]}></View>
                    </View>

                    <Text style={[loginRegisterStyles.err_message]}>{errors.fullName}</Text>

                    <View style={[styles.horizontal_container, styles.small_margin_vertical]}>
                        <Svg style={[styles.icon_style]} viewBox="0 0 512 512">
                            <Path d="M64 112c-8.8 0-16 7.2-16 16v22.1L220.5 291.7c20.7 17 50.4 17 71.1 0L464 150.1V128c0-8.8-7.2-16-16-16H64zM48 212.2V384c0 8.8 7.2 16 16 16H448c8.8 0 16-7.2 16-16V212.2L322 328.8c-38.4 31.5-93.7 31.5-132 0L48 212.2zM0 128C0 92.7 28.7 64 64 64H448c35.3 0 64 28.7 64 64V384c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V128z"/>
                        </Svg>
                        <TextInput style={[styles.text_input]} placeholder="Email" onChangeText={(value) => setFormData( {
                            ...formData,
                            email: value
                        } )} />
                    </View>
                    <View style={[styles.underline_border]}></View>
                    <Text style={[loginRegisterStyles.err_message]}>{errors.email}</Text>

                    <View style={[styles.horizontal_container, styles.small_margin_vertical]}>
                        <Svg style={[styles.icon_style]} viewBox="0 0 512 512">
                            <Path d="M164.9 24.6c-7.7-18.6-28-28.5-47.4-23.2l-88 24C12.1 30.2 0 46 0 64C0 311.4 200.6 512 448 512c18 0 33.8-12.1 38.6-29.5l24-88c5.3-19.4-4.6-39.7-23.2-47.4l-96-40c-16.3-6.8-35.2-2.1-46.3 11.6L304.7 368C234.3 334.7 177.3 277.7 144 207.3L193.3 167c13.7-11.2 18.4-30 11.6-46.3l-40-96z"/>
                        </Svg>
                        <TextInput style={[styles.text_input]} placeholder="Số điện thoại" onChangeText={(value) => setFormData( {
                            ...formData,
                            phoneNumber: value
                        } )} />
                    </View>
                    <View style={[styles.underline_border]}></View>
                    <Text style={[loginRegisterStyles.err_message]}>{errors.phoneNumber}</Text>

                    <View style={[styles.horizontal_container, styles.small_margin_vertical]}>
                        <Svg style={[styles.icon_style]} viewBox="0 0 448 512">
                            <Path d="M144 144v48H304V144c0-44.2-35.8-80-80-80s-80 35.8-80 80zM80 192V144C80 64.5 144.5 0 224 0s144 64.5 144 144v48h16c35.3 0 64 28.7 64 64V448c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V256c0-35.3 28.7-64 64-64H80z"/>
                        </Svg>
                        <TextInput style={[styles.text_input]} placeholder="Nhập mật khẩu" secureTextEntry={true} onChangeText={(value) => setFormData( {
                            ...formData,
                            password: value
                        } )} />
                    </View>
                    <View style={[styles.underline_border]}></View>
                    <Text style={[loginRegisterStyles.err_message]}>{errors.password}</Text>

                    <TouchableOpacity style={[buttonStyles.large_blue_button, styles.medium_margin_vertical]}
                    onPress={handleRegister}
                    >
                        <Text style={[styles.text_content]}>Đăng Ký</Text>
                    </TouchableOpacity>

                    <View style={[styles.horizontal_container, styles.item_center]}>
                        <Text style={[styles.text_content]}>Bạn đã có tài khoản ? </Text>
                        <TouchableOpacity onPress={() => { 
                            navigation.navigate("LoginScreen") 
                            setErrors({
                                fullName: '',
                                email: '',
                                phoneNumber: '',
                                password: ''
                            })
                            } }>
                            <Text style={[styles.text_content, styles.text_blue]}>Đăng nhập</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </SafeAreaView>
    )
}

export default RegisterScreen