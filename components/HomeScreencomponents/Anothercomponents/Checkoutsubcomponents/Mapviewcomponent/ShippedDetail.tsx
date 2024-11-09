import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {Images} from '../../../../../constants/Image';

const ShippedDetail = () => {
  return (
    <TouchableOpacity style={styles.Container}>
      <Image source={Images.check} style={styles.img} />
      <View style={{gap: 10, marginRight: '18%'}}>
        <Text style={styles.headtxt}>Qantas Airways</Text>
        <Text style={styles.bodytxt}>Shipped</Text>
        <Text style={styles.footertxt}>Melbourne, AU</Text>
      </View>
      <View style={styles.imgview}></View>
    </TouchableOpacity>
  );
};

export default ShippedDetail;

const styles = StyleSheet.create({
  Container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderRadius: 20,
    backgroundColor: '#FFF',
    elevation: 10,
    width: '85%',
    padding: '3%',
    marginTop: '140%',
    position: 'absolute',
    zIndex: 1,
    alignSelf: 'center',
  },
  img: {
    height: 30,
    width: 30,
  },
  headtxt: {
    color: '#FA4248',
    fontSize: 10,
  },
  bodytxt: {
    color: '#000000',
    fontSize: 16,
  },
  footertxt: {
    color: '#B4B4B4',
    fontSize: 12,
  },
  imgview: {
    height: 80,
    width: '28%',
    borderRadius: 15,
    backgroundColor: '#767676',
  },
});
