import {View, StyleSheet, TouchableOpacity, Image} from 'react-native';
import React, {useState} from 'react';
import {Images} from '../../../../constants/Image';
import Card from './Paymentsubcomponent/Card';
import PayPal from './Paymentsubcomponent/PayPal';
import Wallet from './Paymentsubcomponent/Wallet';

const Payments = () => {
  const [selectedPayment, setSelectedPayment] = useState<string>('paypal');

  const handlePayPal = () => {
    setSelectedPayment('paypal');
  };

  const handleCard = () => {
    setSelectedPayment('card');
  };

  const handleWallet = () => {
    setSelectedPayment('wallet');
  };

  const renderStepContent = () => {
    switch (selectedPayment) {
      case 'paypal':
        return <PayPal />;
      case 'card':
        return <Card />;
      case 'wallet':
        return <Wallet />;
      default:
        return <PayPal />;
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <TouchableOpacity
          onPress={handlePayPal}
          style={{
            backgroundColor:
              selectedPayment === 'paypal' ? '#FA4248' : '#FFFFFF',
            borderWidth: 1,
            borderColor: selectedPayment === 'paypal' ? '#FA4248' : '#DCDCDC',
            height: 45,
            width: '25%',
            borderRadius: 25,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Image source={Images.paypal} style={styles.img} />
        </TouchableOpacity>

        <TouchableOpacity
          onPress={handleCard}
          style={{
            backgroundColor: selectedPayment === 'card' ? '#FA4248' : '#FFFFFF',
            borderColor: selectedPayment === 'card' ? '#FA4248' : '#DCDCDC',
            borderWidth: 1,
            height: 45,
            width: '25%',
            borderRadius: 25,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Image source={Images.creditcard} style={styles.img} />
        </TouchableOpacity>

        <TouchableOpacity
          onPress={handleWallet}
          style={{
            backgroundColor:
              selectedPayment === 'wallet' ? '#FA4248' : '#FFFFFF',
            borderWidth: 1,
            borderColor: selectedPayment === 'wallet' ? '#FA4248' : '#DCDCDC',
            height: 45,
            width: '25%',
            borderRadius: 25,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Image source={Images.wallet} style={styles.img} />
        </TouchableOpacity>
      </View>

      {/* Render the selected payment method content */}
      {renderStepContent()}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: '8%',
    marginTop: '8%',
  },
  img: {
    height: 20,
    width: 20,
  },
  txt: {
    color: '#757575',
    fontSize: 13,
  },
  input: {
    color: '#000000',
    fontSize: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#B4B4B4',
  },
});

export default Payments;
