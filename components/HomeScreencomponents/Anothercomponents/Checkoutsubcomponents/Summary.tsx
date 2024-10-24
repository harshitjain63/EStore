import {View, Text, StyleSheet, ScrollView} from 'react-native';
import React from 'react';
import DressView from './Summarysubcomponent/DressView';
import {Images} from '../../../../constants/Image';
import ShippingAddress from './Summarysubcomponent/ShippingAddress';
import Footer from './Summarysubcomponent/Footer';

const Sampledata = [
  {
    id: '1',
    name: 'Red Dress',
    image: Images.reddress,
    price: '$15',
  },
  {
    id: '2',
    name: 'White Hat',
    image: Images.hat,
    price: '$15',
  },
];

const Summary = () => {
  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={{paddingHorizontal: '8%', marginTop: '6%'}}>
          <Text style={styles.title}>Summary</Text>

          {/* Horizontal ScrollView for Dress Items */}
          <View style={styles.dressViewContainer}>
            <ScrollView horizontal={true}>
              {Sampledata.map(item => (
                <DressView
                  key={item.id}
                  name={item.name}
                  image={item.image}
                  price={item.price}
                />
              ))}
            </ScrollView>
          </View>

          {/* Shipping Address */}
          <View style={styles.sectionContainer}>
            <ShippingAddress />
          </View>

          {/* Footer */}
          <View style={styles.sectionContainer}>
            <Footer />
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
  },
  scrollContainer: {},
  title: {
    color: '#000000',
    fontWeight: 'bold',
    fontSize: 20,
  },
  dressViewContainer: {
    marginTop: '8%',
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#EBEBEB',
  },
  sectionContainer: {
    marginTop: '8%',
    borderBottomWidth: 1,
    borderBottomColor: '#EBEBEB',
  },
});

export default Summary;
