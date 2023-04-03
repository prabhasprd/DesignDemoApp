import React from 'react';
import {SafeAreaView, Text, View, TouchableOpacity, Image} from 'react-native';
import {
  moderateVerticalScale,
  screenDimension,
  moderateScale,
  scale,
  verticalScale,
} from '../../util';
import {COLORS} from '../../util/colors';

const Header = ({leftButton, rightButton, middleText, style = {}}) => {
  const {height, width} = screenDimension;
  console.log('leftButton', leftButton);
  return (
    <SafeAreaView style={style}>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          width: width * 0.85,
          alignSelf: 'center',
          justifyContent: 'space-between',
          marginTop: moderateVerticalScale(30),
        }}>
        {Boolean(Object.values(leftButton).length) && (
          <TouchableOpacity
            activeOpacity={0.6}
            onPress={leftButton?.onPress}
            style={{
              height: moderateVerticalScale(50),
              width: moderateVerticalScale(50),
              borderRadius: moderateVerticalScale(25),
              backgroundColor: COLORS.generalColor.white,
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <Image source={leftButton.image} />
          </TouchableOpacity>
        )}

        {Boolean(Object.values(rightButton).length) && (
          <TouchableOpacity
            activeOpacity={0.6}
            onPress={rightButton?.onPress}
            style={{
              height: moderateVerticalScale(50),
              width: moderateVerticalScale(50),
              borderRadius: moderateVerticalScale(25),
              backgroundColor: COLORS.generalColor.white,
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <Image source={rightButton?.image} />
          </TouchableOpacity>
        )}
      </View>
    </SafeAreaView>
  );
};

export default Header;
