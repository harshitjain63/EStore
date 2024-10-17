import {View, Text, Image, StyleSheet, TouchableOpacity} from 'react-native';
import React from 'react';
import {Images} from '../../../../constants/Image';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const Header = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity>
          <Image style={styles.img} source={Images.menuicon} />
        </TouchableOpacity>
        <Text style={styles.discovertxt}>Search</Text>
        <TouchableOpacity>
          <Image style={styles.img} source={Images.filtericon} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFFFFF',
    width: '100%',
  },
  header: {
    flexDirection: 'row',
    marginTop: '3%',
    justifyContent: 'space-between',
    marginHorizontal: '8%',
  },
  header2: {
    flexDirection: 'row',
    marginTop: '8%',
    justifyContent: 'space-between',
    marginHorizontal: '8%',
  },
  img: {
    height: 20,
    width: 20,
    marginTop: '30%',
  },
  discovertxt: {
    color: '#FA4248',
    fontSize: 25,
  },
  txt: {
    color: '#000000',
    fontSize: 18,
  },
  selectedText: {
    color: '#000000',
  },
  unselectedText: {
    color: 'gray',
  },
});

export default Header;
