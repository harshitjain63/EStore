import {View, Image, StyleSheet, TouchableOpacity} from 'react-native';
import React from 'react';
import {Images} from '../../../../constants/Image';

const HeaderSkeleton = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity>
          <Image style={styles.img} source={Images.menuicon} />
        </TouchableOpacity>
        <View style={styles.discovertxt}></View>
        <TouchableOpacity>
          <Image style={styles.img} source={Images.searchicon} />
        </TouchableOpacity>
      </View>
      <View style={styles.offertxt}></View>
      <View style={styles.nametxt}></View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#808080',
    width: '100%',
    height: '30%',
  },
  header: {
    flexDirection: 'row',
    marginTop: '3%',
    justifyContent: 'space-between',
    marginHorizontal: '8%',
  },

  img: {
    height: 20,
    width: 20,
    marginTop: '30%',
  },
  discovertxt: {
    width: 120,
    height: 25,
    backgroundColor: '#FFFFFF',
  },
  offertxt: {
    left: '8%',
    top: '28%',
    width: 120,
    height: 20,
    backgroundColor: '#FFFFFF',
  },
  nametxt: {
    width: 120,
    height: 20,
    backgroundColor: '#FFFFFF',
    left: '8%',
    top: '30%',
    fontWeight: 'bold',
  },
});

export default HeaderSkeleton;
