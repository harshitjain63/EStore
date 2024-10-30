import {View, Text, Image, StyleSheet, TouchableOpacity} from 'react-native';
import React, {useEffect, useState} from 'react';
import {Images} from '../../constants/Image';
import {
  GoogleSignin,
  isErrorWithCode,
  isSuccessResponse,
  statusCodes,
} from '@react-native-google-signin/google-signin';
// import {
//   LoginButton,
//   AccessToken,
//   GraphRequest,
//   GraphRequestManager,
// } from 'react-native-fbsdk';
import {LoginManager} from 'react-native-fbsdk-next';
import {Alert} from 'react-native';

const FacebookGoogle = () => {
  // const [userInfo, setUserInfo] = useState(null);

  useEffect(() => {
    GoogleSignin.configure({
      webClientId:
        '811791922192-urmt5mn579bnoj5teivbg1on87c74dpr.apps.googleusercontent.com',
    });
  }, []);

  const [state, setState] = useState({});
  const signIn = async () => {
    console.log('started function');
    try {
      console.log('try working');
      await GoogleSignin.hasPlayServices();
      const response = await GoogleSignin.signIn();
      console.log(response, 'response');
      if (isSuccessResponse(response)) {
        setState({userInfo: response.data});
      } else {
        console.log('canceled by user');
      }
    } catch (error) {
      if (isErrorWithCode(error)) {
        switch (error.code) {
          case statusCodes.IN_PROGRESS:
            console.log('already in progress');
            break;
          case statusCodes.PLAY_SERVICES_NOT_AVAILABLE:
            console.log('play services not available or outdated');
            break;
          default:
            console.log(error);
        }
      } else {
        console.log(error);
      }
    }
  };

  return (
    <View style={styles.scrollview}>
      <TouchableOpacity
        style={styles.facebook}
        onPress={() => {
          LoginManager.logInWithPermissions(['public_profile', 'email']).then(
            function (result) {
              if (result.isCancelled) {
                Alert.alert('Login Cancelled ' + JSON.stringify(result));
              } else {
                Alert.alert('Login success with  permisssions: ');
                Alert.alert('Login Success ' + result.toString());
              }
            },
            function (error) {
              Alert.alert('Login failed with error: ' + error);
            },
          );
        }}>
        <Image source={Images.facebookicon} style={styles.img} />
        <Text style={styles.fbtxt}>Sign In with Facebook</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.google} onPress={signIn}>
        <Image source={Images.googleicon} style={styles.img} />
        <Text style={styles.fbtxt}>Sign In with Google</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  maincontainer: {flex: 1, backgroundColor: '#444'},
  scrollview: {flex: 1, position: 'absolute', width: '100%', height: '100%'},
  container: {
    height: '100%',
    backgroundColor: 'white',
    alignItems: 'center',
  },
  ortext: {
    color: 'grey',
    fontSize: 18,
    marginTop: '80%',
    fontWeight: 'bold',
  },
  facebook: {
    backgroundColor: 'white',
    width: '80%',
    flexDirection: 'row',
    borderRadius: 25,
    borderWidth: 1,
    top: '73%',
    position: 'absolute',
    height: '6%',
    alignSelf: 'center',
    borderColor: '#DDDDDD',
  },
  google: {
    backgroundColor: 'white',
    width: '80%',
    flexDirection: 'row',
    borderRadius: 25,
    borderWidth: 1,
    top: '80%',
    position: 'absolute',
    height: '6%',
    alignSelf: 'center',
    borderColor: '#DDDDDD',
  },
  img: {
    height: '9%',
    width: '9%',
    padding: 14,
    left: '6%',
    alignSelf: 'center',
  },
  fbtxt: {
    fontSize: 15,
    color: 'black',
    fontWeight: 'bold',
    alignSelf: 'center',
    left: '16%',
  },
});

export default FacebookGoogle;
