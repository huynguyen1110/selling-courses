import { SafeAreaView,
        Text,
        TextInput,
        TouchableOpacity,
        View } from "react-native"
import {useState} from 'react'
import { Svg, Path  } from 'react-native-svg';
import { styles } from "../styles/commonStyle";
import { loginRegisterStyles } from "../styles/loginRegisterStyles";
import { buttonStyles } from "../components/ButtonStyles";
import { validateEmail, validateFullName, validatePassword } from "../services/authentication/loginRegesterServices";


const RegisterScreen = ( { navigation } : {navigation: any} ) => {

    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        password: '',
    });
    
    const [errors, setErrors] = useState({
        fullName: '',
        email: '',
        password: '',
    });

    const handleRegister = () => {
        const fullNameError = validateFullName(formData.fullName);
        const emailError = validateEmail(formData.email);
        const passwordError = validatePassword(formData.password);

        setErrors({
            fullName: fullNameError,
            email: emailError,
            password: passwordError,
        })
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
                        <TextInput style={[styles.text_input]} placeholder="Họ và tên" onChangeText={(value) => setFormData( {
                            ...formData,
                            fullName: value
                        } )}/>
                    </View>
                    <View style={[styles.underline_border]}></View>
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