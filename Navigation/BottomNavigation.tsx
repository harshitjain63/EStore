import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {View, Text, Image, StyleSheet, Dimensions} from 'react-native';
import {Images} from '../constants/Image';
import Discover from '../components/HomeScreencomponents/Discover';
import Setting from '../components/HomeScreencomponents/Setting';
import User from '../components/HomeScreencomponents/User';
import Another from '../components/HomeScreencomponents/Another';

const Tab = createBottomTabNavigator();

const {width, height} = Dimensions.get('window');

const MainTabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarStyle: styles.container,
        tabBarShowLabel: false,
      }}>
      <Tab.Screen
        name="Discover"
        component={Discover}
        options={{
          tabBarIcon: ({focused}) => (
            <View style={styles.middlecontainer}>
              <Image source={Images.homebottomicon} style={styles.img} />
              {focused && (
                <Text
                  style={[styles.txt, {color: focused ? '#FA4248' : 'black'}]}>
                  Home
                </Text>
              )}
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Another"
        component={Another}
        options={{
          tabBarIcon: ({focused}) => (
            <View style={styles.middlecontainer}>
              <Image source={Images.homebottomicon} style={styles.img} />
              {focused && (
                <Text
                  style={[styles.txt, {color: focused ? '#FA4248' : 'black'}]}>
                  Home
                </Text>
              )}
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Setting"
        component={Setting}
        options={{
          tabBarIcon: ({focused}) => (
            <View style={styles.middlecontainer}>
              <Image source={Images.settingbottomicon} style={styles.img} />
              {focused && (
                <Text
                  style={[styles.txt, {color: focused ? '#FA4248' : 'black'}]}>
                  Setting
                </Text>
              )}
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="User"
        component={User}
        options={{
          tabBarIcon: ({focused}) => (
            <View style={styles.middlecontainer}>
              <Image source={Images.userbottomicon} style={styles.img} />
              {focused && (
                <Text
                  style={[styles.txt, {color: focused ? '#FA4248' : 'black'}]}>
                  User
                </Text>
              )}
            </View>
          ),
        }}
      />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 67,
    backgroundColor: 'white',
    borderTopWidth: 1.2,
    borderColor: '#FA4248',
    width: '100%',
    paddingBottom: 10,
    justifyContent: 'center',
    paddingHorizontal: 10,
  },
  img: {
    height: height * 0.035,
    width: width * 0.06,
    resizeMode: 'contain',
  },
  middlecontainer: {
    flexDirection: 'row',
    gap: 10,
    marginBottom: '5%',
    alignItems: 'center',
  },
  txt: {
    color: 'black',
  },
});

export default MainTabNavigator;
