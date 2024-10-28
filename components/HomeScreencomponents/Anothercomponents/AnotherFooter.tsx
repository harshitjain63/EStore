import {View, Text, StyleSheet, TextInput} from 'react-native';
import React from 'react';
import {useAppSelector} from '../../../redux/hooks';
import {CartItem} from '../../../redux/Slice/CartSlice';

const AnotherFooter = () => {
  const selector = useAppSelector(state => state.cartdata.data);

  const totalPrice = selector.reduce((acc: number, item: CartItem) => {
    return acc + parseInt(item.price) * item.quantity;
  }, 0);

  console.log(totalPrice);

  return (
    <View style={styles.container}>
      <View style={{padding: '5%'}}>
        <Text style={styles.totaltxt}>Totals</Text>
        <View style={styles.row}>
          <Text style={styles.costtxt}>Sub Total</Text>
          <Text style={styles.costmoneytxt}>${totalPrice.toFixed(2)}</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.costtxt}>Shipping</Text>
          <Text style={styles.costmoneytxt}>$0</Text>
        </View>
        <View style={styles.row2}>
          <TextInput
            placeholder="Enter Voucher Code"
            placeholderTextColor={'grey'}
          />
          <Text style={{marginTop: '5%', color: 'black'}}>Apply</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFFFF',
  },
  totaltxt: {
    fontWeight: 'bold',
    fontSize: 25,
    color: 'black',
  },
  costmoneytxt: {
    fontWeight: 'bold',
    fontSize: 18,
    color: 'black',
  },
  costtxt: {
    fontSize: 18,
    color: 'grey',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: '10%',
  },
  row2: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: '10%',
    borderWidth: 1,
    borderRadius: 30,
    paddingHorizontal: '5%',
    marginBottom: '3%',
    borderColor: '#00000026',
  },
});

export default AnotherFooter;
