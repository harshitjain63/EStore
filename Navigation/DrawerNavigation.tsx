import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';

import CategoryNavigation from './CategoryNavigation';
import NewNavigation from './NewNavigation';

const Drawer = createDrawerNavigator();

const DrawerNavigation = () => {
  return (
    <Drawer.Navigator initialRouteName="MainTabs">
      <Drawer.Screen
        name="Discover"
        component={NewNavigation}
        options={{headerShown: false}}
      />

      <Drawer.Screen
        name="categories"
        component={CategoryNavigation}
        options={{headerShown: false}}
      />
    </Drawer.Navigator>
  );
};

export default DrawerNavigation;
