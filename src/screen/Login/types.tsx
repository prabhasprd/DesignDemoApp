import {
  NavigationProp,
  ParamListBase,
  RouteProp,
} from '@react-navigation/native';
import {lightThemeColor} from '../../util/colors';
import {StyleProp, ViewStyle} from 'react-native';

export type LoginProps = {
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
