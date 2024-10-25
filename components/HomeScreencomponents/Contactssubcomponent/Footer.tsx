import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import StoreView from './StoreView';

const Footer = () => {
  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <Text style={styles.heading}>Locate a Store</Text>
        <Text style={styles.txt}>Easily Locate a Store from your current</Text>
        <Text style={styles.txt}>location. Click locate below</Text>
        <TouchableOpacity style={styles.btn}>
          <Text style={styles.btntxt}>LOCATE</Text>
        </TouchableOpacity>
        <Text style={styles.totstoretxt}>Nearby Stores (3)</Text>
        <StoreView />
        <StoreView />
        <StoreView />
      </ScrollView>
    </View>
  );
};

export default Footer;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFF',
    borderTopEndRadius: 40,
    borderTopStartRadius: 40,
    flex: 1,
    marginTop: '60%',
    zIndex: 1,
  },
  scrollContent: {
    alignItems: 'center',
    paddingVertical: 20,
  },
  heading: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: 24,
    marginTop: '4%',
    paddingBottom: '4%',
  },
  txt: {
    color: '#767676',
    fontSize: 14,
  },
  btntxt: {
    color: '#FFF',
    fontWeight: 'bold',
    fontSize: 14,
  },
  btn: {
    width: '36%',
    height: 40,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FA4248',
    marginTop: '8%',
    marginBottom: '5%',
  },
  totstoretxt: {
    color: '#352641',
    fontWeight: 'bold',
    fontSize: 16,
  },
});
