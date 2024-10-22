import {View, StyleSheet} from 'react-native';
import React from 'react';
import {useRoute, RouteProp} from '@react-navigation/native';
import {CategoryNavParams} from '../../../Navigation/CategoryNavigation';
import Header from './reviewsubcomponent/Header';

const Review = () => {
  const route = useRoute<RouteProp<CategoryNavParams, 'review'>>();
  const {name} = route.params;

  return (
    <View style={styles.container}>
      <Header name={name} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
});

export default Review;
