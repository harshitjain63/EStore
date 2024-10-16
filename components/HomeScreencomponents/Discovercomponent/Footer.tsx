import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import React from 'react';
import {RootStackParams} from '../../../Navigation/StackNavigation';
import {NavigationProp} from '@react-navigation/native';

export type BottomNavScreenProp = NavigationProp<
  RootStackParams,
  'BottomNavigation'
>;

const Footer = ({navigation}: {navigation: BottomNavScreenProp}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.txt}>No filters applied</Text>
      <TouchableOpacity
        style={styles.btn}
        onPress={() => navigation.navigate('Filter')}>
        <Text style={styles.txtbtn}>FILTER</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    gap: 30,
    marginBottom: '5%',
    marginTop: '3%',
    backgroundColor: '#FFFFFF',
  },
  txt: {
    color: '#000000',
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: '4%',
  },
  txtbtn: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
    paddingLeft: 50,
    paddingRight: 50,
    paddingTop: 15,
    paddingBottom: 15,
  },
  btn: {
    borderRadius: 50,
    backgroundColor: '#FA4248',
  },
});

export default Footer;
