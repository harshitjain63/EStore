import {View, StyleSheet, Image} from 'react-native';
import React from 'react';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParams} from '../Navigation/StackNavigation';
import Header from '../components/Welcomecomponents/Header';
import {Images} from '../constants/Image';
import Footer from '../components/Welcomecomponents/Footer';

export type WelcomeScreenProp = NativeStackScreenProps<
  RootStackParams,
  'Welcome'
>;

const WelcomeSwitchAccountScreen = ({navigation, route}: WelcomeScreenProp) => {
  return (
    <View style={styles.container}>
      <Header navigation={navigation} route={route} />
      <Image source={Images.circleicon} style={styles.img} />
      <Footer navigation={navigation} route={route} />
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
    height: '15%',
    width: '33%',
    position: 'relative',
    marginTop: '56%',
  },
});
export default WelcomeSwitchAccountScreen;
