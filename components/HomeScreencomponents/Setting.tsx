import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import SwitchView from './Settingcomponent/SwitchView';
import Header from './Anothercomponents/Checkoutsubcomponents/Header';
import {Images} from '../../constants/Image';
import {SafeAreaView} from 'react-native-safe-area-context';

const sampleData = [
  {
    id: '1',
    title: 'Notifications',
    body: 'Recieve notifications on latest offers and store updates',
  },
  {
    id: '2',
    title: 'Popups',
    body: 'Recieve notifications on latest offers and store updates',
  },
  {
    id: '3',
    title: 'Order History',
    body: 'Recieve notifications on latest offers and store updates',
  },
];

const Setting = () => {
  const startingimage = Images.menuicon;
  const text = 'Settings';
  const endingimage = Images.searchicon;
  return (
    <SafeAreaView style={styles.container}>
      <Header
        startingimage={startingimage}
        text={text}
        endingimage={endingimage}
      />
      <View style={{paddingHorizontal: '8%', marginTop: '5%'}}>
        <Text
          style={{
            fontWeight: 'bold',
            color: '#757575',
            fontSize: 16,
            paddingBottom: '8%',
          }}>
          Your App Settings
        </Text>

        {sampleData
          ? sampleData.map(item => (
              <SwitchView key={item.id} title={item.title} body={item.body} />
            ))
          : null}
        <TouchableOpacity
          style={{
            backgroundColor: '#FA4248',
            borderRadius: 30,
            width: '100%',
            justifyContent: 'center',
            alignItems: 'center',
            height: '10%',
            marginTop: '2%',
          }}>
          <Text style={{color: 'white', fontWeight: 'bold'}}>
            UPDATE SETTINGS
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFFFFF',
    flex: 1,
  },
});

export default Setting;
