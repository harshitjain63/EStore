import {View, StyleSheet, Image} from 'react-native';
import React from 'react';

import Header from './Contactssubcomponent/Header';
import Footer from './Contactssubcomponent/Footer';
import {Images} from '../../constants/Image';

const Contacts = () => {
  return (
    <View style={styles.container}>
      <Header />
      <Image
        source={Images.map}
        style={{height: '54%', width: '100%', position: 'absolute'}}
      />
      <Footer />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'green',
    justifyContent: 'space-between',
  },
});

export default Contacts;
