import React from 'react';
import StackNavigator from './Navigation/StackNavigation';
import {Settings} from 'react-native-fbsdk-next';
import {Platform} from 'react-native';

Settings.setAppID('271322427176951');
if (Platform.OS === 'ios' || Platform.OS === 'android') {
  Settings.initializeSDK();
}

const App = () => {
  return <StackNavigator />;
};

export default App;
