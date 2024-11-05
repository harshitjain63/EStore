import {
  View,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Text,
} from 'react-native';
import React from 'react';
import Header from './Anothercomponents/Header';
import AnotherBody from './Anothercomponents/AnotherBody';
import AnotherFooter from './Anothercomponents/AnotherFooter';
import {NavigationProp, useNavigation} from '@react-navigation/native';
import {AnotherNavParams} from '../../Navigation/AnotherNavigation';
import {AppEventsLogger} from 'react-native-fbsdk-next';
import {useAppSelector} from '../../redux/hooks';

type ProductItem = {
  id: string;
  image: string;
  name: string;
  category: string;
  price: string;
};

const Another = () => {
  const sampleData = useAppSelector(state => state.cartdata.data);
  const sampleDatas = [
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
      name: 'Black Shirt',
      category: 'Men',
      price: '$20',
    },
    {
      id: '4',
      image: 'https://via.placeholder.com/150',
      name: 'Black Shirt',
      category: 'Men',
      price: '$20',
    },
  ];

  const navigation = useNavigation<NavigationProp<AnotherNavParams>>();

  const handleCheckout = (
    subtotal: string,
    shppingcharges: string,
    currency = '$',
    items: ProductItem[],
  ) => {
    AppEventsLogger.logEvent('CheckoutHarshit', {
      sub_total: subtotal,
      currency: currency,
      shipping_charges: shppingcharges,
      items: JSON.stringify(items),
    });
    navigation.navigate('Checkout');
  };

  const checkoutButtonHandler = () => {
    const subtotal = sampleDatas.reduce((acc, item) => {
      const price = parseFloat(item.price.replace('$', ''));
      return acc + price;
    }, 0);
    handleCheckout(subtotal.toString(), '10$', '$', sampleDatas);
  };

  return (
    <View style={styles.container}>
      <Header />
      <View style={{marginTop: '5%', marginBottom: '10%', height: '60%'}}>
        <ScrollView>
          <View>
            {sampleData
              ? sampleData.map(item => (
                  <AnotherBody
                    key={item.id}
                    id={item.id}
                    image={item.image}
                    name={item.name}
                    category={item.category}
                    price={item.price}
                    quantity={item.quantity}
                  />
                ))
              : null}
          </View>

          <AnotherFooter />
        </ScrollView>
      </View>
      <TouchableOpacity
        onPress={() => checkoutButtonHandler()}
        style={{
          height: '30%',
          width: '100%',
          backgroundColor: '#FA4248',
          borderTopEndRadius: 28,
          borderTopStartRadius: 28,
          position: 'absolute',
          top: '83%',
        }}>
        <Text
          style={{
            alignSelf: 'center',
            marginTop: '6%',
            fontWeight: 'bold',
            color: '#FFF',
          }}>
          CHECKOUT
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={{
          height: '30%',
          width: '100%',
          backgroundColor: '#F0F0F0',
          borderTopEndRadius: 28,
          borderTopStartRadius: 28,
          position: 'absolute',
          top: '91.3%',
        }}>
        <Text
          style={{
            alignSelf: 'center',
            marginTop: '6%',
            fontWeight: 'bold',
            color: '#151515',
          }}>
          CONTINUE SHOPPING
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
});

export default Another;
