import React from 'react';
import {SafeAreaView, Text, View, TouchableOpacity, Image} from 'react-native';
import {
  moderateVerticalScale,
  screenDimension,
  moderateScale,
  scale,
  verticalScale,
} from '../../util';
import {lightThemeColor} from '../../util/colors';
import Icon from 'react-native-vector-icons/AntDesign';
import {Props} from './type';

const Header = (props: Props) => {
  const {leftButton, rightButton, style = {}} = props;

  const {height, width} = screenDimension;
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
              backgroundColor: lightThemeColor.generalColor.white,
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <Image source={rightButton.image} />
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
              backgroundColor: lightThemeColor.generalColor.white,
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <Icon name='logout' size={30} color={'#c0c0c0'} />
          </TouchableOpacity>
        )}
      </View>
    </SafeAreaView>
  );
};

export default Header;
