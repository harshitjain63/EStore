import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {Images} from '../../constants/Image';
import {useAppSelector} from '../../redux/hooks';

const UserDetails = () => {
  const {name, email, photo} = useAppSelector(state => state.auth);
  return (
    <View style={styles.wrapper}>
      <View style={styles.container}>
        <TouchableOpacity
          style={{
            height: 42,
            width: 42,
            backgroundColor: '#DCDCDC',
            borderRadius: 17,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          {photo ? (
            <Image source={{uri: photo}} style={styles.img} />
          ) : (
            <Image source={Images.ushericon} style={styles.img} />
          )}
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            marginTop: '4%',
          }}>
          <Image
            source={Images.menuicon}
            style={{height: 20, width: 20, tintColor: '#FFF'}}
          />
        </TouchableOpacity>
      </View>
      <Text style={styles.txt}>{name}</Text>
      <Text style={styles.emailtxt}>{email}</Text>
    </View>
  );
};

export default UserDetails;

const styles = StyleSheet.create({
  wrapper: {
    paddingHorizontal: '8%',
    borderTopEndRadius: 50,
    paddingBottom: '20%',
    paddingTop: '20%',
    backgroundColor: 'rgba(255, 255, 255, 0.25)',
  },
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  txt: {
    fontWeight: 'bold',
    fontSize: 24,
    color: '#FFF',
    marginTop: '1%',
  },
  emailtxt: {
    fontSize: 14,
    color: '#FFF',
    marginTop: '1%',
  },
  img: {height: 42, width: 42, borderRadius: 17},
});
