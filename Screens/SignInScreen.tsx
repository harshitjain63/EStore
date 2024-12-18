import {
  StyleSheet,
  KeyboardAvoidingView,
  Platform,
  View,
  Text,
} from 'react-native';
import React from 'react';
import Header from '../components/Signincomponents/Header';
import Middle from '../components/Signincomponents/Middle';

import FacebookGoogle from '../components/Signincomponents/FacebookGoogle';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParams} from '../Navigation/StackNavigation';

export type SignInScreenProp = NativeStackScreenProps<
  RootStackParams,
  'Signin'
>;

const SignInScreen = ({navigation, route}: SignInScreenProp) => {
  return (
    <KeyboardAvoidingView
      style={styles.maincontainer}
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
      keyboardVerticalOffset={Platform.OS === 'ios' ? 60 : 0}>
      <View style={styles.scrollview}>
        <Header />
        <Middle navigation={navigation} route={route} />
        <View style={styles.container}>
          <Text style={styles.ortext}>-OR-</Text>
        </View>
        <FacebookGoogle navigation={navigation} route={route} />
        <View style={styles.minicontainer}>
          <Text style={styles.txt}>
            Don&apos;t have an account?{' '}
            <Text
              style={styles.signuptxt}
              onPress={() => {
                navigation.navigate('Signup');
              }}>
              Signup
            </Text>
          </Text>
        </View>
        <FacebookGoogle navigation={navigation} route={route} />
      </View>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  maincontainer: {flex: 1, backgroundColor: '#444'},
  scrollview: {flex: 1, position: 'relative'},
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
  signuptxt: {
    color: 'red',
    fontSize: 14,
  },
  txt: {
    color: 'black',
    fontSize: 14,
    left: '39%',
  },
  minicontainer: {
    position: 'absolute',
    flexDirection: 'row',
    end: 'auto',
    top: '95%',
  },
});

export default SignInScreen;
