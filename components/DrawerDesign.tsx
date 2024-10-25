import {View, StyleSheet, StatusBar} from 'react-native';
import React from 'react';
import {
  DrawerContentComponentProps,
  DrawerItemList,
} from '@react-navigation/drawer';
import {BlurView} from '@react-native-community/blur';
import UserDetails from './DrawerSubcomponent/UserDetails';
import AboutUs from './DrawerSubcomponent/AboutUs';

const DrawerHeader = (props: DrawerContentComponentProps) => {
  return (
    <View style={{height: '100%'}}>
      <StatusBar hidden />
      <BlurView
        style={styles.absolute}
        blurType="light"
        blurAmount={4}
        reducedTransparencyFallbackColor="white"
      />
      <View style={styles.container}>
        <UserDetails />
        <View style={{marginTop: '-60%'}}>
          <DrawerItemList {...props} />
        </View>
        <View style={{paddingBottom: '15%'}}>
          <AboutUs />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#F01738',
    height: '86%',
    width: '73%',
    borderTopEndRadius: 50,
    zIndex: 2,
    borderBottomEndRadius: 50,
    justifyContent: 'space-between',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  txt: {
    color: '#FFFFFF',
  },
  absolute: {
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    zIndex: 1,
    position: 'absolute',
  },
});

export default DrawerHeader;
