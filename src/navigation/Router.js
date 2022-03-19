import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from '../screen/HomeScreen/Home';
import About from '../screen/SettingScreen/Setting';
import Account from '../screen/AccountScreen/Account';
import {NavigationContainer} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const Tab = createBottomTabNavigator();

const Router = () => (
  <NavigationContainer>
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          paddingVertical: 2,
          borderTopLeftRadius: 10,
          borderTopRightRadius: 10,
          shadowColor: '#9c27b0',
          shadowOpacity: 0.6,
          shadowRadius: 5,
        },
      }}>
      <Tab.Screen
        name={'About'}
        options={{
          tabBarLabelStyle: {fontSize: 14},
          tabBarActiveTintColor: '#9c27b0',
          tabBarIcon: ({focused}) => (
            <Icon
              name="cog-outline"
              size={30}
              color={focused ? '#9c27b0' : '#c0c0c0'}
            />
          ),
          tabBarLabel: 'Setting',
        }}
        component={About}
      />
      <Tab.Screen
        name={'Home'}
        options={{
          tabBarActiveTintColor: '#9c27b0',
          tabBarLabelStyle: {fontSize: 14},
          tabBarIcon: ({focused}) => (
            <Icon
              name="home"
              size={30}
              color={focused ? '#9c27b0' : '#c0c0c0'}
            />
          ),
          tabBarLabel: 'Home',
        }}
        component={Home}
      />

      <Tab.Screen
        name={'Setting'}
        options={{
          tabBarLabelStyle: {fontSize: 14},
          tabBarActiveTintColor: '#9c27b0',
          tabBarIcon: ({focused}) => {
            return (
              <Icon
                name="account-circle"
                size={30}
                color={focused ? '#9c27b0' : '#c0c0c0'}
              />
            );
          },
          tabBarLabel: 'Account',
        }}
        component={Account}
      />
    </Tab.Navigator>
  </NavigationContainer>
);

export default Router;
