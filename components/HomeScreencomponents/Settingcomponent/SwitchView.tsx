import {StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import {Switch} from 'react-native-switch';

type setting = {
  title: string;
  body: string;
};

const SwitchView = ({title, body}: setting) => {
  const [value, setValue] = useState(false);

  return (
    <View style={styles.wrapper}>
      <Text style={{fontWeight: 'bold', color: '#352641', fontSize: 18}}>
        {title}
      </Text>
      <View style={styles.row}>
        <Text style={{color: '#757575', fontSize: 14, width: '75%'}}>
          {body}
        </Text>
        <View style={styles.container}>
          <Switch
            value={value}
            onValueChange={val => setValue(val)}
            disabled={false}
            circleSize={20}
            barHeight={23}
            circleBorderWidth={0}
            backgroundActive={'#FFF'}
            backgroundInactive={'#FFF'}
            circleActiveColor={'#FA4248'}
            circleInActiveColor={'#E8E8E8'}
            changeValueImmediately={true}
            renderActiveText={false}
            renderInActiveText={false}
            switchLeftPx={2}
            switchRightPx={1.8}
            switchWidthMultiplier={2.25}
            switchBorderRadius={20}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    paddingBottom: '13%',
  },
  container: {
    elevation: 10,
    shadowColor: '#757575',
    borderRadius: 20,
    height: 33,
    width: 55,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: '4%',
  },
});

export default SwitchView;
