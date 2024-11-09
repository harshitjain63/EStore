import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import Filter from '../components/HomeScreencomponents/Discovercomponent/Filter';
import Discover from '../components/HomeScreencomponents/Discover';
import Search from '../components/HomeScreencomponents/Discovercomponent/Search';
import SearchResult from '../components/HomeScreencomponents/Discovercomponent/SearchResult';
import Another from '../components/HomeScreencomponents/Another';

export type NewNavParams = {
  DiscoverHome: undefined;
  Search: undefined;
  Searchresult: undefined;
  Filter: undefined;
  cart: undefined;
};

const stack = createNativeStackNavigator<NewNavParams>();

const NewNavigation = () => {
  return (
    <stack.Navigator
      screenOptions={{
        animation: 'slide_from_right',
      }}>
      <stack.Screen
        options={{headerShown: false}}
        name="DiscoverHome"
        component={Discover}
      />

      <stack.Screen
        options={{headerShown: false}}
        name="Search"
        component={Search}
      />
      <stack.Screen
        options={{headerShown: false}}
        name="Searchresult"
        component={SearchResult}
      />

      <stack.Screen
        options={{
          headerShown: false,
        }}
        name="Filter"
        component={Filter}
      />

      <stack.Screen
        options={{
          headerShown: false,
        }}
        name="cart"
        component={Another}
      />
    </stack.Navigator>
  );
};

export default NewNavigation;
