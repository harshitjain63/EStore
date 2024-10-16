import {Dimensions, StyleSheet} from 'react-native';
import React from 'react';
import Header from './Filtersubcomponent/Header';
import {SafeAreaView} from 'react-native-safe-area-context';
import Body from './Filtersubcomponent/Body';
import Footer from './Filtersubcomponent/Footer';

const Filter = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Header />
      <Body />
      <Footer />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    height: '100%',
    zIndex: 2,
    width: Dimensions.get('window').width,
  },
});

export default Filter;
