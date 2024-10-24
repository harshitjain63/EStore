import React, {useState} from 'react';
import {View, Text, Image, StyleSheet, TouchableOpacity} from 'react-native';
import {Images} from '../../../../constants/Image';

export interface BodyProps {
  image: string;
  name: string;
  category: string;
  price: string;
}

const Result = ({image, name, category, price}: BodyProps) => {
  const [isHeartFilled, setIsHeartFilled] = useState(false);
  const toggleHeart = () => {
    setIsHeartFilled(!isHeartFilled);
  };

  return (
    <View style={styles.container}>
      <Image source={{uri: image}} style={styles.images} />
      <View style={styles.minicontainer}>
        <View style={styles.wrapper}>
          <Text style={styles.text}>{name}</Text>
          <Text style={styles.text3}>{price}</Text>
        </View>

        <Text style={styles.text2}>{category}</Text>
        <Image source={Images.shoppingicon} style={styles.bag} />
        <TouchableOpacity onPress={toggleHeart} style={styles.hearttoggle}>
          <Image
            source={isHeartFilled ? Images.filledheart : Images.emptyheart}
            style={styles.heart}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  minicontainer: {
    flex: 1,
  },
  container: {
    backgroundColor: '#FFFFFF',
    flexDirection: 'row',
    paddingHorizontal: '7%',
    paddingVertical: '3%',
  },
  images: {
    width: 100,
    height: 104,
    marginRight: 10,
    borderRadius: 15,
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

export default Result;
