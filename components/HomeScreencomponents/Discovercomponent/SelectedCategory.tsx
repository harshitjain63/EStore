import {Dimensions, StyleSheet, FlatList, View} from 'react-native';
import React from 'react';
import Collection from './categorysubcomponent/Collection';
import {RouteProp, useRoute} from '@react-navigation/native';
import Header from './Selectedcategoriessubcomponent/Header';
import {CategoryNavParams} from '../../../Navigation/CategoryNavigation';

const categories = [
  {
    id: '1',
    name: 'Collection',
    itemCount: 75,
    image: 'https://via.placeholder.com/150',
  },
  {
    id: '2',
    name: 'Coats',
    itemCount: 150,
    image: 'https://via.placeholder.com/150',
  },
  {
    id: '3',
    name: 'Dresses',
    itemCount: 200,
    image: 'https://via.placeholder.com/150',
  },
  {
    id: '4',
    name: 'Glasses',
    itemCount: 100,
    image: 'https://via.placeholder.com/150',
  },
  {
    id: '5',
    name: 'Best Sellers',
    itemCount: 50,
    image: 'https://via.placeholder.com/150',
  },
];

export type CollectionProps = {
  id: string;
  name: string;
  itemCount: number;
  image: string;
};

const SelectedCategory = () => {
  const route = useRoute<RouteProp<CategoryNavParams, 'selectedcategory'>>();
  const {name} = route.params;

  const renderItem = ({
    item,
    index,
  }: {
    item: CollectionProps;
    index: number;
  }) => (
    <Collection
      name={item.name}
      itemCount={item.itemCount}
      image={item.image}
      isFirstItem={index === 0}
    />
  );
  return (
    <View style={styles.container}>
      <Header name={name} />
      <FlatList
        data={categories}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#808080',
    height: '100%',
    width: Dimensions.get('window').width,
    paddingTop: '15%',
  },
  row: {
    paddingHorizontal: 10,
  },
  midcontainer: {
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    backgroundColor: 'white',
  },
});

export default SelectedCategory;
