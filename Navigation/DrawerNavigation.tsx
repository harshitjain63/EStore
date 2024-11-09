import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';

import CategoryNavigation from './CategoryNavigation';
import NewNavigation from './NewNavigation';
import {Image, StyleSheet, Text, View} from 'react-native';
import DrawerHeader from '../components/DrawerDesign';
import Contacts from '../components/HomeScreencomponents/Contacts';
import {Images} from '../constants/Image';
import Another from '../components/HomeScreencomponents/Another';

const Drawer = createDrawerNavigator<DrawerNavprop>();

export type DrawerNavprop = {
  Discover: undefined;
  categories: undefined;
  contacts: undefined;
  cart: undefined;
};

const DrawerNavigation = () => {
  return (
    <>
      <Drawer.Navigator
        drawerContent={props => {
          return <DrawerHeader {...props} />;
        }}
        screenOptions={{
          headerShown: true,
          drawerStyle: {...styles.container},
          drawerItemStyle: {marginBottom: '-4%'},
        }}>
        <Drawer.Screen
          name="Discover"
          component={NewNavigation}
          options={{
            headerShown: false,
            drawerIcon: () => (
              <View>
                <Image
                  source={Images.homedrawer}
                  style={{height: 20, width: 20, tintColor: '#FFF'}}
                />
              </View>
            ),
            drawerLabel: () => <Text style={styles.txt}>Home</Text>,
          }}
        />

        <Drawer.Screen
          name="contacts"
          component={Contacts}
          options={{
            headerShown: false,
            drawerIcon: () => (
              <View>
                <Image
                  source={Images.contactsdrawer}
                  style={{height: 20, width: 20, tintColor: '#FFF'}}
                />
              </View>
            ),
            drawerLabel: () => <Text style={styles.txt}>Contacts</Text>,
          }}
        />

        <Drawer.Screen
          name="categories"
          component={CategoryNavigation}
          options={{
            headerShown: false,
            drawerIcon: () => (
              <View>
                <Image
                  source={Images.categorydrawer}
                  style={{height: 20, width: 20, tintColor: '#FFF'}}
                />
              </View>
            ),
            drawerLabel: () => <Text style={styles.txt}>Category</Text>,
          }}
        />
        <Drawer.Screen
          name="cart"
          component={Another}
          options={{
            headerShown: false,
            drawerIcon: () => (
              <View>
                <Image
                  source={Images.categorydrawer}
                  style={{height: 20, width: 20, tintColor: '#FFF'}}
                />
              </View>
            ),
            drawerLabel: () => <Text style={styles.txt}>Cart</Text>,
          }}
        />
      </Drawer.Navigator>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    backgroundColor: 'transparent',
  },
  absolute: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  },
  txt: {
    color: '#DEDEDE',
    fontSize: 13,
    marginLeft: '-14%',
  },
});

export default DrawerNavigation;
