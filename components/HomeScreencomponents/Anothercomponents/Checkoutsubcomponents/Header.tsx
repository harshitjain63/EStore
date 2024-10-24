import {View, Text, StyleSheet, Image, ImageSourcePropType} from 'react-native';
import React from 'react';

type value = {
  startingimage: ImageSourcePropType | undefined;
  text: string;
  endingimage: ImageSourcePropType | undefined;
};

const Header = ({startingimage, text, endingimage}: value) => {
  return (
    <View style={styles.container}>
      <Image source={startingimage} style={styles.img} />
      <Text style={styles.txt}>{text}</Text>
      <Image source={endingimage} style={styles.img} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: '8%',
    marginBottom: '6%',
  },
  img: {
    height: 23,
    width: 23,
  },
  txt: {
    fontSize: 23,
    color: '#FA4248',
  },
});

export default Header;
