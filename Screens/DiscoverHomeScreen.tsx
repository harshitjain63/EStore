import {View, StyleSheet} from 'react-native';
import React from 'react';
import BottomNavigationcomponent from '../components/BottomNavigationcomponent';

const DiscoverHomeScreen = () => {
  return (
    <View style={styles.container}>
      <BottomNavigationcomponent />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
});

export default DiscoverHomeScreen;
