import {View, StyleSheet, FlatList} from 'react-native';
import React, {useState} from 'react';
import Header from './Discovercomponent/Header';
import Body, {BodyProps} from './Discovercomponent/Body';
import Footer from './Discovercomponent/Footer';

const sampleData = [
  {
    id: '1',
    image: 'https://via.placeholder.com/150',
    name: 'White Top',
    category: 'Women',
    price: '$15',
  },
  {
    id: '2',
    image: 'https://via.placeholder.com/150',
    name: 'Black Shirt',
    category: 'Men',
    price: '$20',
  },
  {
    id: '3',
    image: 'https://via.placeholder.com/150',
    name: 'Red Dress',
    category: 'Women',
    price: '$25',
  },
  {
    id: '4',
    image: 'https://via.placeholder.com/150',
    name: 'Blue Jeans',
    category: 'Men',
    price: '$30',
  },
  {
    id: '5',
    image: 'https://via.placeholder.com/150',
    name: 'White Top',
    category: 'Women',
    price: '$15',
  },
  {
    id: '6',
    image: 'https://via.placeholder.com/150',
    name: 'Black Shirt',
    category: 'Men',
    price: '$20',
  },
  {
    id: '7',
    image: 'https://via.placeholder.com/150',
    name: 'Red Dress',
    category: 'Women',
    price: '$25',
  },
  {
    id: '8',
    image: 'https://via.placeholder.com/150',
    name: 'Blue Jeans',
    category: 'Men',
    price: '$30',
  },
  {
    id: '9',
    image: 'https://via.placeholder.com/150',
    name: 'Red Dress',
    category: 'Best Sellers',
    price: '$25',
  },
  {
    id: '10',
    image: 'https://via.placeholder.com/150',
    name: 'Blue Jeans',
    category: 'Best Sellers',
    price: '$30',
  },
];

const Discover = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const filteredcategories = sampleData.filter((item: BodyProps) =>
    selectedCategory === 'All' ? true : item.category === selectedCategory,
  );
  const renderItem = ({item}: {item: BodyProps}) => (
    <Body
      image={item.image}
      name={item.name}
      category={item.category}
      price={item.price}
    />
  );
  return (
    <View style={styles.container}>
      <Header
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
      />
      <FlatList
        data={filteredcategories}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        numColumns={2}
        columnWrapperStyle={styles.row}
        showsVerticalScrollIndicator={false}
      />
      <Footer />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
  },
  row: {
    paddingHorizontal: 10,
  },
});

export default Discover;
