import {View, Text, StyleSheet} from 'react-native';
import React from 'react';

const BodySkeleton = () => {
  return (
    <View style={styles.container}>
      <View style={styles.images}></View>
      <Text style={styles.text}></Text>
      <Text style={styles.text2}></Text>
      <Text style={styles.text3}></Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
    paddingVertical: 20,
    backgroundColor: '#FFFFFF',
  },
  images: {
    width: 150,
    height: 200,
    marginBottom: 10,
    borderWidth: 2,
    backgroundColor: '#CECECE',
    borderColor: '#CECECE',
    borderRadius: 20,
  },
  text: {
    width: 110,
    height: 16,
    marginBottom: 10,
    borderWidth: 2,
    backgroundColor: '#CECECE',
    borderColor: '#CECECE',
  },
  text2: {
    width: 150,
    height: 12,
    marginBottom: 10,
    borderWidth: 2,
    backgroundColor: '#CECECE',
    borderColor: '#CECECE',
  },
  text3: {
    width: 150,
    height: 16,
    marginBottom: 10,
    borderWidth: 2,
    backgroundColor: '#CECECE',
    borderColor: '#CECECE',
  },
});

export default BodySkeleton;
