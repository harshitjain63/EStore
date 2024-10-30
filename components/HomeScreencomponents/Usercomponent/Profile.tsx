import {View, Text, StyleSheet, Image} from 'react-native';
import React from 'react';
import {Images} from '../../../constants/Image';
import {useAppSelector} from '../../../redux/hooks';

const Profile = () => {
  const {name, email, photo} = useAppSelector(state => state.auth);
  return (
    <View style={styles.container}>
      {photo ? (
        <Image source={{uri: photo}} style={styles.img} />
      ) : (
        <Image source={Images.ushericon} style={styles.img} />
      )}

      <View style={{marginTop: '8%', marginRight: '8%'}}>
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.email}>{email}</Text>
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
    borderRadius: 50,
    height: 100,
    width: 100,
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
