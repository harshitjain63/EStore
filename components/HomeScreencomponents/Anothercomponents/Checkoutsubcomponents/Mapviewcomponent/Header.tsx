import {View, Text, Image, StyleSheet, TouchableOpacity} from 'react-native';
import React from 'react';
import {Images} from '../../../../../constants/Image';

const Header = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity>
          <Image style={styles.img} source={Images.menuicon} />
        </TouchableOpacity>
        <Text style={styles.discovertxt}>Tracking Order</Text>
        <TouchableOpacity>
          <Image style={styles.img} source={Images.searchicon} />
        </TouchableOpacity>
      </View>
      <Text style={styles.orderidtxt}>Order No. #123-456</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFFF',
    width: '100%',
    height: '25%',
    elevation: 8,
  },
  header: {
    flexDirection: 'row',
    marginTop: '19%',
    justifyContent: 'space-between',
    marginHorizontal: '8%',
  },

  img: {
    height: 20,
    width: 20,
    marginTop: '30%',
  },
  discovertxt: {
    color: '#FA4248',
    fontSize: 25,
  },
  orderidtxt: {
    color: 'black',
    fontSize: 25,
    alignSelf: 'center',
    marginTop: '8%',
    fontWeight: 'bold',
  },
});

export default Header;
