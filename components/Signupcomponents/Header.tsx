import {View, Text, Image, StyleSheet, TouchableOpacity} from 'react-native';
import React from 'react';
import {Images} from '../../constants/Image';
import {SignUpScreenProp} from '../../Screens/SignUpScreen';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const Header = ({navigation, route}: SignUpScreenProp) => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.navigate('Signin')}>
          <Image style={styles.img} source={Images.backarrowicon} />
        </TouchableOpacity>
        <Text style={styles.signuptxt}>Sign up</Text>
      </View>
      <View style={styles.minicontainer}>
        <Text style={styles.brandText}>Superstore</Text>
        <Text style={styles.fashionText}>FASHION</Text>
        <View style={styles.line} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F3F2F2',
    position: 'absolute',
    width: '100%',
  },
  header: {
    flexDirection: 'row',
    marginTop: '15%',
    justifyContent: 'space-between',
    marginHorizontal: '8%',
  },
  img: {
    height: 20,
    width: 20,
  },
  minicontainer: {
    alignItems: 'center',
    marginTop: '5%',
  },
  brandText: {
    fontSize: 32,
    color: '#151515',
    marginBottom: '1%',
  },
  fashionText: {
    fontSize: 10,
    color: '#151515',
    fontWeight: 'normal',
    marginBottom: '29%',
    marginRight: -18,
  },
  line: {
    position: 'absolute',
    width: 2,
    height: '32.8%',
    backgroundColor: '#151515',
    top: '3%',
    left: '60.5%',
  },
  signuptxt: {
    color: '#FA4248',
    fontSize: 14,
    fontWeight: 'bold',
  },
});

export default Header;
