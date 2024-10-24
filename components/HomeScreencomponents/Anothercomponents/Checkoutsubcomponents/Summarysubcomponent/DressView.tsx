import {View, StyleSheet, Image, Text, ImageSourcePropType} from 'react-native';
import React from 'react';

type data = {
  name: string;
  image: ImageSourcePropType | undefined;
  price: string;
};

const DressView = ({name, image, price}: data) => {
  return (
    <View style={{marginBottom: '7%'}}>
      <View style={styles.container}>
        <Image source={image} style={styles.img} />
      </View>
      <Text style={styles.title}>{name}</Text>
      <Text style={styles.price}>{price}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderRadius: 16,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: '#DDDDDD',
    marginRight: 15,
    padding: 10,
    width: 100,
  },
  img: {
    height: 80,
    width: 80,
  },
  title: {
    fontWeight: 'bold',
    color: 'black',
    marginTop: '2%',
  },
  price: {
    color: '#FA4248',
    marginTop: '1%',
    fontSize: 12,
  },
});

export default DressView;
