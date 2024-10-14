import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import {StatusBar} from 'react-native';
import SplashScreen from '../Screens/SplashScreen';
import HomeScreen from '../Screens/HomeScreen';

export type RootStackParams = {
  Home: undefined;
  Splash: undefined;
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
      </stack.Navigator>
    </NavigationContainer>
  );
};

export default StackNavigator;
