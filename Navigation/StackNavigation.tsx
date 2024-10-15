import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import {StatusBar} from 'react-native';
import SplashScreen from '../Screens/SplashScreen';
import HomeScreen from '../Screens/HomeScreen';
import SignInScreen from '../Screens/SignInScreen';
import SignUpScreen from '../Screens/SignUpScreen';
import WelcomeSwitchAccountScreen from '../Screens/WelcomeSwitchAccountScreen';
import MainTabNavigator from './BottomNavigation';

export type RootStackParams = {
  Home: undefined;
  Splash: undefined;
  Signin: undefined;
  Signup: undefined;
  Welcome: undefined;

  BottomNavigation: undefined;
};

const stack = createNativeStackNavigator<RootStackParams>();

const StackNavigator = () => {
  return (
    <NavigationContainer>
      <StatusBar translucent={true} backgroundColor={'transparent'} />
      <stack.Navigator
        screenOptions={{
          animation: 'slide_from_right',
        }}>
        <stack.Screen
          options={{headerShown: false}}
          name="Splash"
          component={SplashScreen}
        />

        <stack.Screen
          options={{headerShown: false}}
          name="Home"
          component={HomeScreen}
        />
        <stack.Screen
          options={{headerShown: false}}
          name="Signin"
          component={SignInScreen}
        />
        <stack.Screen
          options={{headerShown: false}}
          name="Signup"
          component={SignUpScreen}
        />
        <stack.Screen
          options={{headerShown: false}}
          name="Welcome"
          component={WelcomeSwitchAccountScreen}
        />
        <stack.Screen
          options={{headerShown: false}}
          name="BottomNavigation"
          component={MainTabNavigator}
        />
      </stack.Navigator>
    </NavigationContainer>
  );
};

export default StackNavigator;
