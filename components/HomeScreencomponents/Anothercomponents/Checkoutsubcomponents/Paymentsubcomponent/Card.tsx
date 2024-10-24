import {View, Text, Image, TextInput, StyleSheet} from 'react-native';
import React from 'react';
import {Images} from '../../../../../constants/Image';

const Card = () => {
  return (
    <View>
      <View style={{paddingHorizontal: '8%', marginTop: '8%'}}>
        <Text style={styles.txt}>Name on Card</Text>
        <TextInput
          placeholder="Write Something"
          placeholderTextColor={'grey'}
          style={styles.input}
        />
      </View>
      <View style={{paddingHorizontal: '8%', marginTop: '8%'}}>
        <Text style={styles.txt}>Card Number</Text>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            borderBottomWidth: 1,
            borderBottomColor: '#B4B4B4',
          }}>
          <TextInput
            placeholder="Write Something"
            placeholderTextColor={'grey'}
            style={{color: '#000000', fontSize: 15}}
          />
          <Image source={Images.mastercard} style={{height: 45, width: 45}} />
        </View>
      </View>
      <View style={styles.row}>
        <View style={{marginTop: '8%'}}>
          <Text style={styles.txt}>Expiry Date</Text>
          <TextInput
            placeholder="Write Something"
            placeholderTextColor={'grey'}
            style={styles.input}
          />
        </View>
        <View style={{marginTop: '8%'}}>
          <Text style={styles.txt}>Cvv</Text>
          <TextInput
            placeholder="Write Something"
            placeholderTextColor={'grey'}
            style={styles.input}
          />
        </View>
      </View>
      <View style={styles.row}>
        <Image source={Images.check} style={styles.img} />
        <Text style={{color: '#757575', fontSize: 15, left: '-41%'}}>
          Save this card details
        </Text>
      </View>
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
    paddingHorizontal: '8%',
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
    color: '#000000',
    fontSize: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#B4B4B4',
  },
});

export default Card;
