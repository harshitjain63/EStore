import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import {Images} from '../../../../constants/Image';

// Define the types for props if using TypeScript
interface DropdownProps {
  title: string; // Title of the dropdown
  data: {id: number; name: string}[]; // Array of items with id and name
}

const Dropdowncomponent: React.FC<DropdownProps> = ({title, data}) => {
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const [checkedItems, setCheckedItems] = useState<{[key: number]: boolean}>(
    {},
  );

  const handleOnPress = () => {
    setDropdownOpen(!isDropdownOpen);
  };

  const handleCheckbox = (id: number) => {
    setCheckedItems(prevState => ({
      ...prevState,
      [id]: !prevState[id],
    }));
  };

  return (
    <View style={styles.maincontainer}>
      <View style={styles.container}>
        <Text style={styles.txt}>{title}</Text>
        <TouchableOpacity onPress={handleOnPress}>
          <Image source={Images.dropdownicon} style={styles.img} />
        </TouchableOpacity>
      </View>
      {isDropdownOpen ? null : <Text style={styles.selecttxt}>Content</Text>}

      {isDropdownOpen &&
        data.map(item => (
          <View key={item.id} style={styles.mapcontent}>
            <Text style={styles.brandtxt}>{item.name}</Text>
            <TouchableOpacity onPress={() => handleCheckbox(item.id)}>
              <View
                style={
                  checkedItems[item.id] ? styles.checkbox2 : styles.checkbox
                }></View>
            </TouchableOpacity>
          </View>
        ))}
    </View>
  );
};

const styles = StyleSheet.create({
  maincontainer: {marginBottom: 45},
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
  selecttxt: {
    color: '#000000',
    left: '10%',
  },
  img: {
    height: 20,
    width: 20,
  },
  checkbox: {
    height: 20,
    width: 20,
    borderWidth: 2,
    borderColor: '#000000',
    borderRadius: 10,
  },
  checkbox2: {
    height: 20,
    width: 20,
    backgroundColor: 'red',
    borderRadius: 10,
    borderColor: '#000000',
    borderWidth: 2,
  },
  mapcontent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: '10%',
    width: '100%',
    paddingBottom: 5,
  },
});

export default Dropdowncomponent;
