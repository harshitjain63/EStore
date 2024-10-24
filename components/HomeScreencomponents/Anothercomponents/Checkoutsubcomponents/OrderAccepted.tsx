import {View, Text, StyleSheet, TouchableOpacity, Image} from 'react-native';
import React from 'react';
import Header from '../Checkoutsubcomponents/Header';
import {Images} from '../../../../constants/Image';
import {SafeAreaView} from 'react-native-safe-area-context';
import {useNavigation, NavigationProp} from '@react-navigation/native';
import {AnotherNavParams} from '../../../../Navigation/AnotherNavigation';

const OrderAccepted = () => {
  const startingimage = Images.menuicon;
  const text = 'Checkout';
  const endingimage = Images.searchicon;
  const navigation = useNavigation<NavigationProp<AnotherNavParams>>();

  return (
    <SafeAreaView style={styles.contain}>
      <Header
        startingimage={startingimage}
        text={text}
        endingimage={endingimage}
      />
      <View style={styles.container}>
        <Image
          source={Images.orderaccepted}
          style={{height: '50%', width: '67%'}}
        />
        <Text
          style={{
            color: '#000000',
            fontWeight: 'bold',
            fontSize: 20,
            marginTop: '6%',
          }}>
          Order Accepted
        </Text>
        <View style={styles.ordernoContainer}>
          <Text style={styles.orderno}>Your Order No. #123-456</Text>
          <Text style={styles.placedText}>has been placed</Text>
        </View>
        <TouchableOpacity
          onPress={() => navigation.navigate('map')}
          style={{
            backgroundColor: '#FA4248',
            borderRadius: 30,
            width: '80%',
            justifyContent: 'center',
            alignItems: 'center',
            height: '10%',
            marginTop: '10%',
          }}>
          <Text style={{color: 'white', fontWeight: 'bold'}}>TRACK ORDER</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  contain: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  ordernoContainer: {
    alignItems: 'center',
  },
  orderno: {
    color: '#B4B4B4',
    fontSize: 15,
    marginTop: '6%',
  },
  placedText: {
    color: '#B4B4B4',
    fontSize: 15,
    textAlign: 'center',
  },
});

export default OrderAccepted;
