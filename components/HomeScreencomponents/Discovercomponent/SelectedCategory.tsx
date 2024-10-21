import {Dimensions, StyleSheet, FlatList, View} from 'react-native';
import React from 'react';
import {RouteProp, useRoute} from '@react-navigation/native';
import Header from './Selectedcategoriessubcomponent/Header';
import {CategoryNavParams} from '../../../Navigation/CategoryNavigation';
import Collection from './Selectedcategoriessubcomponent/Collection';

const categories = [
  {
    id: '1',
    names: 'Collection',
    itemCount: 75,
    image: 'https://via.placeholder.com/150',
  },
  {
    id: '2',
    names: 'Coats',
    itemCount: 150,
    image: 'https://via.placeholder.com/150',
  },
  {
    id: '3',
    names: 'Dresses',
    itemCount: 200,
    image: 'https://via.placeholder.com/150',
  },
  {
    id: '4',
    names: 'Glasses',
    itemCount: 100,
    image: 'https://via.placeholder.com/150',
  },
  {
    id: '5',
    names: 'Best Sellers',
    itemCount: 50,
    image: 'https://via.placeholder.com/150',
  },
];

export type CollectionProps = {
  id: string;
  names: string;
  itemCount: number;
  image: string;
};

const SelectedCategory = () => {
  const route = useRoute<RouteProp<CategoryNavParams, 'selectedcategory'>>();
  const {name} = route.params;

  const renderItem = ({item}: {item: CollectionProps}) => (
    <Collection
      names={item.names}
      itemCount={item.itemCount}
      image={item.image}
    />
  );
  return (
    <View style={styles.container}>
      <Header name={name} />
      <View
        style={{
          borderTopLeftRadius: 40,
          borderTopRightRadius: 40,
          backgroundColor: 'white',
          height: '70%',
          padding: 20,
        }}>
        <FlatList
          data={categories}
          renderItem={renderItem}
          keyExtractor={item => item.id}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{rowGap: 15, flexGrow: 1}}
        />
      </View>
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
});

export default SelectedCategory;
