import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Login from '../screen/Login';
import BottomTabRouter from '../navigation/BottomTabRouter';
import {AppProps} from './type';

const StackComponent = createNativeStackNavigator();

const stackScreen = [
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

const CustomStackNavigator = (props: AppProps) => {
  return (
    <NavigationContainer>
      <StackComponent.Navigator
        initialRouteName="Login"
        screenOptions={{
          headerShown: false,
        }}>
        {stackScreen.map((element, index) => (
          <StackComponent.Screen name={element.name} key={index}>
            {navigation => <element.component {...props} {...navigation} />}
          </StackComponent.Screen>
        ))}
      </StackComponent.Navigator>
    </NavigationContainer>
  );
};

export default CustomStackNavigator;
