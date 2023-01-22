import {Dimensions} from 'react-native';

export const useDimentions = () => {
  const entireScreenWidth = Dimensions.get('window').width;
  const entireScreenHeight = Dimensions.get('window').height;

  const vw = entireScreenWidth * 0.01;
  const vh = entireScreenHeight * 0.01;

  return {vw, vh};
};
