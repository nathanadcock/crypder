import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { StatusBar } from 'expo-status-bar';
import { ApplicationProvider } from './contexts/ApplicationContext';
import { ThemeProvider } from './contexts/ThemeContext';
import NavigationDirector from './navigation/NavigationDirector';

export default function App() {
  return (
    <SafeAreaProvider>
      <ThemeProvider>
        <ApplicationProvider>
          <NavigationDirector />
          <StatusBar />
        </ApplicationProvider>
      </ThemeProvider>
    </SafeAreaProvider>
  );
}
