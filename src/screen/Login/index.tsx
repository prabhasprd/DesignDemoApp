import {SafeAreaView, TouchableOpacity, Text} from 'react-native';
import React from 'react';
import CustomIcon from '../../component/CustomIcon/CustomIcon';
import {LoginProps} from './types';

const Login = (props: LoginProps) => {
  const {navigation} = props;

  const onHandleNavigate = (): void => {
    navigation.navigate('BottomTabRouter');
  };

  return (
    <SafeAreaView
      style={{alignItems: 'center', height: '100%', justifyContent: 'center'}}>
      <Text
        style={{
          fontSize: 20,
          textAlign: 'center',
          margin: 10,
        }}>
        Auth0Sample - Navigation App Text
      </Text>
      <TouchableOpacity
        onPress={onHandleNavigate}
        style={{
          width: '100%',
          height: 40,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <CustomIcon name="android" />
        <Text>Navigation Screen</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default Login;
