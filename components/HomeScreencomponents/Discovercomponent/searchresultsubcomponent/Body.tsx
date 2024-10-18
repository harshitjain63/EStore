import {View, Text, StyleSheet, FlatList} from 'react-native';
import React from 'react';
import Result from './Result';
import {BodyProps} from '../Body';

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

const Body = () => {
  const renderItem = ({item}: {item: BodyProps}) => (
    <Result
      image={item.image}
      name={item.name}
      category={item.category}
      price={item.price}
    />
  );
  return (
    <View style={styles.maincontainer}>
      <View style={styles.container}>
        <Text style={styles.txt}>Results</Text>
        <Text style={styles.txt2}>{sampleData.length} items found</Text>
      </View>
      <FlatList
        data={sampleData}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  maincontainer: {marginBottom: 45},
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: '10%',
    width: '100%',
    paddingBottom: 5,
    marginTop: '7%',
  },
  txt: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: 20,
  },
  txt2: {
    color: '#707070',
    fontSize: 10,
    marginTop: '3.5%',
  },
  brandtxt: {
    color: 'black',
    fontWeight: 'bold',
  },
  selecttxt: {
    color: '#000000',
    left: '10%',
  },
  img: {
    height: 20,
    width: 20,
  },
  checkbox: {
    height: 20,
    width: 20,
    borderWidth: 2,
    borderColor: '#000000',
    borderRadius: 10,
  },
  checkbox2: {
    height: 20,
    width: 20,
    backgroundColor: 'red',
    borderRadius: 10,
    borderColor: '#000000',
    borderWidth: 2,
  },
  mapcontent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: '10%',
    width: '100%',
    paddingBottom: 5,
  },
  row: {
    paddingHorizontal: 10,
  },
});

export default Body;
