import React from 'react';
import Login from './Login';
import Signup from './Signup';
import Create1character from './createAvatar/create1character';
import Create2backpack from './createAvatar/create2backpack';
import Create3interest from './createAvatar/create3interest';
import Create4goals from './createAvatar/create4goals';
import MainNavigator from './MainNavigator';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
const Stack = createNativeStackNavigator();

export const AuthNavigator = () => {
    return (
      <Stack.Navigator initialRouteName="Login" screenOptions={{headerShown: false}}>
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Signup" component={Signup} />
        <Stack.Screen name="Create1character" component={Create1character} />
        <Stack.Screen name="Create2backpack" component={Create2backpack} />
        <Stack.Screen name="Create3interest" component={Create3interest} />
        <Stack.Screen name="Create4goals" component={Create4goals} />
        <Stack.Screen name="MainNavigator" component={MainNavigator} />
      </Stack.Navigator>
    );
  };
  