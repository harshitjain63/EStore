import {View, Text, Image, StyleSheet, TouchableOpacity} from 'react-native';
import React from 'react';
import {Images} from '../../constants/Image';

const FacebookGoogle = () => {
  return (
    <View style={styles.scrollview}>
      <TouchableOpacity style={styles.facebook}>
        <Image source={Images.facebookicon} style={styles.img} />
        <Text style={styles.fbtxt}>Sign In with Facebook</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.google}>
        <Image source={Images.googleicon} style={styles.img} />
        <Text style={styles.fbtxt}>Sign In with Google</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  maincontainer: {flex: 1, backgroundColor: '#444'},
  scrollview: {flex: 1, position: 'absolute', width: '100%', height: '100%'},
  container: {
    height: '100%',
    backgroundColor: 'white',
    alignItems: 'center',
  },
  ortext: {
    color: 'grey',
    fontSize: 18,
    marginTop: '80%',
    fontWeight: 'bold',
  },
  facebook: {
    backgroundColor: 'white',
    width: '80%',
    flexDirection: 'row',
    borderRadius: 25,
    borderWidth: 1,
    top: '73%',
    position: 'absolute',
    height: '6%',
    alignSelf: 'center',
    borderColor: 'grey',
  },
  google: {
    backgroundColor: 'white',
    width: '80%',
    flexDirection: 'row',
    borderRadius: 25,
    borderWidth: 1,
    top: '80%',
    position: 'absolute',
    height: '6%',
    alignSelf: 'center',
    borderColor: 'grey',
  },
  img: {
    height: '9%',
    width: '9%',
    padding: 14,
    left: '6%',
    alignSelf: 'center',
  },
  fbtxt: {
    fontSize: 15,
    color: 'black',
    fontWeight: 'bold',
    alignSelf: 'center',
    left: '16%',
  },
});

export default FacebookGoogle;
