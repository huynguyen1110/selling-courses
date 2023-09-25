import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import RegisterScreen from './screens/RegisterScreen';
import LoginScreen from './screens/LoginScreen';
import ForgotPassWordScreen from './screens/ForgotPasswordScreen';
import HomeScreen from './screens/HomeScreen';
import ImageBannerCarousel from './components/Banner/CarouselBanner';


const Stack = createNativeStackNavigator()

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='image'>
        <Stack.Screen name='RegisterScreen' component={RegisterScreen} options={{headerShown:false}} />
        <Stack.Screen name='LoginScreen' component={LoginScreen} options={{headerShown:false}} />
        <Stack.Screen name='ForgotPassWordScreen' component={ForgotPassWordScreen} options={{headerShown:false}} />
        <Stack.Screen name='HomeScreen' component={HomeScreen} options={{headerShown:false}} />
        <Stack.Screen name='image' component={ImageBannerCarousel} options={{headerShown:false}} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
