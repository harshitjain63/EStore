/* eslint-disable @typescript-eslint/no-require-imports */
import {ImageSourcePropType} from 'react-native';

type ImageProp = {
  ushericon: ImageSourcePropType;
  arrowicon: ImageSourcePropType;
  facebookicon: ImageSourcePropType;
  googleicon: ImageSourcePropType;
  backarrowicon: ImageSourcePropType;
  circleicon: ImageSourcePropType;
  homebottomicon: ImageSourcePropType;
  settingbottomicon: ImageSourcePropType;
  userbottomicon: ImageSourcePropType;
};
export const Images: ImageProp = {
  ushericon: require('../assets/usher.png'),
  arrowicon: require('../assets/arrow-right.png'),
  facebookicon: require('../assets/facebook.png'),
  googleicon: require('../assets/search.png'),
  backarrowicon: require('../assets/chevron.png'),
  circleicon: require('../assets/circle.png'),
  homebottomicon: require('../assets/Bottomnavigateicon/home.png'),
  settingbottomicon: require('../assets/Bottomnavigateicon/settingicon.png'),
  userbottomicon: require('../assets/Bottomnavigateicon/usericon.png'),
};
