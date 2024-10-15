import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import React from 'react';
import {OtpInput} from 'react-native-otp-entry';
import {SignUpScreenProp} from '../../Screens/SignUpScreen';

const OtpVerification = ({navigation}: SignUpScreenProp) => {
  return (
    <View style={styles.middlecontainer}>
      <Text style={styles.welcometext}>Verification</Text>
      <Text style={styles.signuptext}>A 5-Digit PIN has been sent to your</Text>
      <Text style={styles.secondsignuptext}>
        email.Enter it below to continue
      </Text>

      <OtpInput
        numberOfDigits={5}
        focusColor="green"
        focusStickBlinkingDuration={500}
        onTextChange={text => console.log(text)}
        onFilled={text => console.log(`OTP is ${text}`)}
        textInputProps={{
          accessibilityLabel: 'One-Time Password',
        }}
        theme={{
          filledPinCodeContainerStyle: styles.pincodebackground,
          containerStyle: styles.otpcontainer,
          pinCodeContainerStyle: styles.pinCodeContainer,
          pinCodeTextStyle: styles.pinCodeText,
          focusStickStyle: styles.focusStick,
          focusedPinCodeContainerStyle: styles.activePinCodeContainer,
        }}
      />
      <TouchableOpacity
        style={styles.signinbutton}
        onPress={() => navigation.navigate('Welcome')}>
        <Text style={styles.signinbuttontext}>CONTINUE</Text>
      </TouchableOpacity>

      <Text style={styles.txt}>
        Already have an account?{' '}
        <Text
          style={styles.signuptxt}
          onPress={() => {
            navigation.navigate('Signin');
          }}>
          Sign in
        </Text>
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  pincodebackground: {
    backgroundColor: '',
  },
  activePinCodeContainer: {
    borderColor: 'black',
  },
  focusStick: {
    backgroundColor: 'black',
    width: 1,
    height: 15,
  },
  pinCodeText: {
    fontSize: 15,
    color: 'black',
  },
  otpcontainer: {
    width: '80%',
    height: '50%',
    position: 'relative',
    marginTop: '10%',
    marginHorizontal: '10%',
  },
  pinCodeContainer: {
    height: 45,
    width: 45,
    borderRadius: 3,
    backgroundColor: '#FFFFFF',
  },
  middlecontainer: {
    position: 'relative',
    alignContent: 'center',
  },
  welcometext: {
    color: '#000000',
    fontWeight: 'bold',
    fontSize: 24,
    alignSelf: 'center',
  },
  signuptext: {
    color: '#474747',
    fontSize: 12,
    marginTop: '2.54%',
    alignSelf: 'center',
  },
  secondsignuptext: {
    alignSelf: 'center',
    color: '#474747',
    fontSize: 12,
  },
  signinbutton: {
    backgroundColor: 'red',
    position: 'absolute',
    width: '82%',
    alignItems: 'center',
    borderRadius: 25,
    alignSelf: 'center',
    marginTop: '50%',
  },
  signinbuttontext: {
    color: 'white',
    padding: '5%',
    fontWeight: 'bold',
  },
  signuptxt: {
    color: '#E21E1E',
    fontSize: 14,
  },
  txt: {
    color: '#404040',
    fontSize: 14,
    alignSelf: 'center',
  },
});

export default OtpVerification;
