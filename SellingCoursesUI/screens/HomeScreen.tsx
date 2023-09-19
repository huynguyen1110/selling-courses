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
import { validateEmail, validatePassword } from "../ultils/validate";
import { loginApi, setAccessToken } from "../services/authentication/loginRegesterServices";


const HomeScreen = ( {navigation} : {navigation: any} ) => {

    const handleLogout = async() => {
        try {
           setAccessToken('');
           navigation.navigate("LoginScreen")
        } catch (error) {
            alert(error)
        }
    }

    return (
        <View>
            <Text>Day la home page</Text>
            <TouchableOpacity onPress={handleLogout}><Text>Đăng xuất ở đây</Text></TouchableOpacity>
        </View>
    )
}

export default HomeScreen