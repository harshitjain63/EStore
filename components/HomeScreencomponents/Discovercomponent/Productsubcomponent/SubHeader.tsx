import {View, Text, StyleSheet, TouchableOpacity, Image} from 'react-native';
import React, {useState} from 'react';
import Result from '../searchresultsubcomponent/Result';
import {Images} from '../../../../constants/Image';
import {useAppDispatch} from '../../../../redux/hooks';
import {addItemToCart} from '../../../../redux/Slice/CartSlice';

const SubHeader = () => {
  const dispatch = useAppDispatch();
  const [quantity, setQuantity] = useState(0);
  console.log(quantity);

  const handleAddToCart = () => {
    dispatch(
      addItemToCart({
        id: '1',
        image: 'https://via.placeholder.com/150',
        name: 'White Top',
        category: 'Women',
        price: '15',
        quantity: quantity,
      }),
    );
  };
  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <Text style={styles.txt}>Gucci Sunglasses</Text>
        <Text style={styles.pricetxt}>$45</Text>
      </View>

      <View style={styles.row}>
        <TouchableOpacity style={styles.touchcircle}>
          <Text style={{color: 'black', fontSize: 15}}>Size</Text>
          <Text style={{color: 'black', fontSize: 15}}>M</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.touchcircle}>
          <Text style={{color: 'black', fontSize: 15}}>Color</Text>
          <View
            style={{
              backgroundColor: '#E0EE27',
              height: 20,
              width: 20,
              borderRadius: 5,
            }}></View>
        </TouchableOpacity>
      </View>
      <Text
        style={{
          fontWeight: 'bold',
          fontSize: 15,
          color: 'black',
          marginTop: '5%',
        }}>
        Description
      </Text>
      <Text style={{fontSize: 15, color: '#767676', marginTop: '2%'}}>
        It is a long established fact that a reader will be distracted by the
        readable content of a page when looking at its layout. The point of
        using Lorem Ipsum is that it has a more-or-less normal distribution of
        letters, as opposed to using &apos;Content here, content here&apos;,
        making it look like readable English.{' '}
      </Text>
      <View style={styles.row}>
        <TouchableOpacity style={styles.redcircle} onPress={handleAddToCart}>
          <Text
            style={{
              color: '#FFFF',
              fontSize: 15,
              fontWeight: 'bold',
            }}>
            ADD TO CART
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.touchaddsub}>
          <Text
            style={{color: '#343434', fontSize: 15, paddingLeft: '5%'}}
            onPress={() => setQuantity(quantity - 1)}>
            -
          </Text>
          <Text style={{color: '#343434', fontSize: 15}}>{quantity}</Text>
          <Text
            style={{
              color: '#343434',
              fontSize: 15,
              paddingRight: '5%',
            }}
            onPress={() => setQuantity(quantity + 1)}>
            +
          </Text>
        </TouchableOpacity>
      </View>
      <Text
        style={{
          fontWeight: 'bold',
          fontSize: 15,
          color: 'black',
          marginTop: '8%',
        }}>
        You May Also Like
      </Text>
      <Result
        image={'https://via.placeholder.com/150'}
        name={'White Dress'}
        category={'Best Seller'}
        price={'$15'}
      />
      <Result
        image={'https://via.placeholder.com/150'}
        name={'Red Dress'}
        category={'Best Seller'}
        price={'$15'}
      />
      <Text
        style={{
          fontWeight: 'bold',
          fontSize: 15,
          color: 'black',
          marginTop: '2%',
        }}>
        Reviews
      </Text>
      <Text
        style={{
          fontWeight: 'bold',
          fontSize: 12,
          color: '#78849E',
          marginTop: '2%',
        }}>
        Write Yours
      </Text>
      <View style={styles.rows}>
        <View
          style={{
            height: 50,
            width: 50,
            borderRadius: 40,
            backgroundColor: '#808080',
          }}></View>
        <View style={{width: '80%', left: 20}}>
          <Text style={{fontWeight: 'bold', color: 'black'}}>Andre</Text>
          <Text style={{color: 'grey', marginTop: '2%'}}>
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout.
          </Text>
        </View>
        <View style={{flexDirection: 'row', gap: 5, right: 60}}>
          <Image source={Images.star} style={{height: 15, width: 15}} />
          <Image source={Images.star} style={{height: 15, width: 15}} />
          <Image source={Images.star} style={{height: 15, width: 15}} />
          <Image source={Images.star} style={{height: 15, width: 15}} />
        </View>
      </View>

      <View style={styles.rows}>
        <View
          style={{
            height: 50,
            width: 50,
            borderRadius: 40,
            backgroundColor: '#808080',
          }}></View>
        <View style={{width: '80%', left: 20}}>
          <Text style={{fontWeight: 'bold', color: 'black'}}>Andre</Text>
          <Text style={{color: 'grey', marginTop: '2%'}}>
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout.
          </Text>
        </View>
        <View style={{flexDirection: 'row', gap: 5, right: 60}}>
          <Image source={Images.star} style={{height: 15, width: 15}} />
          <Image source={Images.star} style={{height: 15, width: 15}} />
          <Image source={Images.star} style={{height: 15, width: 15}} />
          <Image source={Images.star} style={{height: 15, width: 15}} />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFFFF',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  rows: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: '6%',
    marginBottom: '5%',
  },

  txt: {
    color: 'black',
    marginTop: '10%',
    fontWeight: 'bold',
    fontSize: 20,
  },
  pricetxt: {
    color: 'black',
    marginTop: '10%',
    fontSize: 20,
  },
  touchcircle: {
    width: '45%',
    borderRadius: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderWidth: 1,
    padding: '3%',
    marginTop: '5%',
  },
  touchaddsub: {
    width: '40%',
    borderRadius: 25,
    flexDirection: 'row',
    justifyContent: 'space-between',

    paddingTop: '3%',
    paddingLeft: '3%',
    paddingRight: '3%',
    marginTop: '5%',
    backgroundColor: '#0000000F',
  },
  redcircle: {
    width: '45%',
    borderRadius: 25,
    padding: '3%',
    marginTop: '5%',
    backgroundColor: '#FA4248',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default SubHeader;
