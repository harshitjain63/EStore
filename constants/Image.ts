import {ImageSourcePropType} from 'react-native';

type ImageProp = {
  // eslint-disable-next-line @typescript-eslint/no-require-imports
  ushericon: ImageSourcePropType;
  // eslint-disable-next-line @typescript-eslint/no-require-imports
  arrowicon: ImageSourcePropType;
  // eslint-disable-next-line @typescript-eslint/no-require-imports
  facebookicon: ImageSourcePropType;
  // eslint-disable-next-line @typescript-eslint/no-require-imports
  googleicon: ImageSourcePropType;
};
export const Images: ImageProp = {
  // eslint-disable-next-line @typescript-eslint/no-require-imports
  ushericon: require('../assets/usher.png'),
  // eslint-disable-next-line @typescript-eslint/no-require-imports
  arrowicon: require('../assets/arrow-right.png'),
  // eslint-disable-next-line @typescript-eslint/no-require-imports
  facebookicon: require('../assets/facebook.png'),
  // eslint-disable-next-line @typescript-eslint/no-require-imports
  googleicon: require('../assets/search.png'),
};
