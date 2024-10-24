import {View, Text, StyleSheet, TouchableOpacity, Image} from 'react-native';
import React from 'react';
import {Images} from '../../../../../constants/Image';

const Footer = () => {
  return (
    <View>
      <Text style={{fontWeight: 'bold', fontSize: 15, color: 'black'}}>
        Payment
      </Text>
      <View style={styles.row}>
        <Image source={Images.mastercard} style={{height: 70, width: 70}} />
        <View>
          <Text
            style={{
              color: '#929292',
              fontSize: 11,
              marginTop: '19%',
              left: '-47%',
            }}>
            Master Card
          </Text>
          <Text style={{color: 'black', fontSize: 12, left: '-47%'}}>
            **** **** **** 4543
          </Text>
        </View>
        <Image
          source={Images.check}
          style={{height: 20, width: 20, marginTop: '7.5%'}}
        />
      </View>
      <TouchableOpacity>
        <Text style={{color: '#FA4248', marginTop: '2%', marginBottom: '6%'}}>
          Change
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});

export default Footer;
