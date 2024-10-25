import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

const AboutUs = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.txt}>About Us</Text>
      <Text style={styles.txt}>Log Out</Text>
    </View>
  );
};

export default AboutUs;

const styles = StyleSheet.create({
  container: {
    gap: 20,
    paddingHorizontal: '8%',
  },
  txt: {
    color: '#DEDEDE',
    fontSize: 13,
  },
});
