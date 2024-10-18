import {Dimensions, StyleSheet} from 'react-native';
import React from 'react';

import {SafeAreaView} from 'react-native-safe-area-context';
import Header from './seachsubcomponent/Header';
import Body from './seachsubcomponent/Body';
import {NewNavParams} from '../../../Navigation/NewNavigation';
import {NativeStackScreenProps} from '@react-navigation/native-stack';

export type SearchresultScreenProp = NativeStackScreenProps<
  NewNavParams,
  'Search'
>;

const Search = ({navigation, route}: SearchresultScreenProp) => {
  return (
    <SafeAreaView style={styles.container}>
      <Header />
      <Body navigation={navigation} route={route} />
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
