import {Text, StyleSheet, ScrollView} from 'react-native';
import React from 'react';
import Header from './Anothercomponents/Checkoutsubcomponents/Header';
import {Images} from '../../constants/Image';
import {SafeAreaView} from 'react-native-safe-area-context';
import Profile from './Usercomponent/Profile';
import Options from './Usercomponent/Options';

const optionsData = [
  {
    id: 1,
    name: ' Edit Profile',
    image: Images.ushericon,
    forwardIcon: Images.forwardicon,
  },
  {
    id: 2,
    name: 'Shipping Address',
    image: Images.ushericon,
    forwardIcon: Images.forwardicon,
  },
  {
    id: 3,
    name: 'Whishlist',
    image: Images.ushericon,
    new: Images.new,
    forwardIcon: Images.forwardicon,
  },
  {
    id: 4,
    name: 'Order History',
    image: Images.ushericon,
    forwardIcon: Images.forwardicon,
  },
  {
    id: 5,
    name: 'Track Order',
    image: Images.ushericon,
    forwardIcon: Images.forwardicon,
  },
  {
    id: 6,
    name: 'Cards',
    image: Images.ushericon,
    forwardIcon: Images.forwardicon,
  },
  {
    id: 7,
    name: 'Notifications',
    image: Images.ushericon,
    forwardIcon: Images.forwardicon,
  },
  {
    id: 8,
    name: 'Logout',
    image: Images.ushericon,
  },
];

const User = () => {
  const startingimage = Images.menuicon;
  const text = 'Account';
  const endingimage = Images.searchicon;
  return (
    <SafeAreaView style={styles.container}>
      <Text>User</Text>
      <Header
        startingimage={startingimage}
        text={text}
        endingimage={endingimage}
      />
      <Profile />

      <ScrollView style={{marginTop: '4%', marginBottom: '2%'}}>
        {optionsData
          ? optionsData.map(item => (
              <Options
                key={item.id}
                name={item.name}
                image={item.image}
                newimg={item.new}
                forwardicon={item.forwardIcon}
              />
            ))
          : null}
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFFFFF',
    flex: 1,
  },
});

export default User;
