import {
  View,
  StyleSheet,
  Image,
  TextInput,
  TouchableOpacity,
  Text,
  ScrollView,
} from 'react-native';
import React, {useState} from 'react';
import {Images} from '../../../../constants/Image';
import {SearchresultScreenProp} from '../Search';

// Sample brand names
const brands = [
  'Nike',
  'Adidas',
  'Puma',
  'Reebok',
  'Under Armour',
  "Levi's",
  'Tommy Hilfiger',
  'Calvin Klein',
  'H&M',
  'Zara',
  'Gucci',
  'Prada',
  'Chanel',
  'Versace',
  'Fendi',
  'Burberry',
  'Ralph Lauren',
  'Lacoste',
  'Diesel',
  'New Balance',
  'Converse',
  'Vans',
  'ASICS',
  'Mango',
  'Abercrombie & Fitch',
];

const Body = ({navigation}: SearchresultScreenProp) => {
  const [value, setValue] = useState('');
  const filteredBrands = brands.filter(brand =>
    brand.toLowerCase().includes(value.toLowerCase()),
  );

  return (
    <View style={styles.wrapper}>
      <View style={styles.container}>
        <Image style={styles.img} source={Images.searchicon} />
        <TextInput
          value={value}
          onChangeText={text => setValue(text)}
          placeholder="Search Something"
          placeholderTextColor={'black'}
          style={styles.input}
        />
        <TouchableOpacity onPress={() => setValue('')}>
          <Image style={styles.crossimg} source={Images.crossicon} />
        </TouchableOpacity>
      </View>

      <ScrollView style={styles.scrollContainer}>
        {value.length > 0 && (
          <View style={styles.brandList}>
            {filteredBrands.map((item, index) => (
              <Text
                key={index}
                style={styles.brandText}
                onPress={() => navigation.navigate('Searchresult')}>
                {item}
              </Text>
            ))}
          </View>
        )}

        <Text style={styles.recenttxt}>Recent Searches</Text>
        <View style={styles.recentSearchescontainer}>
          {brands.map((item, index) => (
            <View key={index} style={styles.recentSearches}>
              <Text style={styles.recentItem}>{item}</Text>
            </View>
          ))}
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    paddingLeft: 20,
    paddingRight: 20,
    marginTop: '6%',
  },
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#00000008',
    width: '100%',
    paddingLeft: '5%',
    paddingRight: '5%',
    borderRadius: 20,
    alignItems: 'center',
  },
  img: {
    height: 20,
    width: 20,
  },
  crossimg: {
    height: 16,
    width: 16,
  },
  input: {
    left: '-5%',
    color: 'black',
    width: '70%',
  },
  scrollContainer: {
    marginTop: 10,
  },
  brandList: {
    marginBottom: 20,
  },
  brandText: {
    padding: 10,
    fontSize: 16,
    color: 'black',
  },
  recenttxt: {
    fontSize: 14,
    color: 'grey',
    marginBottom: 10,
  },
  recentSearchescontainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop: 10,
  },
  recentSearches: {
    backgroundColor: '#00000008',
    padding: 8,
    borderRadius: 30,
    margin: 5,
  },
  recentItem: {
    fontSize: 16,
    color: '#555',
    padding: '0.5%',
    paddingLeft: '2%',
    paddingRight: '2%',
  },
});

export default Body;
