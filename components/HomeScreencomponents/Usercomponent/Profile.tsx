import {View, Text, StyleSheet, Image} from 'react-native';
import React from 'react';
import {Images} from '../../../constants/Image';

const Profile = () => {
  return (
    <View style={styles.container}>
      <View style={styles.imgview}>
        <Image source={Images.ushericon} style={styles.img} />
      </View>
      <View style={{marginTop: '8%', marginRight: '8%'}}>
        <Text style={styles.name}>Jameson Dunn</Text>
        <Text style={styles.email}>jamesondunn@gmail.com</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: '8%',
    marginTop: '5%',
  },
  img: {
    height: 50,
    width: 50,
  },
  imgview: {
    borderRadius: 50,
    height: 100,
    width: 100,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#B4B4B4',
  },
  name: {
    color: 'black',
    fontSize: 20,
  },
  email: {
    color: 'black',
    fontSize: 13,
  },
});
export default Profile;
