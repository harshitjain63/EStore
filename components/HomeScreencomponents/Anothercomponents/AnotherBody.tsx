import {View, Text, Image, StyleSheet, TouchableOpacity} from 'react-native';
import React from 'react';
import {Images} from '../../../constants/Image';
import {BodyProps} from '../Discovercomponent/Body';

const AnotherBody = ({image, name, category, price}: BodyProps) => {
  return (
    <View style={styles.container}>
      <Image source={{uri: image}} style={styles.images} />
      <View style={styles.minicontainer}>
        <View style={styles.wrapper}>
          <Text style={styles.text}>{name}</Text>
          <Text style={styles.text3}>{price}</Text>
        </View>
        <Text style={styles.text2}>{category}</Text>
        <TouchableOpacity
          style={{
            position: 'absolute',
            width: '22.5%',
            height: '40%',
            backgroundColor: '#FF3D00',
            borderRadius: 15,
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: '28%',
            marginLeft: '80%',
          }}>
          <Image source={Images.bin} style={styles.image} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.touchaddsub}>
          <Text
            style={{
              color: '#343434',
              fontSize: 13,
            }}>
            +
          </Text>
          <Text style={{color: '#343434', fontSize: 13}}>1</Text>
          <Text style={{color: '#343434', fontSize: 13}}>--</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  touchaddsub: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '60%',
    backgroundColor: '#F0F0F0',
    borderRadius: 18,
    paddingHorizontal: '10%',
    paddingVertical: '5%',
    marginTop: '15%',
  },
  wrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  minicontainer: {
    flex: 1,
  },
  container: {
    paddingLeft: '10%',
    paddingRight: '10%',
    backgroundColor: '#FFFFFF',
    flexDirection: 'row',
    marginBottom: '5%',
  },
  images: {
    width: 100,
    height: 104,
    marginRight: 10,
    borderRadius: 15,
  },
  image: {
    width: 20,
    height: 20,
  },
  text: {
    fontSize: 15,
    color: '#333',
  },
  text2: {
    fontSize: 11,
    color: '#929292',
  },
  text3: {
    fontSize: 15,
    color: '#FA4248',
  },
  bag: {
    height: 14,
    width: 14,
    top: '12%',
  },
  heart: {
    height: 12,
    width: 12,
  },
  hearttoggle: {
    left: '10%',
  },
});

export default AnotherBody;