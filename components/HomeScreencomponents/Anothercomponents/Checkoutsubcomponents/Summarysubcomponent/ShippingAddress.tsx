import {View, Text, Image, StyleSheet, TouchableOpacity} from 'react-native';
import React from 'react';
import {Images} from '../../../../../constants/Image';

const ShippingAddress = () => {
  return (
    <View>
      <View style={styles.row}>
        <Text style={{color: 'black', fontWeight: 'bold', fontSize: 15}}>
          Shipping Address
        </Text>
        <Image source={Images.check} style={styles.img} />
      </View>
      <Text style={styles.input}>
        12, Bay brook, Sharps Rd, keilor East, Melbourne, Australia
      </Text>
      <TouchableOpacity>
        <Text style={{color: '#FA4248', marginTop: '2%', marginBottom: '6%'}}>
          Change
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: '5%',
  },
  img: {
    height: 20,
    width: 20,
  },
  txt: {
    color: '#757575',
    fontSize: 13,
  },
  input: {
    color: '#757575',
    fontSize: 15,
    height: 40,
    width: '83%',
    marginTop: '6%',
  },
});

export default ShippingAddress;
