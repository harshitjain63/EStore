import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Another from '../components/HomeScreencomponents/Another';
import Checkout from '../components/HomeScreencomponents/Anothercomponents/Checkout';
import OrderAccepted from '../components/HomeScreencomponents/Anothercomponents/Checkoutsubcomponents/OrderAccepted';
import MapView from '../components/HomeScreencomponents/Anothercomponents/Checkoutsubcomponents/MapView';

export type AnotherNavParams = {
  Another: undefined;
  Checkout: undefined;
  Orderaccepted: undefined;
  map: undefined;
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
      <stack.Screen
        options={{headerShown: false}}
        name="Orderaccepted"
        component={OrderAccepted}
      />
      <stack.Screen
        options={{headerShown: false}}
        name="map"
        component={MapView}
      />
    </stack.Navigator>
  );
};

export default AnotherNavigation;
