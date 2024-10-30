import {View, StyleSheet, Image} from 'react-native';
import React from 'react';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParams} from '../Navigation/StackNavigation';
import Header from '../components/Welcomecomponents/Header';
import Footer from '../components/Welcomecomponents/Footer';
import {useAppSelector} from '../redux/hooks';
import {Images} from '../constants/Image';

export type WelcomeScreenProp = NativeStackScreenProps<
  RootStackParams,
  'Welcome'
>;

const WelcomeSwitchAccountScreen = ({navigation, route}: WelcomeScreenProp) => {
  const {name, photo} = useAppSelector(state => state.auth);
  return (
    <View style={styles.container}>
      <Header navigation={navigation} route={route} />
      {photo ? (
        <Image source={{uri: photo}} style={styles.img} />
      ) : (
        <Image source={Images.ushericon} style={styles.img} />
      )}

      <Footer navigation={navigation} name={name} />
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
    borderRadius: 60,
  },
});
export default WelcomeSwitchAccountScreen;
