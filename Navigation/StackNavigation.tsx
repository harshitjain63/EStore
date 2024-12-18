import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import {StatusBar} from 'react-native';
import SplashScreen from '../Screens/SplashScreen';
import HomeScreen from '../Screens/HomeScreen';
import SignInScreen from '../Screens/SignInScreen';
import SignUpScreen from '../Screens/SignUpScreen';
import WelcomeSwitchAccountScreen from '../Screens/WelcomeSwitchAccountScreen';
import Filter from '../components/HomeScreencomponents/Discovercomponent/Filter';
import MainTabNavigator from './BottomNavigation';
import {Provider} from 'react-redux';
import {store} from '../redux/Store';
import SelectedCategory from '../components/HomeScreencomponents/Discovercomponent/SelectedCategory';
import SelectedProduct from '../components/HomeScreencomponents/Discovercomponent/SelectedProduct';

export type RootStackParams = {
  Home: undefined;
  Splash: undefined;
  Signin: undefined;
  Signup: undefined;
  Welcome: undefined;
  Filter: undefined;
  BottomNavigation: undefined;
  selectedcategory: {name: string};
  selectedproduct: {id: number; product: string; price: string};
};

const stack = createNativeStackNavigator<RootStackParams>();

const linking = {
  prefixes: ['estore://', 'https://estore.com/', 'http://estore.com/'],
  config: {
    screens: {
      selectedcategory: 'category/:name',

      BottomNavigation: {
        path: 'bottomnav',
        screens: {
          Drawer: {
            path: 'drawer',
            screens: {
              categories: {
                path: 'category',
                screens: {
                  selectedproduct: 'product/:id',
                },
              },
            },
          },
        },
      },
    },
  },
};

const StackNavigator = () => {
  return (
    <Provider store={store}>
      <NavigationContainer linking={linking}>
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
          <stack.Screen
            options={{
              headerShown: false,
            }}
            name="Filter"
            component={Filter}
          />

          <stack.Screen
            options={{
              headerShown: false,
            }}
            name="selectedcategory"
            component={SelectedCategory}
          />

          <stack.Screen
            options={{
              headerShown: false,
            }}
            name="selectedproduct"
            component={SelectedProduct}
          />
        </stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
};

export default StackNavigator;
