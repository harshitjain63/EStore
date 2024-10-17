import {ScrollView, StyleSheet} from 'react-native';
import React from 'react';
import Dropdowncomponent from './Dropdowncomponent';
import SeekbarDropdown from './SeekbarDropdown';

const brands = [
  {id: 1, name: 'Nike'},
  {id: 2, name: 'Adidas'},
  {id: 3, name: 'Apple'},
  {id: 4, name: 'Samsung'},
  {id: 5, name: 'Sony'},
  {id: 6, name: 'Microsoft'},
  {id: 7, name: 'Google'},
  {id: 8, name: 'Tesla'},
  {id: 9, name: 'Amazon'},
  {id: 10, name: 'Coca-Cola'},
  {id: 11, name: 'Pepsi'},
  {id: 12, name: 'BMW'},
  {id: 13, name: 'Mercedes-Benz'},
  {id: 14, name: "L'Oreal"},
  {id: 15, name: 'Gucci'},
];

const colors = [
  {id: 1, name: 'Red'},
  {id: 2, name: 'Blue'},
  {id: 3, name: 'Green'},
  {id: 4, name: 'Yellow'},
  {id: 5, name: 'Purple'},
  {id: 6, name: 'Orange'},
  {id: 7, name: 'Pink'},
  {id: 8, name: 'Brown'},
  {id: 9, name: 'Black'},
  {id: 10, name: 'White'},
  {id: 11, name: 'Gray'},
  {id: 12, name: 'Teal'},
  {id: 13, name: 'Navy Blue'},
  {id: 14, name: 'Lavender'},
  {id: 15, name: 'Maroon'},
];

const ratings = [
  {id: 1, name: '1 Star'},
  {id: 2, name: '2 Stars'},
  {id: 3, name: '3 Stars'},
  {id: 4, name: '4 Stars'},
  {id: 5, name: '5 Stars'},
];

const popularity = [
  {id: 1, name: 'Most Popular'},
  {id: 2, name: 'Top Rated'},
  {id: 3, name: 'Trending'},
  {id: 4, name: 'Best Seller'},
  {id: 5, name: 'New Arrival'},
];

const shippedFrom = [
  {id: 1, name: 'United States'},
  {id: 2, name: 'China'},
  {id: 3, name: 'Germany'},
  {id: 4, name: 'India'},
  {id: 5, name: 'Japan'},
  {id: 6, name: 'United Kingdom'},
  {id: 7, name: 'Canada'},
  {id: 8, name: 'Australia'},
  {id: 9, name: 'France'},
  {id: 10, name: 'South Korea'},
];

const Body = () => {
  return (
    <ScrollView style={styles.container}>
      <Dropdowncomponent title="Popularity" data={popularity} />
      <Dropdowncomponent title="Brands" data={brands} />
      <SeekbarDropdown />
      <Dropdowncomponent title="Colors" data={colors} />
      <Dropdowncomponent title="Ratings" data={ratings} />
      <Dropdowncomponent title="Shipped From" data={shippedFrom} />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: '12%',
  },
});

export default Body;
