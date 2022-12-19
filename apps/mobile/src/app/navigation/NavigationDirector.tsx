/* eslint-disable react/no-unstable-nested-components */
import React, {
  ReactElement,
  useContext,
} from 'react';
import {
  Binoculars,
  Cardholder,
  GearSix,
  Rows,
} from 'phosphor-react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import SignInScreen from '../screens/SignInScreen';
import ExploreScreen from '../screens/ExploreScreen';
import { ApplicationContext } from '../contexts/ApplicationContext';
import DashboardScreen from '../screens/DashboardScreen';
import PreferencesScreen from '../screens/PreferencesScreen';
import ListingScreen from '../screens/ListingScreen';

const RootStackNav = createNativeStackNavigator();
const BottomTabNav = createBottomTabNavigator();

export function BottomTabNavigationDirector(): ReactElement {
  return (
    <BottomTabNav.Navigator
      initialRouteName="Explore"
      screenOptions={{
        tabBarLabelStyle: {
          paddingBottom: 4,
        },
      }}
    >
      <BottomTabNav.Screen
        name="Dashboard"
        component={DashboardScreen}
        options={{
          headerShown: false,
          tabBarIcon: ({ color }) => (
            <Cardholder color={color} />
          ),
        }}
      />
      <BottomTabNav.Screen
        name="Explore"
        component={ExploreScreen}
        options={{
          headerShown: false,
          tabBarIcon: ({ color }) => (
            <Binoculars color={color} />
          ),
        }}
      />
      <BottomTabNav.Screen
        name="Listings"
        component={ListingScreen}
        options={{
          headerShown: false,
          tabBarIcon: ({ color }) => (
            <Rows color={color} />
          ),
        }}
      />
      <BottomTabNav.Screen
        name="Preferences"
        component={PreferencesScreen}
        options={{
          headerShown: false,
          tabBarIcon: ({ color }) => (
            <GearSix color={color} />
          ),
        }}
      />
    </BottomTabNav.Navigator>
  );
}

export default function NavigationDirector(): ReactElement {
  const { activeUser } = useContext(ApplicationContext);

  return (
    <NavigationContainer>
      <RootStackNav.Navigator initialRouteName="SignIn">
        {activeUser ? (
          <RootStackNav.Screen
            name="Root"
            component={BottomTabNavigationDirector}
            options={{
              headerShown: false,
            }}
          />
        ) : (
          <RootStackNav.Screen
            name="SignIn"
            component={SignInScreen}
            options={{
              headerShown: false,
            }}
          />
        )}
      </RootStackNav.Navigator>
    </NavigationContainer>
  );
}
