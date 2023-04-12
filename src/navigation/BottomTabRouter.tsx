import * as React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Home from '../screen/HomeScreen/Home';
import ProfileScreen from '../screen/ProfileScreen/Profile';
import Account from '../screen/AccountScreen/Account';
import {AppProps} from './type';
import BottomTabRouterApp from 'rn-theme-ss/src/navigation/BottonTab';
import {View, Text} from 'react-native';
import {darkThemeColor, lightThemeColor} from '../util/colors';

const Tab = createBottomTabNavigator();
const BottomTabRouter = (props: AppProps) => {
  const {theme} = props;

  const bottomBar = [
    {
      label: 'Account',
      tabBarLabel: 'Account',
      component: Account,
      tabBarLabelStyle: {fontSize: 14},
      tabBarActiveTintColor: lightThemeColor?.BOTTOM_BAR?.tabBarActiveTintColor,
      tabBarDisableTintColor:
        lightThemeColor?.BOTTOM_BAR?.tabBarDisableTintColor,
      focusedIcon: (
        <Icon
          name={'account-circle'}
          size={30}
          color={lightThemeColor?.BOTTOM_BAR?.tabBarActiveTintColor}
        />
      ),
      unFocusedIcon: (
        <Icon
          name={'account-circle'}
          size={30}
          color={lightThemeColor?.BOTTOM_BAR?.tabBarDisableTintColor}
        />
      ),
    },
    {
      label: 'Home',
      tabBarLabel: 'Home',
      component: Home,
      tabBarLabelStyle: {fontSize: 14},
      tabBarActiveTintColor: lightThemeColor?.BOTTOM_BAR?.tabBarActiveTintColor,
      tabBarDisableTintColor:
        lightThemeColor?.BOTTOM_BAR?.tabBarDisableTintColor,
      focusedIcon: (
        <Icon
          name={'home'}
          size={30}
          color={lightThemeColor?.BOTTOM_BAR?.tabBarActiveTintColor}
        />
      ),
      unFocusedIcon: (
        <Icon
          name={'home'}
          size={30}
          color={lightThemeColor?.BOTTOM_BAR?.tabBarDisableTintColor}
        />
      ),
    },
    {
      label: 'Profile',
      tabBarLabel: 'Profile',
      component: ProfileScreen,
      tabBarLabelStyle: {fontSize: 14},
      tabBarActiveTintColor: lightThemeColor?.BOTTOM_BAR?.tabBarActiveTintColor,
      tabBarDisableTintColor:
        lightThemeColor?.BOTTOM_BAR?.tabBarDisableTintColor,
      focusedIcon: (
        <Icon
          name={'cog-outline'}
          size={30}
          color={lightThemeColor?.BOTTOM_BAR?.tabBarActiveTintColor}
        />
      ),
      unFocusedIcon: (
        <Icon
          name={'cog-outline'}
          size={30}
          color={lightThemeColor?.BOTTOM_BAR?.tabBarDisableTintColor}
        />
      ),
    },
  ];
  return (
    <BottomTabRouterApp
      initialRouteName={'Home'}
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          paddingVertical: 2,
          borderTopLeftRadius: 10,
          borderTopRightRadius: 10,
          shadowColor: lightThemeColor?.BOTTOM_BAR?.tabBarActiveTintColor,
          shadowOpacity: 0.6,
          shadowRadius: 5,
          backgroundColor: lightThemeColor?.BOTTOM_BAR?.backgroundColor,
        },
      }}
      tabScreenList={bottomBar}
    />
  );
};

export default BottomTabRouter;
