import React from 'react';
import CreateAvatar from '../pages/createAvatar/CreateAvatar';
import CreateQ1 from '../pages/createAvatar/CreateQ1';
import CreateQ2 from '../pages/createAvatar/CreateQ2';
import CreateQ3 from '../pages/createAvatar/CreateQ3';
import MainNavigator from './MainNavigator';
import CreateYouravatar from '../pages/createAvatar/CreateYouravatar';

import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

export const AvatarNavigator = () => {
    return (
      <Stack.Navigator initialRouteName="CreateAvatar" screenOptions={{headerShown: false}}>
        <Stack.Screen name="CreateAvatar" component={CreateAvatar} />
        <Stack.Screen name="CreateQ1" component={CreateQ1} />
        <Stack.Screen name="CreateQ2" component={CreateQ2} />
        <Stack.Screen name="CreateQ3" component={CreateQ3} />
        <Stack.Screen name="CreateYouravatar" component={CreateYouravatar} />
        <Stack.Screen name="MainNavigator" component={MainNavigator} />
      </Stack.Navigator>
    );
  };
  