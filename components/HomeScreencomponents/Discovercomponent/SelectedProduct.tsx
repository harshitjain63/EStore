import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import Header from './Productsubcomponent/Header';
import {useRoute, RouteProp} from '@react-navigation/native';
import {CategoryNavParams} from '../../../Navigation/CategoryNavigation';
import {Images} from '../../../constants/Image';

const SelectedProduct = () => {
  const route = useRoute<RouteProp<CategoryNavParams, 'selectedproduct'>>();
  const {name} = route.params;

  return (
    <View style={styles.container}>
      <Header names={name} />
      <Text style={styles.txt}>
        If you&apos;re offered a seat on a rocket ship,
      </Text>
      <Text style={styles.txt}>don&apos;t ask what seat! Just get on,</Text>

      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.buttons}>
          <Text style={{color: '#ffff', fontWeight: 'bold'}}>ADD TO CART</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.backbutton}>
          <Image source={Images.arrowicon} style={styles.buttonImage} />
        </TouchableOpacity>

        <TouchableOpacity style={styles.button}>
          <Image source={Images.arrowicon} style={styles.buttonImage} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  txt: {
    color: '#767676',
    fontSize: 15,
    alignSelf: 'center',
    top: '5%',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: '46%',
    paddingLeft: '4%',
    paddingRight: '4%',
  },
  button: {
    backgroundColor: 'red',
    height: 50,
    width: 50,
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 10,
  },
  buttons: {
    backgroundColor: 'red',
    height: 50,
    width: '40%',
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 10,
  },
  backbutton: {
    backgroundColor: '#9599B3',
    height: 50,
    width: 50,
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 10,
    left: '10%',
  },
  buttonImage: {
    height: 30,
    width: 30,
  },
  disabledButton: {
    backgroundColor: 'green',
  },
});

export default SelectedProduct;
