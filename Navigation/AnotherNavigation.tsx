import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Another from '../components/HomeScreencomponents/Another';
import Checkout from '../components/HomeScreencomponents/Anothercomponents/Checkout';

export type AnotherNavParams = {
  Another: undefined;
  Checkout: undefined;
};

const stack = createNativeStackNavigator<AnotherNavParams>();

const AnotherNavigation = () => {
  return (
    <stack.Navigator
      screenOptions={{
        animation: 'slide_from_right',
      }}>
      <stack.Screen
        options={{headerShown: false}}
        name="Another"
        component={Another}
      />
      <stack.Screen
        options={{headerShown: false}}
        name="Checkout"
        component={Checkout}
      />
    </stack.Navigator>
  );
};

export default AnotherNavigation;
