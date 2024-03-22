import 'react-native-gesture-handler';
import React, { useEffect, useCallback } from 'react';
import {
  DarkTheme,
  DefaultTheme,
  NavigationContainer,
} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from '@/screens/login';
import SignUp from '@/screens/signUp';
import SplashScreen from 'react-native-splash-screen';
import   OtpVerification  from '@/screens/otpVerification';
import {BasicInformation} from '@/screens/basicInformation';
import ForgotPassword from '@/screens/forgotPassword';
import { SCREEN } from './screens';
import { Screen } from 'react-native-screens';
import { Booking } from '@/screens/booking';
const Stack = createNativeStackNavigator();
const Routes: React.FC = () => {
  return <HomeNavigation />;
};

const HomeNavigation: React.FC = () => {
  useEffect(() => {

    SplashScreen.hide()

  }, [])
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Booking"
        screenOptions={{
          headerStyle: { backgroundColor: '#633689' },
          headerTintColor: '#fff',
          headerShown: false,
          headerTitleStyle: { fontWeight: 'bold' },
        }}>
        <Stack.Screen name={SCREEN.LOGIN} component={Login} />
        <Stack.Screen name="BasicInformation" component={BasicInformation} />
        <Stack.Screen name="Booking" component={Booking} />
        <Stack.Screen name={SCREEN.SIGNUP} component={SignUp} />
        <Stack.Screen name={SCREEN.FORGOTPASSWORD} component={ForgotPassword} />
        <Stack.Screen name={SCREEN.OTPVERIFICATION} component={OtpVerification} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Routes;
export * from './screens'
