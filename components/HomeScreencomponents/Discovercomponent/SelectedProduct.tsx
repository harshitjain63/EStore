import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import Header from './Productsubcomponent/Header';

const SelectedProduct = () => {
  return (
    <View style={styles.container}>
      <Header />
      <Text>SelectedProduct</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
});

export default SelectedProduct;
