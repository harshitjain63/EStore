import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
} from 'react-native';
import React, {useState} from 'react';
import {Images} from '../../../../constants/Image';

const Header = () => {
  const categories = ['All', 'Women', 'Men'];
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity>
          <Image style={styles.img} source={Images.menuicon} />
        </TouchableOpacity>
        <Text style={styles.discovertxt}>Search</Text>
        <TouchableOpacity>
          <Image style={styles.searchimg} source={Images.searchicon} />
        </TouchableOpacity>
        <TouchableOpacity>
          <Image style={styles.img} source={Images.filtericon} />
        </TouchableOpacity>
      </View>
      <View style={styles.box}>
        <ScrollView horizontal={true}>
          <Image
            source={{uri: 'https://picsum.photos/200/300'}}
            style={styles.rowimg}
          />
          <Image
            source={{uri: 'https://picsum.photos/200/300'}}
            style={styles.rowimg}
          />
          <Image
            source={{uri: 'https://picsum.photos/200/300'}}
            style={styles.rowimg}
          />
          <Image
            source={{uri: 'https://picsum.photos/200/300'}}
            style={styles.rowimg}
          />
        </ScrollView>
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
  header2: {
    flexDirection: 'row',
    marginTop: '8%',
    justifyContent: 'space-between',
    paddingHorizontal: '8%',
  },
  container: {
    backgroundColor: '#FFFFFF',
    width: '100%',
  },
  header: {
    flexDirection: 'row',
    marginTop: '3%',
    justifyContent: 'space-between',
    paddingHorizontal: '8%',
  },
  img: {
    height: 20,
    width: 20,
    marginTop: '30%',
  },
  searchimg: {
    height: 20,
    width: 20,
    marginTop: '30%',
    left: 40,
  },
  discovertxt: {
    color: '#FA4248',
    fontSize: 25,
    left: '10%',
  },
  box: {
    flexDirection: 'row',
    marginTop: '5%',
    paddingHorizontal: '5%',
  },
  rowimg: {
    width: 100,
    height: 104,
    marginRight: 10,
    borderRadius: 15,
  },
});

export default Header;
