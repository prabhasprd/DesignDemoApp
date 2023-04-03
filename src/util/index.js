import {Dimensions} from 'react-native';
// import {} from '../assets/font/';
const {width, height} = Dimensions.get('window');

const [shortDimension, longDimension] =
  width < height ? [width, height] : [height, width];

const guidelineBaseWidth = 350;
const guidelineBaseHeight = 680;

export const screenDimension = {height, width};

export const scale = size =>
  Math.round((shortDimension / guidelineBaseWidth) * size);
export const verticalScale = size =>
  Math.round((longDimension / guidelineBaseHeight) * size);
export const moderateScale = (size, factor = 0.5) =>
  Math.round(size + (scale(size) - size) * factor);
export const moderateVerticalScale = (size, factor = 0.5) =>
  Math.round(size + (verticalScale(size) - size) * factor);
