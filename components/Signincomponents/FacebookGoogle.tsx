import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  Alert,
} from 'react-native';
import React, {useEffect, useCallback} from 'react';
import {Images} from '../../constants/Image';
import {
  GoogleSignin,
  isErrorWithCode,
  isSuccessResponse,
  statusCodes,
} from '@react-native-google-signin/google-signin';
import {AccessToken, LoginManager} from 'react-native-fbsdk-next';
import {useAppDispatch} from '../../redux/hooks';
import {setUser} from '../../redux/Slice/userSlice';
import {SignInScreenProp} from '../../Screens/SignInScreen';

const FacebookGoogle = ({navigation}: SignInScreenProp) => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    GoogleSignin.configure({
      webClientId:
        '811791922192-urmt5mn579bnoj5teivbg1on87c74dpr.apps.googleusercontent.com',
    });
  }, []);

  const signInWithGoogle = useCallback(async () => {
    try {
      await GoogleSignin.hasPlayServices();
      const response = await GoogleSignin.signIn();
      if (isSuccessResponse(response)) {
        const {name, email, photo} = response.data.user;
        dispatch(setUser({name, email, photo}));
        navigation.navigate('Welcome');
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

  const signInWithFacebook = useCallback(async () => {
    try {
      const result = await LoginManager.logInWithPermissions([
        'public_profile',
        'email',
      ]);
      console.log('Login result:', result);

      if (result.isCancelled) {
        Alert.alert('Facebook Login Cancelled');
      } else {
        const data = await AccessToken.getCurrentAccessToken();
        if (data) {
          const userInfoResponse = await fetch(
            `https://graph.facebook.com/me?access_token=${data.accessToken}&fields=id,name,email,picture`,
          );
          const userInfo = await userInfoResponse.json();

          console.log('User Info:', userInfo);

          dispatch(
            setUser({
              name: userInfo.name,
              email: userInfo.email,
              photo: userInfo.picture.data.url,
            }),
          );
          Alert.alert('Facebook Login Success', JSON.stringify(userInfo));
          navigation.navigate('Welcome');
        } else {
          Alert.alert('Facebook Login Failed', 'Access token not available');
        }
      }
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
