import React, {useState} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import MultiSlider from '@ptomasroos/react-native-multi-slider';

const CustomMarker = ({currentValue}: {currentValue: number}) => {
  return (
    <View style={styles.customMarkerContainer}>
      <View style={styles.markerLabelContainer}>
        <Text style={styles.markerLabelText}>${currentValue}</Text>

        <View style={styles.triangle} />
      </View>

      <View style={styles.outerCircle}>
        <View style={styles.innerCircle} />
      </View>
    </View>
  );
};

const Seekbar = () => {
  const [sliderValues, setSliderValues] = useState<number[]>([120, 1200]);

  const onValuesChange = (values: number[]) => {
    if (values.length === 2) {
      setSliderValues(values);
    }
  };

  return (
    <View style={styles.container}>
      <MultiSlider
        values={sliderValues}
        sliderLength={280}
        onValuesChange={onValuesChange}
        min={0}
        max={1500}
        step={10}
        allowOverlap={false}
        snapped={true}
        customMarker={e => <CustomMarker currentValue={e.currentValue} />}
        selectedStyle={styles.selectedStyle}
        trackStyle={styles.trackStyle}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    marginTop: 20,
  },
  label: {
    fontSize: 16,
    marginBottom: 20,
    color: 'black',
  },
  selectedStyle: {
    backgroundColor: '#FA4248',
  },
  trackStyle: {
    height: 4,
    borderRadius: 2,
    backgroundColor: '#C0C0C0',
  },

  customMarkerContainer: {
    alignItems: 'center',
  },
  markerLabelContainer: {
    backgroundColor: '#FA4248',
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 15,
    position: 'absolute',
    top: -35,
    alignItems: 'center',
    height: 26,
    width: 54,
  },
  markerLabelText: {
    color: 'white',
    fontSize: 12,
  },

  triangle: {
    width: 0,
    height: 0,
    borderLeftWidth: 5,
    borderRightWidth: 5,
    borderTopWidth: 5,
    borderStyle: 'solid',
    backgroundColor: 'transparent',
    borderLeftColor: 'transparent',
    borderRightColor: 'transparent',
    borderTopColor: '#FA4248',
    position: 'absolute',
    bottom: -5,
  },

  circleMarker: {
    height: 20,
    width: 20,
    borderRadius: 10,
    backgroundColor: '#FA4248',
    borderWidth: 2,
    borderColor: '#fff',
    position: 'relative',
    top: 8,
  },

  outerCircle: {
    height: 24,
    width: 24,
    borderRadius: 12,
    borderWidth: 2,
    borderColor: 'red',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'transparent',
  },

  innerCircle: {
    height: 14,
    width: 14,
    borderRadius: 10,
    backgroundColor: 'red',
  },
});

export default Seekbar;
