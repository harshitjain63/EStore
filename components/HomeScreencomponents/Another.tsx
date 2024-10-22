import {View, Text, StyleSheet} from 'react-native';
import React from 'react';

const Another = () => {
  return (
    <View style={styles.container}>
      <Text>Another</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
});

export default Another;
