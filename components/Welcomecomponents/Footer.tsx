import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import React from 'react';
import {WelcomeScreenProp} from '../../Screens/WelcomeSwitchAccountScreen';

const Footer = ({navigation}: WelcomeScreenProp) => {
  return (
    <View style={styles.middlecontainer}>
      <Text style={styles.welcometext}>Welcome Back</Text>
      <Text style={styles.signuptext}>Jameson Dunn</Text>

      <TouchableOpacity
        style={styles.signinbutton}
        onPress={() => navigation.navigate('BottomNavigation')}>
        <Text style={styles.signinbuttontext}>CONTINUE AS JAMESON</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.transparentsigninbutton}
        onPress={() => navigation.navigate('Signup')}>
        <Text style={styles.transparentsigninbuttontext}>SWITCH ACCOUNT</Text>
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
  middlecontainer: {
    position: 'relative',
    alignContent: 'center',
    marginTop: '13%',
  },
  welcometext: {
    color: '#000000',
    fontWeight: 'bold',
    fontSize: 24,
    alignSelf: 'center',
  },
  signuptext: {
    color: '#7E7D7D',
    fontSize: 15,
    marginTop: '2.54%',
    alignSelf: 'center',
    fontWeight: 'bold',
  },
  secondsignuptext: {
    alignSelf: 'center',
    color: '#474747',
    fontSize: 12,
  },
  signinbutton: {
    backgroundColor: 'red',
    position: 'relative',
    width: '82%',
    alignItems: 'center',
    borderRadius: 25,
    alignSelf: 'center',
    marginTop: '20%',
  },
  signinbuttontext: {
    color: 'white',
    padding: '5%',
    fontWeight: 'bold',
  },
  transparentsigninbutton: {
    position: 'relative',
    width: '82%',
    alignItems: 'center',
    borderRadius: 25,
    alignSelf: 'center',
    marginTop: '2%',
    borderWidth: 1,
    borderColor: '#DDDDDD',
  },
  transparentsigninbuttontext: {
    color: '#151515',
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
    marginTop: '40%',
    bottom: 0,
    marginVertical: '5%',
  },
});

export default Footer;
