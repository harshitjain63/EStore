import {View, Text, Image, StyleSheet, TouchableOpacity} from 'react-native';
import React from 'react';
import {Images} from '../../../../constants/Image';
import ProductNavigator from './ProductNavigator';

const products = [
  {id: 1, product: 'Product 1', price: '$10'},
  {id: 2, product: 'Product 2', price: '$15'},
  {id: 3, product: 'Product 3', price: '$20'},
  // Add more products as needed
];

const Header = ({names}: {names: string}) => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity>
          <Image style={styles.img} source={Images.menuicon} />
        </TouchableOpacity>
        <Text style={styles.discovertxt}>{names}</Text>
        <TouchableOpacity>
          <Image style={styles.img} source={Images.emptyheart} />
        </TouchableOpacity>
      </View>
      <ProductNavigator products={products} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#808080',
    width: '100%',
    height: '60%',
    overflow: 'hidden',
    borderBottomEndRadius: 50,
    borderBottomStartRadius: 50,
  },
  header: {
    flexDirection: 'row',
    marginTop: '14%',
    justifyContent: 'space-between',
    marginHorizontal: '8%',
  },

  img: {
    height: 20,
    width: 20,
    marginTop: '30%',
  },
  discovertxt: {
    color: '#FFFFFF',
    fontSize: 25,
    fontWeight: '400',
  },
});

export default Header;
