import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import Address from './Checkoutsubcomponents/Address';
import Header from './Checkoutsubcomponents/Header';
import {Images} from '../../../constants/Image';
import {SafeAreaView} from 'react-native-safe-area-context';
import Payments from './Checkoutsubcomponents/Payments';
import Summary from './Checkoutsubcomponents/Summary';
import StepIndicator from 'react-native-step-indicator';
import {useNavigation, NavigationProp} from '@react-navigation/native';
import {AnotherNavParams} from '../../../Navigation/AnotherNavigation';

const steps = [
  {id: 1, label: 'Address'},
  {id: 2, label: 'Payments'},
  {id: 3, label: 'Summary'},
];

const customStyles = {
  stepIndicatorSize: 30,
  separatorStrokeWidth: 2,
  stepStrokeWidth: 1,
  currentStepStrokeWidth: 1,
  stepStrokeCurrentColor: '#FA4248',
  stepStrokeFinishedColor: '#FA4248',
  stepStrokeUnFinishedColor: '#aaaaaa',
  separatorFinishedColor: '#FA4248',
  separatorUnFinishedColor: '#aaaaaa',
  stepIndicatorFinishedColor: '#fff',
  stepIndicatorUnFinishedColor: '#fff',
  labelColor: '#bbb',
  currentStepLabelColor: '#000',
};

const Checkout = () => {
  const startingimage = Images.menuicon;
  const text = 'Checkout';
  const endingimage = Images.searchicon;
  const [step, setStep] = useState<number>(0);
  const navigation = useNavigation<NavigationProp<AnotherNavParams>>();

  const handleNext = () => {
    if (step === 2) {
      navigation.navigate('Orderaccepted');
    } else if (step < 2) {
      setStep(step + 1);
    }
  };

  const handleBack = () => {
    if (step > 0) {
      setStep(step - 1);
    }
  };

  const renderStepContent = () => {
    switch (step) {
      case 0:
        return <Address />;
      case 1:
        return <Payments />;
      case 2:
        return <Summary />;
      default:
        return <Address />;
    }
  };

  const nextButtonText = step === 2 ? 'Pay' : 'Next';

  return (
    <SafeAreaView style={styles.container}>
      <Header
        startingimage={startingimage}
        text={text}
        endingimage={endingimage}
      />

      <StepIndicator
        currentPosition={step}
        labels={steps.map(step => step.label)} // steps.map(step => step.label): The steps array holds objects for each step, such as {id: 1, label: 'Address'}. This map() function creates an array of just the label values, which will be ['Address', 'Payments', 'Summary'].
        stepCount={3}
        onPress={(position: number) => setStep(position)}
        customStyles={customStyles}
        renderStepIndicator={({position}) => {
          if (position <= step) {
            return (
              <View
                style={{
                  width: 20,
                  height: 20,
                  borderRadius: 10,
                  backgroundColor: '#FA4248',
                }}
              />
            );
          } else {
            return <View />;
          }
        }}
      />
      <ScrollView>{renderStepContent()}</ScrollView>

      <View style={styles.row}>
        <TouchableOpacity
          onPress={() => handleBack()}
          style={styles.backButton}>
          <Text style={styles.backButtonText}>BACK</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => handleNext()}
          style={styles.nextButton}>
          <Text style={styles.nextButtonText}>{nextButtonText}</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: '8%',
    marginTop: '2%',
    paddingBottom: '8%',
  },
  backButton: {
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: '#FA4248',
    height: 43,
    width: '43%',
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
  },
  backButtonText: {
    fontWeight: 'bold',
    fontSize: 15,
    color: '#000000',
  },
  nextButton: {
    backgroundColor: '#FA4248',
    height: 43,
    width: '43%',
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
  },
  nextButtonText: {
    fontWeight: 'bold',
    fontSize: 15,
    color: '#FFFFFF',
  },
});

export default Checkout;
