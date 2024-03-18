/**
 * @format
 */

import 'react-native-gesture-handler';
import { AppRegistry } from 'react-native';
import App from '@/main';
import { name as appName } from './app.json';
import SplashScreen from 'react-native-splash-screen';

import { GestureHandlerRootView } from 'react-native-gesture-handler';

AppRegistry.registerComponent(appName, () => {
    SplashScreen.hide()
    return App
});
