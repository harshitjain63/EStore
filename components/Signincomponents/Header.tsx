import {View, Text, StyleSheet} from 'react-native';
import React from 'react';

const Header = () => {
  return (
    <View style={styles.minicontainer}>
      <Text style={styles.brandText}>Superstore</Text>
      <Text style={styles.fashionText}>FASHION</Text>
      <View style={styles.line} />
    </View>
  );
};

const styles = StyleSheet.create({
  minicontainer: {
    alignItems: 'center',
    marginTop: '20%',
  },
  brandText: {
    fontSize: 32,
    color: 'white',
    marginBottom: 5,
  },
  fashionText: {
    fontSize: 10,
    color: 'white',
    fontWeight: 'normal',
    marginBottom: '29%',
    marginRight: -18,
  },
  line: {
    position: 'absolute',
    width: 2,
    height: '32.8%',
    backgroundColor: 'white',
    top: '3%',
    left: '60.5%',
  },
});

export default Header;
