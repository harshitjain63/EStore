import {Dimensions, StyleSheet} from 'react-native';
import React from 'react';

import {SafeAreaView} from 'react-native-safe-area-context';
import Header from './seachsubcomponent/Header';

const Search = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Header />
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

export default Search;
