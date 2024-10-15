import {View, StyleSheet, Image} from 'react-native';
import React from 'react';
import Header from '../components/Signupcomponents/Header';
import {Images} from '../constants/Image';
import OtpVerification from '../components/Signupcomponents/OtpVerification';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParams} from '../Navigation/StackNavigation';

export type SignUpScreenProp = NativeStackScreenProps<
  RootStackParams,
  'Signup'
>;

const SignUpScreen = ({navigation, route}: SignUpScreenProp) => {
  return (
    <View style={styles.container}>
      <Header navigation={navigation} route={route} />
      <Image source={Images.ushericon} style={styles.img} />
      <OtpVerification navigation={navigation} route={route} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F3F2F2',
  },
  img: {
    alignSelf: 'center',
    height: '25%',
    width: '25%',
    resizeMode: 'contain',
    position: 'relative',
    marginTop: '45%',
  },
});

export default SignUpScreen;
