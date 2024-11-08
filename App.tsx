import React, {useEffect} from 'react';
import StackNavigator from './Navigation/StackNavigation';
import {Settings} from 'react-native-fbsdk-next';
import {Platform} from 'react-native';
import * as Sentry from '@sentry/react-native';
import {LogLevel, OneSignal} from 'react-native-onesignal';
import Geolocation from '@react-native-community/geolocation';
import LogRocket from '@logrocket/react-native';

Sentry.init({
  dsn: 'https://66e762c5edd4f71ab2d9fae889060559@o4508255429984256.ingest.us.sentry.io/4508255686492160',

  // uncomment the line below to enable Spotlight (https://spotlightjs.com)
  // enableSpotlight: __DEV__,
});

Settings.setAppID('271322427176951');
if (Platform.OS === 'ios' || Platform.OS === 'android') {
  Settings.initializeSDK();
}

const App = () => {
  useEffect(() => {
    LogRocket.init('iwbft5/estore');
    console.log('identify log rocket user', LogRocket.identify('harshit'));
    OneSignal.Debug.setLogLevel(LogLevel.Verbose);
    OneSignal.initialize('ea616c69-8c12-464f-bfaa-9ddcc0215d00');
    OneSignal.Notifications.requestPermission(true);
  }, []);

  useEffect(() => {
    Geolocation.getCurrentPosition(info => console.log(info.coords.accuracy));
  });

  // Method for listening for notification clicks
  OneSignal.Notifications.addEventListener('click', event => {
    console.log('OneSignal: notification clicked:', event);
  });

  return <StackNavigator />;
};

export default App;
