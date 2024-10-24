import {View, Text, StyleSheet, Image, TextInput} from 'react-native';
import React from 'react';
import {Images} from '../../../../constants/Image';

const Address = () => {
  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <Image source={Images.check} style={styles.img} />
        <Text style={{color: '#757575', fontSize: 15, left: '-5%'}}>
          Billing address is the same as delivery
        </Text>
      </View>
      <View style={{paddingHorizontal: '8%', marginTop: '7%'}}>
        <Text style={styles.txt}>Street 1</Text>
        <TextInput
          placeholder="Write Something"
          placeholderTextColor={'grey'}
          style={styles.input}
        />
      </View>
      <View style={{paddingHorizontal: '8%', marginTop: '7%'}}>
        <Text style={styles.txt}>Street 2</Text>
        <TextInput
          placeholder="Write Something"
          placeholderTextColor={'grey'}
          style={styles.input}
        />
      </View>
      <View style={{paddingHorizontal: '8%', marginTop: '7%'}}>
        <Text style={styles.txt}>City</Text>
        <TextInput
          placeholder="Write Something"
          placeholderTextColor={'grey'}
          style={styles.input}
        />
      </View>
      <View style={styles.row}>
        <View style={{marginTop: '7%'}}>
          <Text style={styles.txt}>State</Text>
          <TextInput
            placeholder="Write Something"
            placeholderTextColor={'grey'}
            style={styles.input}
          />
        </View>
        <View style={{marginTop: '7%'}}>
          <Text style={styles.txt}>Country</Text>
          <TextInput
            placeholder="Write Something"
            placeholderTextColor={'grey'}
            style={styles.input}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
  },
  img: {
    height: 20,
    width: 20,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: '8%',
    marginTop: '8%',
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

export default Address;
