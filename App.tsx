import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { StatusBar } from 'expo-status-bar';

import NavigationDirector from './src/navigation/NavigationDirector';
import { ApplicationProvider } from './src/contexts/ApplicationContext';
import { ThemeProvider } from './src/contexts/ThemeContext';

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
