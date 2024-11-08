import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  Share,
  Button,
} from 'react-native';
import React from 'react';
import {Images} from '../../../../constants/Image';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const Header = ({name}: {name: any}) => {
  const handleShare = async () => {
    const url = `https://estore.com/category/${name}`;
    try {
      await Share.share({
        title: `Check out the ${name} category on our app!`,
        message: `Explore our ${name} collection: ${url}`,
        url,
      });
    } catch (error) {
      console.error('Error sharing:', error);
    }
  };
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity>
          <Image style={styles.img} source={Images.menuicon} />
        </TouchableOpacity>
        <Text style={styles.discovertxt}>{name}</Text>
        <TouchableOpacity>
          <Image style={styles.img} source={Images.searchicon} />
        </TouchableOpacity>
      </View>

      <Button title="share" onPress={() => handleShare()} />

      <Text style={styles.offertxt}>Up to 20% Off</Text>
      <Text style={styles.nametxt}>{name} Collection</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#808080',
    width: '100%',
    height: '30%',
  },
  header: {
    flexDirection: 'row',
    marginTop: '3%',
    justifyContent: 'space-between',
    marginHorizontal: '8%',
  },

  img: {
    height: 20,
    width: 20,
    marginTop: '30%',
  },
  discovertxt: {
    color: '#FFFFFF',
    fontSize: 25,
    fontWeight: '400',
  },
  offertxt: {
    color: '#FFFFFF',
    fontSize: 20,
    left: '8%',
    top: '28%',
  },
  nametxt: {
    color: '#FFFFFF',
    fontSize: 20,
    left: '8%',
    top: '30%',
    fontWeight: 'bold',
  },
});

export default Header;
