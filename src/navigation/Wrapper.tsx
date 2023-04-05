import React, {useEffect, useState} from 'react';
import {BackHandler, Appearance} from 'react-native';
import {useDispatch} from 'react-redux';
import CustomStackNavigator from './CustomStackNavigator';
import * as RNLocalize from 'react-native-localize';
import {systemLanguage, systemTheme} from '../redux/action/appconfig';
import {languageData} from '../util/language/index';
import {darkThemeColor, lightThemeColor} from '../util/colors';
import {ReduxDispatch} from '../redux/store/type';
import {AppProps, ColorSchemaType} from './type';

const Wrapper = () => {
  const [theme, setTheme] = useState<AppProps['theme']>(lightThemeColor);
  const dispatch: ReduxDispatch = useDispatch();

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

  function onThemeChange({colorScheme}: ColorSchemaType): void {
    const selectTheme =
      colorScheme === 'dark' ? lightThemeColor : darkThemeColor;
    setTheme(selectTheme);
    dispatch(systemTheme(selectTheme));
  }

  useEffect(() => {
    onHandleChangeLanguage();
    RNLocalize.addEventListener('change', () => {
      onHandleChangeLanguage();
    });
    RNLocalize.removeEventListener('change', () => onHandleChangeLanguage);
  }, []);

  useEffect(() => {
    const colorScheme = Appearance.getColorScheme();
    onThemeChange({colorScheme});
    const AppearanceListener = Appearance.addChangeListener(onThemeChange);
    return () => {
      AppearanceListener.remove();
    };
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
  return <CustomStackNavigator theme={theme} />;
};

export default Wrapper;
