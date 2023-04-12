import React, {useEffect, useState} from 'react';
import {BackHandler, AppState} from 'react-native';
import {useDispatch} from 'react-redux';
import CustomStackNavigator from './CustomStackNavigator';
import * as RNLocalize from 'react-native-localize';
import {systemLanguage, systemTheme} from '../redux/action/appconfig';
import {languageData} from '../util/language/index';
import {darkThemeColor, lightThemeColor} from '../util/colors';
import {ReduxDispatch} from '../redux/store/type';
import {ColorSchemaType} from './type';
import useThemeSelector from 'rn-theme-ss/src/useThemeSelector';

const Wrapper = () => {
  const dispatch: ReduxDispatch = useDispatch();
  const selectedTheme: ColorSchemaType['colorScheme'] = useThemeSelector();

  const activeTheme: typeof darkThemeColor =
    selectedTheme === 'dark' ? darkThemeColor : lightThemeColor;

  dispatch(systemTheme(activeTheme));

  useEffect(() => {
    const backAction = (): boolean => {
      return true;
    };
    const backHandler = BackHandler.addEventListener(
      'hardwareBackPress',
      backAction,
    );
    return (): void => backHandler.remove();
  }, []);

  useEffect(() => {
    onHandleChangeLanguage();
    RNLocalize.addEventListener('change', () => {
      onHandleChangeLanguage();
    });
    RNLocalize.removeEventListener('change', () => onHandleChangeLanguage);
  }, []);

  const onHandleChangeLanguage = (): void => {
    const retriveLanguage = RNLocalize.getLocales();
    const language: string = Boolean(retriveLanguage.length)
      ? retriveLanguage[0].languageTag.replace('-', '_')
      : 'en_US';

    dispatch(
      systemLanguage(
        Boolean(languageData[language])
          ? languageData[language]
          : languageData.en_US,
      ),
    );
  };
  return <CustomStackNavigator />;
};

export default Wrapper;
