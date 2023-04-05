import * as React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Home from '../screen/HomeScreen/Home';
import ProfileScreen from '../screen/ProfileScreen/Profile';
import Account from '../screen/AccountScreen/Account';
import {AppProps} from './type';

const Tab = createBottomTabNavigator();
const BottomTabRouter = (props: AppProps) => {
  const {theme} = props;

  const bottomBar = [
    {
      label: 'Account',
      tabBarLabel: 'Account',
      component: Account,
      tabBarLabelStyle: {fontSize: 14},
      tabBarActiveTintColor: theme?.BOTTOM_BAR?.tabBarActiveTintColor,
      tabBarDisableTintColor: theme?.BOTTOM_BAR?.tabBarDisableTintColor,
      icon: {
        name: 'account-circle',
        size: 30,
      },
    },
    {
      label: 'Home',
      tabBarLabel: 'Home',
      component: Home,
      tabBarLabelStyle: {fontSize: 14},
      tabBarActiveTintColor: theme?.BOTTOM_BAR?.tabBarActiveTintColor,
      tabBarDisableTintColor: theme?.BOTTOM_BAR?.tabBarDisableTintColor,
      icon: {
        name: 'home',
        size: 30,
      },
    },
    {
      label: 'Profile',
      tabBarLabel: 'Profile',
      component: ProfileScreen,
      tabBarLabelStyle: {fontSize: 14},
      tabBarActiveTintColor: theme?.BOTTOM_BAR?.tabBarActiveTintColor,
      tabBarDisableTintColor: theme?.BOTTOM_BAR?.tabBarDisableTintColor,
      icon: {
        name: 'cog-outline',
        size: 30,
      },
    },
  ];
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          paddingVertical: 2,
          borderTopLeftRadius: 10,
          borderTopRightRadius: 10,
          shadowColor: theme?.BOTTOM_BAR?.tabBarActiveTintColor,
          shadowOpacity: 0.6,
          shadowRadius: 5,
          backgroundColor: theme?.BOTTOM_BAR?.backgroundColor,
        },
      }}>
      {bottomBar.map((item, index) => {
        return (
          <Tab.Screen
            key={index}
            name={item.label}
            options={{
              tabBarLabelStyle: item.tabBarLabelStyle,
              tabBarActiveTintColor: item.tabBarActiveTintColor,
              tabBarIcon: ({focused}) => (
                <Icon
                  name={item.icon.name}
                  size={item.icon.size}
                  color={
                    focused
                      ? item.tabBarActiveTintColor
                      : item.tabBarDisableTintColor
                  }
                />
              ),
              tabBarLabel: item.tabBarLabel,
            }}
            component={item.component}
          />
        );
      })}
    </Tab.Navigator>
  );
};

export default BottomTabRouter;
