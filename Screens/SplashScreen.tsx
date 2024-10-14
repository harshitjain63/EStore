import {NativeStackScreenProps} from '@react-navigation/native-stack';
import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import AppIntroSlider from 'react-native-app-intro-slider';
import {RootStackParams} from '../Navigation/StackNavigation';
import {Images} from '../constants/Image';

export type SplashScreenProp = NativeStackScreenProps<
  RootStackParams,
  'Splash'
>;

interface Slide {
  key: string;
  title: string;
  text: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  image: any;
}

const SplashScreen = ({navigation}: SplashScreenProp) => {
  const slides = [
    {
      key: '1',
      title: 'WELCOME',
      text: 'Sign up to get started',
      // eslint-disable-next-line @typescript-eslint/no-require-imports
      image: require('../assets/usher.png'),
    },
    {
      key: '2',
      title: 'WELCOME',
      text: 'Sign up to get started',
      // eslint-disable-next-line @typescript-eslint/no-require-imports
      image: require('../assets/usher.png'),
    },
    {
      key: '3',
      title: 'WELCOME',
      text: 'Sign up to get started',
      // eslint-disable-next-line @typescript-eslint/no-require-imports
      image: require('../assets/usher.png'),
    },
    {
      key: '4',
      title: 'WELCOME',
      text: 'Sign up to get started',
      // eslint-disable-next-line @typescript-eslint/no-require-imports
      image: require('../assets/usher.png'),
    },
  ];

  const _renderItem = ({item}: {item: Slide}) => {
    return (
      <View style={styles.slide}>
        <Image source={item.image} style={styles.image} />
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.text}>{item.text}</Text>
      </View>
    );
  };

  const _onDone = () => {
    navigation.navigate('Home');
  };

  return (
    <View style={styles.maincontainer}>
      <View style={styles.minicontainer}>
        <Text style={styles.brandText}>Superstore</Text>
        <Text style={styles.fashionText}>FASHION</Text>
        <View style={styles.line} />
      </View>

      <AppIntroSlider
        renderItem={_renderItem}
        data={slides}
        onDone={_onDone}
        renderNextButton={_renderNextButton}
        renderDoneButton={_renderDoneButton}
        dotStyle={styles.dot}
        activeDotStyle={styles.activeDot}
      />
    </View>
  );
};

const _renderNextButton = () => {
  return (
    <View style={styles.buttonCircle}>
      <Text style={styles.buttonText}>NEXT</Text>
      <Image source={Images.arrowicon} style={styles.arrow} />
    </View>
  );
};

const _renderDoneButton = () => {
  return (
    <View style={styles.buttonCircle}>
      <Text style={styles.buttonText}>GET STARTED</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  maincontainer: {flex: 1, backgroundColor: '#444'},
  minicontainer: {
    alignItems: 'center',
    marginTop: '25%',
  },
  brandText: {
    fontSize: 32,
    color: 'white',
    marginBottom: 5,
  },
  fashionText: {
    fontSize: 10,
    color: 'white',
    fontWeight: 'normal',
    marginBottom: '40%',
    marginRight: -18,
  },
  arrow: {
    height: 15,
    width: 15,
    marginLeft: 10,
  },
  slide: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#444',
  },
  image: {
    width: 100,
    height: 100,
    resizeMode: 'contain',
    marginBottom: '5%',
  },
  title: {
    fontSize: 20,
    color: 'white',
  },
  text: {
    fontSize: 22,
    textAlign: 'center',
    marginTop: '3%',
    color: 'white',
  },
  dot: {
    width: 8,
    height: 8,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: 'white',
    left: '-40%',
  },
  activeDot: {
    backgroundColor: 'white',
    width: 8,
    height: 8,
    borderRadius: 6,
    left: '-40%',
  },
  buttonCircle: {
    width: 100,
    height: 40,
    backgroundColor: 'red',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
    flexDirection: 'row',
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
  },
  line: {
    position: 'absolute',
    width: 2,
    height: '27.6%',
    backgroundColor: 'white',
    top: '1%',
    left: '60.5%',
  },
});

export default SplashScreen;
