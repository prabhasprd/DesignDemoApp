import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import Login from '../screen/Login';
import BottomTabRouter from '../navigation/BottomTabRouter';
import {AppProps} from './type';
import StackNavigator from 'rn-theme-ss/src/navigation/stack';

export interface StackProps {
  stackScreenList: {
    name: string;
    component: React.FC<AppProps>;
    isBottomTab?: boolean;
  }[];
}

const stackScreen: StackProps['stackScreenList'] = [
  {
    name: 'Login',
    component: Login,
  },
  {
    name: 'BottomTabRouter',
    component: BottomTabRouter,
    isBottomTab: true,
  },
];

const CustomStackNavigator = () => {
  return (
    <NavigationContainer>
      <StackNavigator
        stackScreenList={stackScreen}
        screenOptions={{headerShown: false}}
      />
    </NavigationContainer>
  );
};

export default CustomStackNavigator;
