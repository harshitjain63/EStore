import {Dimensions, StyleSheet} from 'react-native';
import React from 'react';
import Header from './searchresultsubcomponent/Header';
import {SafeAreaView} from 'react-native-safe-area-context';
import Body from './searchresultsubcomponent/Body';

const SearchResult = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Header />
      <Body />
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

export default SearchResult;
