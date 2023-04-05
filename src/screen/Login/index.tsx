import {
  SafeAreaView,
  TouchableOpacity,
  Text,
  View,
  StyleProp,
  ViewStyle,
} from 'react-native';
import React from 'react';
import {lightThemeColor} from '../../util/colors';
import {
  NavigationProp,
  ParamListBase,
  RouteProp,
} from '@react-navigation/native';
import CustomIcon from '../../component/CustomIcon/CustomIcon';

type LoginProps = {
  focused?: boolean;
  modal?: boolean;
  navigation: NavigationProp<ParamListBase>;
  route: RouteProp<ParamListBase>;
  header?: React.ReactNode;
  headerShown?: boolean;
  headerStatusBarHeight?: number;
  headerTransparent?: boolean;
  style?: StyleProp<ViewStyle>;
  children?: React.ReactNode;
  theme: typeof lightThemeColor;
};

const Login = (props: LoginProps) => {
  const {navigation} = props;

  const onHandleNavigate = (): void => {
    navigation.navigate('BottomTabRouter');
  };

  return (
    <SafeAreaView
      style={{alignItems: 'center', height: '100%', justifyContent: 'center'}}>
      <Text style={{fontSize: 20, textAlign: 'center', margin: 10}}>
        Auth0Sample - Navigation App
      </Text>
      <CustomIcon name="android" />
      <TouchableOpacity
        onPress={onHandleNavigate}
        style={{
          width: '100%',
          height: 40,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <Text>Navigation Screen</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default Login;
