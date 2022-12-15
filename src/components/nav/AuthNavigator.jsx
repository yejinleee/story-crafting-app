import React from 'react';
import Login from '../pages/Login';
import Signup from '../pages/Signup';
import Create1character from '../pages/createAvatar/CreateAvatar';
import Create2backpack from '../pages/createAvatar/CreateQ1';
import Create3interest from '../pages/createAvatar/CreateQ3';
import Create4goals from '../pages/createAvatar/CreateQ2';
import MainNavigator from './MainNavigator';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { AvatarNavigator } from './AvatarNavigator';
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
        <Stack.Screen name="AvatarNavigator" component={AvatarNavigator} />
      </Stack.Navigator>
    );
  };
  