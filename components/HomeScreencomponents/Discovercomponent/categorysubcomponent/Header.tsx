import {View, Text, Image, StyleSheet, TouchableOpacity} from 'react-native';
import React from 'react';
import {Images} from '../../../../constants/Image';
import {
  DrawerActions,
  NavigationProp,
  useNavigation,
} from '@react-navigation/native';
import {DrawerNavprop} from '../../../../Navigation/DrawerNavigation';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const Header = () => {
  const navigation =
    useNavigation<NavigationProp<DrawerNavprop, 'categories'>>();
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity
          onPress={() => navigation.dispatch(DrawerActions.openDrawer())}>
          <Image style={styles.img} source={Images.menuicon} />
        </TouchableOpacity>
        <Text style={styles.discovertxt}>Category</Text>
        <TouchableOpacity>
          <Image style={styles.img} source={Images.searchicon} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFFFFF',
    width: '100%',
    marginTop: '10%',
  },
  header: {
    flexDirection: 'row',
    marginTop: '3%',
    justifyContent: 'space-between',
    marginHorizontal: '8%',
  },

  img: {
    height: 20,
    width: 20,
    marginTop: '30%',
  },
  discovertxt: {
    color: '#FA4248',
    fontSize: 25,
  },
});

export default Header;
