import { SafeAreaView,
    Text,
    TextInput,
    TouchableOpacity,
    View,
    StyleSheet } from "react-native"
import {useState,
        useEffect} from 'react'
import { Svg, Path  } from 'react-native-svg';
import { loginRegisterStyles } from "../styles/loginRegisterStyles";
import { buttonStyles } from "../components/ButtonStyles";
import { validateEmail, validatePassword } from "../ultils/validate";
import { loginApi, setAccessToken } from "../services/authentication/loginRegesterServices";
import CustomImageCarousal from "../components/Banner/CustomImageCarousalSquare";


const HomeScreen = ( {navigation} : {navigation: any} ) => {

    const handleLogout = async() => {
        try {
           setAccessToken('');
           navigation.navigate("LoginScreen")
        } catch (error) {
            alert(error)
        }
    }

    // const [images, setImages] = useState<any>([])

    // useEffect(() => {
    //     const initialData = [
    //     {
    //         name: require('../assets/images/test_images/sach1.jpg'),
    //     },
    //     {
    //         name: require('../assets/images/test_images/sach2.jpg'),
    //     },
    //     {
    //         name: require('../assets/images/test_images/sach3.jpg'),
    //     },
    //     {
    //         name: require('../assets/images/test_images/sach4.jpg'),
    //     },
    //     ];
    
    //     setImages([{key: 'left-spacer'}, ...initialData, {key: 'righ-spacer'}]);
    // }, []);



    return (
      <SafeAreaView style={styles.container}>
      
      </SafeAreaView>
        // {/* <View>
        //     <Text>Day la home page</Text>
        //     <TouchableOpacity onPress={handleLogout}><Text>Đăng xuất ở đây</Text></TouchableOpacity>
        // </View> */}
    )
}

export default HomeScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  text: {textAlign: 'center', color: 'black', marginBottom: 10},
  carouselContainer: {
    marginBottom: 20,
  },
});