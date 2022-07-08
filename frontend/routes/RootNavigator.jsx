import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import Register from '../screens/Register';
import Login from '../screens/Login';
import Splash from '../screens/Splash';
import Welcome from '../screens/Welcome';
import Candidates from '../screens/Candidates';
import Polls from '../screens/Polls';
import BottomTabNavigator from './BottomTabNavigator';

export default function RootNavigator() {
  const Stack = createNativeStackNavigator();

  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Splash"
        component={Splash}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Welcome"
        component={Welcome}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Register"
        component={Register}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Login"
        component={Login}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Root"
        component={BottomTabNavigator}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Candidates"
        component={Candidates}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Polls"
        component={Polls}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}
