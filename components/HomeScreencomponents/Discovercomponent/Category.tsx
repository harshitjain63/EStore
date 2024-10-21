import {Dimensions, StyleSheet, SafeAreaView, FlatList} from 'react-native';
import React, {useEffect, useState} from 'react';
import Header from './categorysubcomponent/Header';
import Collections from './categorysubcomponent/Collections';
import CollectionsSkeleton from './categorysubcomponent/CollectionsSkeleton';

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
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  const renderItem = ({item}: {item: CollectionProps}) => {
    if (loading) {
      return <CollectionsSkeleton />;
    }

    return (
      <Collections
        name={item.name}
        itemCount={item.itemCount}
        image={item.image}
      />
    );
  };

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
