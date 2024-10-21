import {View, StyleSheet, TouchableOpacity} from 'react-native';
import React from 'react';

const CollectionsSkeleton = () => {
  return (
    <View style={styles.container}>
      <View style={styles.images}></View>
      <View style={styles.minicontainer}>
        <View style={styles.wrapper}>
          <View style={styles.text}></View>
          <TouchableOpacity style={styles.forward}></TouchableOpacity>
        </View>
        <View style={styles.text2}></View>
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
    backgroundColor: '#CECECE',
  },
  text: {
    backgroundColor: '#CECECE',
    height: 15,
    width: 90,
  },
  text2: {
    backgroundColor: '#CECECE',
    height: 15,
    width: 90,
  },

  forward: {
    marginTop: '6%',
    right: '15%',
    backgroundColor: '#CECECE',
    height: 15,
    width: 15,
  },
});

export default CollectionsSkeleton;
