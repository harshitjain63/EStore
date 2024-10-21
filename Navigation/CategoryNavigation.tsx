import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import SelectedCategory from '../components/HomeScreencomponents/Discovercomponent/SelectedCategory';
import Category from '../components/HomeScreencomponents/Discovercomponent/Category';

export type CategoryNavParams = {
  category: undefined;
  selectedcategory: {name: string};
};

const stack = createNativeStackNavigator<CategoryNavParams>();

const CategoryNavigation = () => {
  return (
    <stack.Navigator
      screenOptions={{
        animation: 'slide_from_right',
      }}>
      <stack.Screen
        options={{headerShown: false}}
        name="category"
        component={Category}
      />

      <stack.Screen
        options={{headerShown: false}}
        name="selectedcategory"
        component={SelectedCategory}
      />
    </stack.Navigator>
  );
};

export default CategoryNavigation;
