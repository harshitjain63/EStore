import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  Alert,
} from 'react-native';
import React, {useEffect, useState, useCallback} from 'react';
import {Images} from '../../constants/Image';
import {
  GoogleSignin,
  isErrorWithCode,
  isSuccessResponse,
  statusCodes,
} from '@react-native-google-signin/google-signin';
import {AccessToken, LoginManager} from 'react-native-fbsdk-next';

const FacebookGoogle = () => {
  const [state, setState] = useState({});
  console.log(state);

  useEffect(() => {
    GoogleSignin.configure({
      webClientId: 'YOUR_GOOGLE_WEB_CLIENT_ID',
    });
  }, []);

  // Google Sign-In function
  const signInWithGoogle = useCallback(async () => {
    try {
      await GoogleSignin.hasPlayServices();
      const response = await GoogleSignin.signIn();
      if (isSuccessResponse(response)) {
        setState({userInfo: response.data});
        Alert.alert('Google Login Success', JSON.stringify(response.data));
      } else {
        console.log('User canceled Google login');
      }
    } catch (error) {
      if (isErrorWithCode(error)) {
        switch (error.code) {
          case statusCodes.IN_PROGRESS:
            console.log('Google Sign-In is already in progress');
            break;
          case statusCodes.PLAY_SERVICES_NOT_AVAILABLE:
            console.log('Google Play Services not available');
            break;
          default:
            console.log(error);
        }
      } else {
        console.log('Google Sign-In error:', error);
      }
    }
  }, []);

  // Facebook Sign-In function
  const signInWithFacebook = useCallback(async () => {
    try {
      // Logout any existing session to force a fresh login
      await LoginManager.logOut();

      // Initiate Facebook login
      LoginManager.logInWithPermissions(['public_profile', 'email']).then(
        async function (result) {
          if (result.isCancelled) {
            Alert.alert('Facebook Login Cancelled');
          } else {
            // Get access token and confirm successful login
            const data = await AccessToken.getCurrentAccessToken();
            if (data) {
              Alert.alert('Facebook Login Success', JSON.stringify(data));
              console.log('Access Token:', data.accessToken.toString());
            } else {
              Alert.alert(
                'Facebook Login Failed',
                'Access token not available',
              );
            }
          }
        },
        function (error) {
          Alert.alert('Facebook Login Failed', 'Error: ' + error);
        },
      );
    } catch (error) {
      console.log('Facebook Sign-In error:', error);
      Alert.alert('Facebook Login Error', error?.toString());
    }
  }, []);

  return (
    <View style={styles.scrollview}>
      <TouchableOpacity style={styles.facebook} onPress={signInWithFacebook}>
        <Image source={Images.facebookicon} style={styles.img} />
        <Text style={styles.fbtxt}>Sign In with Facebook</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.google} onPress={signInWithGoogle}>
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
