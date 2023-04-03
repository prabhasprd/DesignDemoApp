import {StyleSheet} from 'react-native';
import {screenDimension, moderateVerticalScale} from '../../util';
import {COLORS} from '../../util/colors';

const {width} = screenDimension;

const styles = StyleSheet.create({
  buttonStyle: {
    flex: 1,
    backgroundColor: COLORS.porfileScreenColor.buttonActiveColor,
    height: moderateVerticalScale(50),
    justifyContent: 'center',
    borderRadius: 100,
    shadowColor: COLORS.generalColor.black,
    shadowOffset: {width: -2, height: 4},
    shadowOpacity: 0.2,
    shadowRadius: 3,
    elevation: 10,
    shadowColor: COLORS.porfileScreenColor.buttonActiveColor,
    borderWidth: 2,
    borderColor: COLORS.porfileScreenColor.buttonActiveColor,
  },
  normalButtonStyle: {
    flex: 1,
    backgroundColor: COLORS.generalColor.white,
    height: moderateVerticalScale(50),
    justifyContent: 'center',
    borderRadius: 100,
    shadowColor: COLORS.generalColor.black,
    shadowOffset: {width: -2, height: 4},
    shadowOpacity: 0.2,
    shadowRadius: 3,
    elevation: 10,
    shadowColor: COLORS.generalColor.black,
    borderWidth: 2,
    borderColor: 'rgba(169, 116, 255, 0.32)',
  },
  textStyle: {
    fontWeight: '500',
    fontSize: 15,
    color: COLORS.generalColor.white,
    textAlign: 'center',
  },
  normalTextStyle: {
    fontWeight: '500',
    fontSize: 15,
    color: COLORS.porfileScreenColor.midnightBlue,
    textAlign: 'center',
  },
});
export default styles;
