import React from 'react';
import {View, Image, StyleSheet, Text, TouchableOpacity} from 'react-native';
import {Images} from '../../../../constants/Image';
import {NavigationProp, useNavigation} from '@react-navigation/native';
import {CategoryNavParams} from '../../../../Navigation/CategoryNavigation';

export type CollectionsProps = {
  name: string;
  itemCount: number;
  image: string;
};

const Collections = ({name, itemCount, image}: CollectionsProps) => {
  const navigation = useNavigation<NavigationProp<CategoryNavParams>>();
  return (
    <View style={styles.container}>
      <Image source={{uri: image}} style={styles.images} />
      <View style={styles.minicontainer}>
        <View style={styles.wrapper}>
          <Text style={styles.text}>{name}</Text>
          <TouchableOpacity
            style={styles.forward}
            onPress={() => navigation.navigate('selectedcategory', {name})}>
            <Image source={Images.forwardicon} style={styles.img} />
          </TouchableOpacity>
        </View>
        <Text style={styles.text2}>{itemCount} items</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  firstItemContainer: {
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
  },
  wrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  minicontainer: {
    flex: 1,
    justifyContent: 'center',
    gap: '6%',
    marginLeft: '4%',
  },
  container: {
    padding: 20,
    backgroundColor: '#FFFFFF',
    flexDirection: 'row',
  },
  images: {
    width: 100,
    height: 104,
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
  img: {
    height: 15,
    width: 15,
  },
  forward: {
    marginTop: '6%',
    right: '15%',
  },
});

export default Collections;
