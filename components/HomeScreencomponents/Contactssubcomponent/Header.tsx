import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {Images} from '../../../constants/Image';
import {
  DrawerActions,
  NavigationProp,
  useNavigation,
} from '@react-navigation/native';
import {DrawerNavprop} from '../../../Navigation/DrawerNavigation';

const Header = () => {
  const navigation = useNavigation<NavigationProp<DrawerNavprop, 'contacts'>>();

  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <TouchableOpacity
          onPress={() => navigation.dispatch(DrawerActions.openDrawer)}>
          <Image source={Images.menuicon} style={styles.img} />
        </TouchableOpacity>

        <Text style={{color: '#FFF', fontSize: 20}}>Contacts</Text>
        <Image source={Images.searchicon} style={styles.img} />
      </View>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#000000',
    height: '17%',
    borderBottomEndRadius: 40,
    borderBottomStartRadius: 40,
    zIndex: 1,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: '8%',
    marginTop: '13%',
  },
  img: {
    height: 20,
    width: 20,
    tintColor: '#FFF',
  },
});
