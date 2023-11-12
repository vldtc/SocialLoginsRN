import React from 'react';
import {Button, Text, View} from 'react-native';

const LoginScreen = props => {
  return (
    <View>
      <Text>Login screen</Text>
      <Button
        title="Login"
        onPress={() => {
          props.navigation.navigate('Home');
        }}
      />
    </View>
  );
};

export default LoginScreen;
