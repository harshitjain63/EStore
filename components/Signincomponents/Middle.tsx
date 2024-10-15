import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';
import {SignInScreenProp} from '../../Screens/SignInScreen';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const Middle = ({navigation, route}: SignInScreenProp) => {
  const [borderColor, setBorderColor] = useState<string>('#ccc');
  const [borderColor2, setBorderColor2] = useState<string>('#ccc');
  return (
    <View style={styles.middlecontainer}>
      <Text style={styles.welcometext}>Welcome</Text>
      <Text style={styles.signuptext}>
        Sign up to get started and experience
      </Text>
      <Text style={styles.secondsignuptext}>great shopping deals</Text>
      <TextInput
        placeholder="Username"
        style={[styles.usernameinput, {borderBottomColor: borderColor}]}
        onFocus={() => setBorderColor('red')}
        onBlur={() => setBorderColor('grey')}
        placeholderTextColor={'grey'}
      />
      <TextInput
        placeholder="Password"
        style={[styles.usernameinput, {borderBottomColor: borderColor2}]}
        onFocus={() => setBorderColor2('red')}
        onBlur={() => setBorderColor2('grey')}
        placeholderTextColor={'grey'}
        secureTextEntry
      />
      <TouchableOpacity
        style={styles.signinbutton}
        onPress={() => navigation.navigate('Signup')}>
        <Text style={styles.signinbuttontext}>SIGN IN</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  middlecontainer: {
    backgroundColor: 'white',
    borderRadius: 50,
    alignItems: 'center',
    paddingVertical: 15,
    paddingBottom: '11%',
    position: 'absolute',
    top: '24.2%',
    width: '100%',
    zIndex: 1,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.3,
    shadowRadius: 6.68,
    elevation: 8,
  },
  welcometext: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: 24,
    marginTop: '5%',
  },
  signuptext: {
    color: 'grey',
    fontSize: 12,
    marginTop: '2.54%',
  },
  secondsignuptext: {
    alignSelf: 'center',
    color: 'grey',
    fontSize: 12,
  },
  usernameinput: {
    borderBottomWidth: 1,
    fontSize: 15,
    height: 40,
    width: '90%',
    marginTop: '3%',
    color: 'black',
  },
  signinbutton: {
    backgroundColor: 'red',
    marginTop: '7%',
    width: '80%',
    alignItems: 'center',
    borderRadius: 25,
  },
  signinbuttontext: {
    color: 'white',
    padding: '5%',
    fontWeight: 'bold',
  },
});

export default Middle;
