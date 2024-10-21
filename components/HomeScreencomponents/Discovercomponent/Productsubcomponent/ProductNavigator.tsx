/* eslint-disable @typescript-eslint/no-unused-vars */
import React, {useState} from 'react';
import {View, Text, TouchableOpacity, StyleSheet, Image} from 'react-native';
import {Images} from '../../../../constants/Image';

interface Product {
  id: number;
  product: string;
  price: string;
}

interface ProductNavigatorProps {
  products: Product[];
}

const ProductNavigator = ({products}: ProductNavigatorProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedSize, setSelectedSize] = useState<string | null>(null);

  //   const nextProduct = () => {
  //     if (currentIndex < products.length - 1) {
  //       setCurrentIndex(currentIndex + 1);
  //     }
  //   };

  //   const previousProduct = () => {
  //     if (currentIndex > 0) {
  //       setCurrentIndex(currentIndex - 1);
  //     }
  //   };

  const handleSizePress = (size: string) => {
    setSelectedSize(size);
  };

  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <TouchableOpacity
          style={styles.redball}
          onPress={() => handleSizePress('L')}
        />
        <TouchableOpacity
          style={[styles.sizeball, selectedSize === 'L' && styles.selectedSize]}
          onPress={() => handleSizePress('L')}>
          <Text style={styles.sizetxt}>L</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.row}>
        <TouchableOpacity
          style={styles.yellowball}
          onPress={() => handleSizePress('M')}
        />
        <TouchableOpacity
          style={[styles.sizeball, selectedSize === 'M' && styles.selectedSize]}
          onPress={() => handleSizePress('M')}>
          <Text style={styles.sizetxt}>M</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.row}>
        <TouchableOpacity
          style={styles.blueball}
          onPress={() => handleSizePress('S')}
        />
        <TouchableOpacity
          style={[styles.sizeball, selectedSize === 'S' && styles.selectedSize]}
          onPress={() => handleSizePress('S')}>
          <Text style={styles.sizetxt}>S</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.productInfo}>
        <Text style={styles.productName}>{products[currentIndex].product}</Text>
        <Text style={styles.productPrice}>{products[currentIndex].price}</Text>
      </View>

      {/* <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={[
            styles.button,
            currentIndex === 0 ? styles.disabledButton : {},
          ]}
          onPress={previousProduct}
          disabled={currentIndex === 0}>
          <Image source={Images.arrowicon} style={styles.buttonImage} />
        </TouchableOpacity>

        <TouchableOpacity
          style={[
            styles.button,
            currentIndex === products.length - 1 ? styles.disabledButton : {},
          ]}
          onPress={nextProduct}
          disabled={currentIndex === products.length - 1}>
          <Image source={Images.arrowicon} style={styles.buttonImage} />
        </TouchableOpacity>
      </View> */}
    </View>
  );
};

const styles = StyleSheet.create({
  sizetxt: {
    fontSize: 22,
    alignSelf: 'center',
  },
  sizeball: {
    borderRadius: 20,
    height: 35,
    width: 35,
    borderWidth: 1,
    borderColor: 'white',
    marginBottom: 10,
  },
  selectedSize: {
    borderWidth: 2,
  },
  redball: {
    borderRadius: 20,
    height: 25,
    width: 25,
    borderWidth: 1,
    borderColor: 'white',
    backgroundColor: '#C92636',
  },
  yellowball: {
    borderRadius: 20,
    height: 25,
    width: 25,
    borderWidth: 1,
    borderColor: 'white',
    backgroundColor: '#E0EE27',
  },
  blueball: {
    borderRadius: 20,
    height: 25,
    width: 25,
    borderWidth: 1,
    borderColor: 'white',
    backgroundColor: '#2748EE',
    marginBottom: 10,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  container: {
    padding: 20,
    marginTop: '25%',
  },
  productInfo: {
    alignItems: 'center',
  },
  productName: {
    fontSize: 22,
    marginBottom: '3%',
    color: '#FFFFFF',
  },
  productPrice: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#FFFFFF',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
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
  buttonImage: {
    height: 30,
    width: 30,
  },
  disabledButton: {
    backgroundColor: 'green',
  },
});

export default ProductNavigator;
