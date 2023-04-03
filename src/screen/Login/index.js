import {Button, SafeAreaView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {useAuth0} from 'react-native-auth0';

const Login = () => {
  const {authorize, clearSession, user, getCredentials, error} = useAuth0();

  const onLogin = async () => {
    try {
      await authorize();
    } catch (e) {
      console.log(e);
    }
  };

  // const onLogin = async () => {
  //   await authorize({scope: 'openid profile email'});
  //   const {accessToken} = await getCredentials();
  //   Alert.alert('AccessToken: ' + accessToken);
  // };

  const loggedIn = user !== undefined && user !== null;

  const onLogout = async () => {
    await clearSession({federated: true}, {localStorageOnly: false});
  };

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
        {user && <Text>You are logged in as {user.name}</Text>}
        {!user && <Text>You are not logged in</Text>}
        <Button
          onPress={loggedIn ? onLogout : onLogin}
          title={loggedIn ? 'Log Out' : 'Log In'}
        />
        {error && (
          <Text style={{margin: 20, textAlign: 'center', color: '#D8000C'}}>
            {error.message}
          </Text>
        )}
      </View>
    </SafeAreaView>
  );
};

export default Login;
