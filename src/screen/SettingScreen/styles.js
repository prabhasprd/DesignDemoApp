import {StyleSheet} from 'react-native';
import {COLORS} from '../../util/colors';
import {Dimensions} from 'react-native';
import {moderateVerticalScale, screenDimension} from '../../util';

const {height, width} = screenDimension;

const styles = StyleSheet.create({
  followerValue: {
    fontStyle: 'normal',
    fontWeight: '500',
    fontSize: 17,
    lineHeight: 22,
    color: COLORS.porfileScreenColor.midnightBlue,
  },
  followerText: {
    fontStyle: 'normal',
    fontWeight: '400',
    fontSize: 14,
    lineHeight: 18,
    color: COLORS.porfileScreenColor.midnightBlueLight,
    textShadowColor: COLORS.porfileScreenColor.textShadowColor,
  },
  followingStyle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: width - moderateVerticalScale(80),
    marginTop: -moderateVerticalScale(45),
  },
  profileView: {
    alignItems: 'center',
    marginTop: moderateVerticalScale(20),
  },
  profileName: {
    fontStyle: 'normal',
    fontWeight: '500',
    fontSize: 17,
    lineHeight: 22,
    color: COLORS.porfileScreenColor.midnightBlue,
    textShadowOffset: {width: 10, height: 12},
    textShadowRadius: 12,
    textShadowColor: 'blue',
  },
  profileStatus: {
    fontStyle: 'normal',
    fontWeight: '400',
    fontSize: 14,
    color: 'rgba(37, 57, 111, 0.7)',
    textAlign: 'center',
    marginTop: 5,
    lineHeight: 20,
  },
});
export default styles;
