import {View, Text, Image, TouchableOpacity, StyleSheet} from 'react-native';
import React, {useState} from 'react';
import {Images} from '../../../../constants/Image';
import Seekbar from './Seekbar';

const SeekbarDropdown = () => {
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const handleOnPress = () => {
    setDropdownOpen(!isDropdownOpen);
  };
  return (
    <View style={styles.maincontainer}>
      <View style={styles.container}>
        <Text style={styles.txt}>Price</Text>
        <TouchableOpacity onPress={handleOnPress}>
          <Image source={Images.dropdownicon} style={styles.img} />
        </TouchableOpacity>
      </View>
      {isDropdownOpen && <Seekbar />}
    </View>
  );
};

const styles = StyleSheet.create({
  maincontainer: {marginBottom: 50},
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: '10%',
    width: '100%',
    paddingBottom: 5,
  },
  txt: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: 20,
  },
  brandtxt: {
    color: 'black',
    fontWeight: 'bold',
  },
  img: {
    height: 20,
    width: 20,
  },
  checkbox: {
    height: 20,
    width: 20,
    borderWidth: 2,
    borderColor: 'black',
  },
  checkbox2: {
    height: 20,
    width: 20,
    backgroundColor: 'red',
  },
  mapcontent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: '10%',
    width: '100%',
    paddingBottom: 5,
  },
});

export default SeekbarDropdown;
