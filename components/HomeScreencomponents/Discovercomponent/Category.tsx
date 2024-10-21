import {Dimensions, StyleSheet, SafeAreaView, FlatList} from 'react-native';
import React from 'react';
import Header from './categorysubcomponent/Header';
import Collections from './categorysubcomponent/Collections';

const categories = [
  {
    id: '1',
    name: 'Collection',
    itemCount: 75,
    image: 'https://via.placeholder.com/150',
  },
  {
    id: '2',
    name: 'Men',
    itemCount: 150,
    image: 'https://via.placeholder.com/150',
  },
  {
    id: '3',
    name: 'Women',
    itemCount: 200,
    image: 'https://via.placeholder.com/150',
  },
  {
    id: '4',
    name: 'Kids',
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

const Category = () => {
  const renderItem = ({item}: {item: CollectionProps}) => (
    <Collections
      name={item.name}
      itemCount={item.itemCount}
      image={item.image}
    />
  );
  return (
    <SafeAreaView style={styles.container}>
      <Header />
      <FlatList
        data={categories}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        showsVerticalScrollIndicator={false}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    height: '100%',
    zIndex: 2,
    width: Dimensions.get('window').width,
  },
  row: {
    paddingHorizontal: 10,
  },
});

export default Category;
