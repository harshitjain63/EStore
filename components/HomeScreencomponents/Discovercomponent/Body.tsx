import React, {useState} from 'react';
import {View, Text, Image, StyleSheet, TouchableOpacity} from 'react-native';
import {Images} from '../../../constants/Image';

export interface BodyProps {
  image: string;
  name: string;
  category: string;
  price: string;
  id?: string;
  quantity?: number;
}

const Body = ({image, name, category, price}: BodyProps) => {
  const [isHeartFilled, setIsHeartFilled] = useState(false);
  const toggleHeart = () => {
    setIsHeartFilled(!isHeartFilled);
  };
  return (
    <View style={styles.container}>
      <Image source={{uri: image}} style={styles.images} />
      <Text style={styles.text}>{name}</Text>
      <Text style={styles.text2}>{category}</Text>
      <Text style={styles.text3}>{price}</Text>
      <Image source={Images.shoppingicon} style={styles.bag} />
      <TouchableOpacity onPress={toggleHeart} style={styles.hearttoggle}>
        <Image
          source={isHeartFilled ? Images.filledheart : Images.emptyheart}
          style={styles.heart}
        />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFFFFF',
    padding: '3%',
  },
  images: {
    width: 150,
    height: 200,
    marginBottom: 10,
    borderWidth: 2,
    borderColor: '#CECECE',
    borderRadius: 20,
  },
  text: {
    fontSize: 16,
    color: '#333',
  },
  text2: {
    fontSize: 12,
    color: '#929292',
  },
  text3: {
    fontSize: 16,
    color: '#FA4248',
  },
  bag: {
    height: 16,
    width: 16,
    position: 'relative',
    alignSelf: 'flex-end',
    top: -45,
    right: '5%',
  },
  heart: {
    height: 14,
    width: 14,
  },
  hearttoggle: {
    position: 'relative',
    alignSelf: 'flex-end',
    top: -35,
    right: '6%',
  },
});

export default Body;
