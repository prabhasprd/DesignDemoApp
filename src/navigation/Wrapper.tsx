import React, {useEffect} from 'react';
import {BackHandler} from 'react-native';
import {useDispatch} from 'react-redux';
import Router from './Router';
import * as RNLocalize from 'react-native-localize';
import {systemLanguage} from '../redux/action/appconfig';
import {languageData} from '../util/language/index';

const Wrapper = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    const backAction = () => {
      return true;
    };
    const backHandler = BackHandler.addEventListener(
      'hardwareBackPress',
      backAction,
    );
    return () => backHandler.remove();
  }, []);

  useEffect(() => {
    onHandleChangeLanguage();
    RNLocalize.addEventListener('change', () => {
      onHandleChangeLanguage();
    });
    RNLocalize.removeEventListener('change', () => onHandleChangeLanguage);
  }, []);

  const onHandleChangeLanguage = () => {
    const retriveLanguage = RNLocalize.getLocales();
    const language = Boolean(retriveLanguage.length)
      ? retriveLanguage[0].languageTag.replace('-', '_')
      : 'en_US';
    console.log(
      'languageData',
      Boolean(languageData[language])
        ? languageData[language]
        : languageData.en_US,
    );

    dispatch(
      systemLanguage(
        Boolean(languageData[language])
          ? languageData[language]
          : languageData.en_US,
      ),
    );
  };
  return <Router />;
};

export default Wrapper;
