import {View, Text, Image, StyleSheet, TouchableOpacity} from 'react-native';
import React from 'react';
import {Images} from '../../../constants/Image';

type categoryprop = {
  selectedCategory: string;
  setSelectedCategory: (arg: string) => void;
};

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const Header = ({selectedCategory, setSelectedCategory}: categoryprop) => {
  const categories = ['All', 'Women', 'Men', 'Best Sellers'];

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity>
          <Image style={styles.img} source={Images.menuicon} />
        </TouchableOpacity>
        <Text style={styles.discovertxt}>Discover</Text>
        <TouchableOpacity>
          <Image style={styles.img} source={Images.searchicon} />
        </TouchableOpacity>
      </View>

      <View style={styles.header2}>
        {categories.map((category, index) => (
          <TouchableOpacity
            key={index}
            onPress={() => setSelectedCategory(category)}>
            <Text
              style={[
                styles.txt,
                selectedCategory === category
                  ? styles.selectedText
                  : styles.unselectedText,
              ]}>
              {category}
            </Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFFFFF',
    width: '100%',
  },
  header: {
    flexDirection: 'row',
    marginTop: '3%',
    justifyContent: 'space-between',
    marginHorizontal: '8%',
  },
  header2: {
    flexDirection: 'row',
    marginTop: '8%',
    justifyContent: 'space-between',
    marginHorizontal: '8%',
  },
  img: {
    height: 20,
    width: 20,
    marginTop: '30%',
  },
  discovertxt: {
    color: '#FA4248',
    fontSize: 25,
  },
  txt: {
    color: '#000000',
    fontSize: 18,
  },
  selectedText: {
    color: '#000000',
  },
  unselectedText: {
    color: 'gray',
  },
});

export default Header;
