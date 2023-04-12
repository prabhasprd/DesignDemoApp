import {SafeAreaView, TouchableOpacity, Text} from 'react-native';
import React, {useEffect, FC} from 'react';
import CustomIcon from '../../component/CustomIcon/CustomIcon';
import {darkThemeColor, lightThemeColor} from '../../util/colors';
import {Props} from './types';
import useThemeSelector from 'rn-theme-ss/src/useThemeSelector';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Login = (props: any) => {
  const {navigation} = props;
  const selectedTheme = useThemeSelector();
  const activeTheme: typeof darkThemeColor =
    selectedTheme === 'dark' ? darkThemeColor : lightThemeColor;

  const onHandleNavigate = (): void => {
    navigation.navigate('BottomTabRouter');
  };

  return (
    <SafeAreaView
      style={{
        alignItems: 'center',
        height: '100%',
        justifyContent: 'center',
        backgroundColor: activeTheme.LOGIN_SCREEN.backgroundColor,
      }}>
      <Text
        style={{
          fontSize: 20,
          textAlign: 'center',
          margin: 10,
          color: activeTheme.LOGIN_SCREEN.textColor,
        }}>
        Auth0Sample - Navigation App Text
      </Text>
      <TouchableOpacity
        onPress={onHandleNavigate}
        style={{
          width: '100%',
          height: 40,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <CustomIcon
          name="android"
          color={activeTheme.LOGIN_SCREEN.iconColor}
          size={20}
        />
        <Text
          style={{
            fontSize: 20,
            color: activeTheme.LOGIN_SCREEN.textColor,
          }}>
          Navigation Screen
        </Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default Login;
