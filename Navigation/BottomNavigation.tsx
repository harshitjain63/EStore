import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {View, Text, Image, StyleSheet, Dimensions} from 'react-native';
import {Images} from '../constants/Image';
import Setting from '../components/HomeScreencomponents/Setting';
import User from '../components/HomeScreencomponents/User';
import Another from '../components/HomeScreencomponents/Another';
import DrawerNavigation from './DrawerNavigation';

const Tab = createBottomTabNavigator();

const {width, height} = Dimensions.get('window');

const MainTabNavigator = () => {
  return (
    <View style={styles.wrapper}>
      <Tab.Navigator
        screenOptions={{
          tabBarStyle: styles.container,
          tabBarShowLabel: false,
        }}>
        <Tab.Screen
          name="Drawer"
          component={DrawerNavigation}
          options={{
            tabBarIcon: ({focused}) => (
              <View style={styles.middlecontainer}>
                <Image source={Images.homebottomicon} style={styles.img} />
                {focused && (
                  <Text
                    style={[
                      styles.txt,
                      {color: focused ? '#FA4248' : 'black'},
                    ]}>
                    Home
                  </Text>
                )}
              </View>
            ),
            headerShown: false,
          }}
        />
        <Tab.Screen
          name="Another"
          component={Another}
          options={{
            headerShown: false,
            tabBarIcon: ({focused}) => (
              <View style={styles.middlecontainer}>
                <Image source={Images.bottomicon} style={styles.extraimg} />
                {focused && (
                  <Text
                    style={[
                      styles.txt,
                      {color: focused ? '#FA4248' : 'black'},
                    ]}>
                    Another
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
                    style={[
                      styles.txt,
                      {color: focused ? '#FA4248' : 'black'},
                    ]}>
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
                    style={[
                      styles.txt,
                      {color: focused ? '#FA4248' : 'black'},
                    ]}>
                    User
                  </Text>
                )}
              </View>
            ),
          }}
        />
      </Tab.Navigator>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {flex: 1, backgroundColor: '#FFFF'},
  container: {
    height: 70,
    backgroundColor: '#FFFFFF',
    borderTopWidth: 1.2,
    borderWidth: 1.2,
    borderTopEndRadius: 45,
    borderTopStartRadius: 45,
    borderColor: '#FA4248',
    paddingBottom: 10,
    justifyContent: 'center',
    paddingHorizontal: 10,
    marginVertical: -2,
    elevation: 0,
    zIndex: 1,
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
  extraimg: {
    height: 40,
    width: 50,
    resizeMode: 'contain',
  },
});

export default MainTabNavigator;
