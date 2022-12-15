import React, { ReactElement, useContext } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import SignInScreen from '../screens/SignInScreen';
import HomeScreen from '../screens/HomeScreen';
import { ApplicationContext } from '../contexts/ApplicationContext';
import { RootStackParamList } from '../types/Navigation';

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function NavigationDirector(): ReactElement {
  const { activeUser } = useContext(ApplicationContext);

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="SignIn">
        {activeUser ? (
          <Stack.Screen
            name="Home"
            component={HomeScreen}
            options={{
              headerShown: false,
            }}
          />
        ) : (
          <Stack.Screen
            name="SignIn"
            component={SignInScreen}
            options={{
              headerShown: false,
            }}
          />
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
}
