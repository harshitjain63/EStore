import {View, Text, StyleSheet, Image, ImageSourcePropType} from 'react-native';
import React from 'react';

type variable = {
  name: string;
  image: ImageSourcePropType | undefined;
  forwardicon?: ImageSourcePropType | undefined;
  newimg?: ImageSourcePropType | undefined;
};

const Options = ({name, image, forwardicon, newimg}: variable) => {
  return (
    <View style={styles.container}>
      <View style={styles.imgview}>
        <Image source={image} style={styles.img} />
      </View>
      <View
        style={{
          flexDirection: 'row',
          width: '50%',
          marginRight: '20%',
          marginTop: '2.5%',
        }}>
        <Text style={styles.name}>{name}</Text>
        {newimg && <Image source={newimg} style={styles.imgnew} />}
      </View>

      {forwardicon && <Image source={forwardicon} style={styles.imgs} />}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    paddingHorizontal: '8%',
    justifyContent: 'space-between',
    marginTop: '5%',
    marginBottom: '2%',
  },
  img: {
    height: 30,
    width: 30,
    tintColor: '#FA42484F',
  },
  imgnew: {
    height: 30,
    width: 30,
    marginLeft: '10%',
    marginTop: '-1%',
  },
  imgs: {
    height: 13,
    width: 13,
    marginTop: '5%',
  },
  imgview: {
    borderRadius: 5,
    height: 45,
    width: 45,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FA42484F',
  },
  name: {
    color: 'black',
    fontSize: 18,
  },
});

export default Options;
