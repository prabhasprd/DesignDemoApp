import {Button, SafeAreaView, StyleSheet, Text, View} from 'react-native';
import React from 'react';

const Login = () => {
  return (
    <SafeAreaView>
      <View
        style={{
          justifyContent: 'center',
          alignItems: 'center',
          height: '100%',
        }}>
        <Text style={{fontSize: 20, textAlign: 'center', margin: 10}}>
          {' '}
          Auth0Sample - Navigation App{' '}
        </Text>
      </View>
    </SafeAreaView>
  );
};

export default Login;
