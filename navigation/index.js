import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {LoginScreen, HomeScreen} from '../screens';
import {useSelector} from 'react-redux';

const Stack = createNativeStackNavigator();

const authStack = () => {
  return (
    <Stack.Group>
      <Stack.Screen
        name="Login"
        component={LoginScreen}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Group>
  );
};

const mainStack = () => {
  return (
    <Stack.Group>
      <Stack.Screen name="Home" component={HomeScreen} />
    </Stack.Group>
  );
};

const Navigation = () => {
  const isUserLoggedIn = useSelector(state => state.login.isUserLoggedIn);
  return (
    <Stack.Navigator>
      {isUserLoggedIn ? mainStack() : authStack()}
    </Stack.Navigator>
  );
};

export default Navigation;
