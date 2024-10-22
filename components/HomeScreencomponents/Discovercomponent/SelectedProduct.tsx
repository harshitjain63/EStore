import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  Dimensions,
  Animated,
} from 'react-native';
import React from 'react';
import {
  useRoute,
  RouteProp,
  NavigationProp,
  useNavigation,
} from '@react-navigation/native';
import {CategoryNavParams} from '../../../Navigation/CategoryNavigation';
import {Images} from '../../../constants/Image';
import ProductNavigator from './Productsubcomponent/ProductNavigator';
import SubHeader from './Productsubcomponent/SubHeader';

const products = [
  {id: 1, product: 'Product 1', price: '$10'},
  {id: 2, product: 'Product 2', price: '$15'},
  {id: 3, product: 'Product 3', price: '$20'},
];

const SelectedProduct = () => {
  const route = useRoute<RouteProp<CategoryNavParams, 'selectedproduct'>>();
  const {name} = route.params;

  const navigation = useNavigation<NavigationProp<CategoryNavParams>>();
  const {height: Height} = Dimensions.get('window');

  const scrollY = new Animated.Value(0);

  const headerHeight = scrollY.interpolate({
    inputRange: [0, 200],
    outputRange: [Height * 0.65, Height * 0.4],
    extrapolate: 'clamp',
  });

  const headerOpacity = scrollY.interpolate({
    inputRange: [0, 150],
    outputRange: [1, 0],
    extrapolate: 'clamp',
  });

  const oldContentOpacity = scrollY.interpolate({
    inputRange: [0, Height * 0.4],
    outputRange: [1, 0],
    extrapolate: 'clamp',
  });

  const newContentOpacity = scrollY.interpolate({
    inputRange: [Height * 0.3, Height * 0.35],
    outputRange: [0, 1],
    extrapolate: 'clamp',
  });

  return (
    <View style={styles.container}>
      <Animated.View
        style={{
          ...styles.containerheader,
          height: headerHeight,
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          zIndex: 2, //it wil always remain on top
        }}>
        <View style={styles.header}>
          <TouchableOpacity>
            <Image style={styles.img} source={Images.menuicon} />
          </TouchableOpacity>
          <Text style={styles.discovertxt}>{name}</Text>
          <TouchableOpacity>
            <Image style={styles.img} source={Images.emptyheart} />
          </TouchableOpacity>
        </View>
        <Animated.View style={{opacity: headerOpacity}}>
          <ProductNavigator products={products} />
        </Animated.View>
      </Animated.View>
      <Animated.ScrollView
        style={{paddingHorizontal: 20}}
        onScroll={Animated.event(
          [{nativeEvent: {contentOffset: {y: scrollY}}}],
          {
            useNativeDriver: false,
          },
        )}
        contentContainerStyle={{
          paddingTop: Height * 0.65,
        }}>
        <Animated.Text style={{...styles.txt, opacity: oldContentOpacity}}>
          If you&apos;re offered a seat on a rocket ship,
        </Animated.Text>
        <Animated.Text style={{...styles.txt, opacity: oldContentOpacity}}>
          don&apos;t ask what seat! Just get on,
        </Animated.Text>

        <Animated.View
          style={{...styles.buttonContainer, opacity: oldContentOpacity}}>
          <TouchableOpacity style={styles.buttons}>
            <Text style={{color: '#ffff', fontWeight: 'bold'}}>
              ADD TO CART
            </Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.backbutton}>
            <Image source={Images.arrowicon} style={styles.buttonImage} />
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate('review', {name})}>
            <Image source={Images.arrowicon} style={styles.buttonImage} />
          </TouchableOpacity>
        </Animated.View>
        <Animated.View style={{opacity: newContentOpacity}}>
          <SubHeader />
        </Animated.View>
      </Animated.ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  containerheader: {
    backgroundColor: '#808080',
    width: '100%',
    borderBottomEndRadius: 40,
    borderBottomStartRadius: 40,
  },
  header: {
    flexDirection: 'row',
    marginTop: '14%',
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
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  txt: {
    color: '#767676',
    fontSize: 15,
    alignSelf: 'center',
    top: '1%',
    position: 'relative',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: '36%',
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
    left: '6%',
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
