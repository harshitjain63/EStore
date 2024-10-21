import {View, Text, Image, StyleSheet, TouchableOpacity} from 'react-native';
import React from 'react';
import {Images} from '../../../../constants/Image';

const Header = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity>
          <Image style={styles.img} source={Images.menuicon} />
        </TouchableOpacity>
        <Text style={styles.discovertxt}>hii</Text>
        <TouchableOpacity>
          <Image style={styles.img} source={Images.searchicon} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#808080',
    width: '100%',
    height: '60%',
    overflow: 'hidden',
    borderBottomEndRadius: 50,
    borderBottomStartRadius: 50,
  },
  header: {
    flexDirection: 'row',
    marginTop: '14%',
    justifyContent: 'space-between',
    marginHorizontal: '8%',
  },

  img: {
    height: 20,
    width: 20,
    marginTop: '30%',
  },
  discovertxt: {
    color: '#FFFFFF',
    fontSize: 25,
    fontWeight: '400',
  },
});

export default Header;
