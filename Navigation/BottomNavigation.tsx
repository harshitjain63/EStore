import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {View, Text, Image, StyleSheet, Dimensions} from 'react-native';
import {Images} from '../constants/Image';
import Setting from '../components/HomeScreencomponents/Setting';
import User from '../components/HomeScreencomponents/User';
import DrawerNavigation from './DrawerNavigation';
import AnotherNavigation from './AnotherNavigation';

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
                <Image
                  source={Images.homebottomicon}
                  style={{
                    ...styles.imgsetting,
                    tintColor: focused ? 'red' : 'grey',
                    opacity: focused ? 1 : 1,
                  }}
                />
                {focused && (
                  <Text
                    style={[
                      styles.txt,
                      {
                        color: focused ? '#FA4248' : 'black',
                        marginTop: focused ? '10%' : null,
                      },
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
          name="AnotherNav"
          component={AnotherNavigation}
          options={{
            headerShown: false,
            tabBarIcon: ({focused}) => (
              <View style={styles.middlecontainer}>
                <Image
                  source={Images.bottomicon}
                  style={{
                    ...styles.extraimg,
                    tintColor: focused ? 'red' : 'grey',
                    opacity: focused ? 1 : 1,
                  }}
                />
                {focused && (
                  <Text
                    style={[
                      styles.txt,
                      {
                        color: focused ? '#FA4248' : 'black',
                        left: focused ? -15 : null,
                        marginTop: focused ? '10%' : null,
                      },
                    ]}>
                    Cart
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
            headerShown: false,
            tabBarIcon: ({focused}) => (
              <View style={styles.middlecontainer}>
                <Image
                  source={
                    focused ? Images.reduserbottomicon : Images.userbottomicon
                  }
                  style={styles.userimg}
                />
                {focused && (
                  <Text
                    style={[
                      styles.txt,
                      {
                        color: focused ? '#FA4248' : 'black',
                        marginTop: focused ? '10%' : null,
                      },
                    ]}>
                    Account
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
            headerShown: false,
            tabBarIcon: ({focused}) => (
              <View style={styles.middlecontainer}>
                <Image
                  source={Images.settingbottomicon}
                  style={{
                    ...styles.imgsetting,
                    tintColor: focused ? 'red' : 'grey',
                    opacity: focused ? 1 : 1,
                  }}
                />
                {focused && (
                  <Text
                    style={[
                      styles.txt,
                      {
                        color: focused ? '#FA4248' : 'black',
                        marginTop: focused ? '10%' : null,
                      },
                    ]}>
                    Setting
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
    marginTop: '10%',
  },
  imgsetting: {
    height: height * 0.035,
    width: width * 0.06,
    resizeMode: 'contain',
    marginTop: '12%',
  },
  userimg: {
    height: height * 0.035,
    width: width * 0.06,
    resizeMode: 'contain',
    marginTop: '12%',
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
    marginTop: '6%',
  },
});

export default MainTabNavigator;
