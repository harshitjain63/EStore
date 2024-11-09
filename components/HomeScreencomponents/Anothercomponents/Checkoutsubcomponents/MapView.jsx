import React from 'react';
import MapplsGL from 'mappls-map-react-native';
import {View} from 'react-native';
import Header from './Mapviewcomponent/Header';
import Footer from './Mapviewcomponent/Footer';
import ShippedDetail from './Mapviewcomponent/ShippedDetail';

MapplsGL.setMapSDKKey('491e54a1396810fa97b0b3a4c5749623'); // Replace with your Map SDK Key
MapplsGL.setRestAPIKey('491e54a1396810fa97b0b3a4c5749623'); // Replace with your REST API Key
MapplsGL.setAtlasClientId(
  '96dHZVzsAut3gY9Mp3eAt35lAiSQvRiRyzK3TisNGtmgOwiISe9nBPXV9d8nhSWXvq48r0AdD2ow0s7r8i4Sbg==',
); // Replace with your Atlas Client ID
MapplsGL.setAtlasClientSecret(
  'lrFxI-iSEg_Yuvv9yJjjs1a2Hz23Ex5DAUo_lx8iodRL1eJ0dpfIZQENWP9OrfHB1fBgZZW_4QkwMpmd5h7agCCMYi5BLMbn',
); // Replace with your Atlas Client Secret

const MapView = () => {
  return (
    <View style={{flex: 1}}>
      <View
        style={{
          width: '100%',
          height: '13%',
          position: 'absolute',
          opacity: 0.5,
          marginTop: '50%',
          zIndex: 1,
        }}></View>

      <Header />
      <ShippedDetail />

      <MapplsGL.MapView
        style={{flex: 1}}
        // onMapError={error => console.log(error.code + ' ' + error.message)}
      >
        <MapplsGL.Camera zoomLevel={12} centerCoordinate={[80.4632, 28.0752]} />

        <MapplsGL.PointAnnotation id="marker1" coordinate={[80.4632, 28.0752]}>
          <View
            style={{
              height: 30,
              width: 30,
              backgroundColor: 'red',
              borderRadius: 15,
              borderWidth: 2,
              borderColor: 'white',
            }}
          />
        </MapplsGL.PointAnnotation>

        <MapplsGL.ShapeSource
          id="lineSource"
          shape={{
            type: 'Feature',
            geometry: {
              type: 'LineString',
              coordinates: [
                [80.4632, 28.075],
                [80.4732, 28.0852],
                [80.4832, 28.0959],
              ],
            },
          }}>
          <MapplsGL.LineLayer
            id="lineLayer"
            style={{
              lineColor: 'red',
              lineWidth: 4,
            }}
          />
        </MapplsGL.ShapeSource>
      </MapplsGL.MapView>
      <Footer />
    </View>
  );
};

export default MapView;
