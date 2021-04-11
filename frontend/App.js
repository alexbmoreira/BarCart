import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Provider as PaperProvider } from 'react-native-paper';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import Login from './src/pages/Login';
import Register from './src/pages/Register';
import ResolveAuth from './src/pages/ResolveAuth';
import MainTabs from './src/components/navigation/MainTabs';

import BarCartTheme from './src/BarCartTheme';

import { Provider as AuthProvider } from './src/contexts/AuthContext';
import { Provider as DrinksProvider } from './src/contexts/DrinkContext';
import { Provider as DrinkCreateProvider } from './src/contexts/DrinkCreateContext';
import { Provider as DrinkSearchProvider } from './src/contexts/SearchContext';
import { Provider as DrinkDetailProvider } from './src/contexts/DrinkDetailContext';
import { Provider as OnHandProvider } from './src/contexts/OnHandContext';
import { Provider as LikesProvider } from './src/contexts/LikesContext';

import { navigationRef } from './src/RootNavigation';

const Stack = createStackNavigator();

function AppNavigator() {
  return (
    <NavigationContainer ref={navigationRef}>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="ResolveAuth" component={ResolveAuth} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Register" component={Register} />
        <Stack.Screen name="Main" component={MainTabs} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default function App() {
  return (
    <SafeAreaProvider>
      <AuthProvider>
        <DrinksProvider>
          <DrinkSearchProvider>
            <DrinkCreateProvider>
              <DrinkDetailProvider>
                <OnHandProvider>
                  <LikesProvider>
                    <PaperProvider theme={BarCartTheme.theme}>
                      <AppNavigator />
                    </PaperProvider>
                  </LikesProvider>
                </OnHandProvider>
              </DrinkDetailProvider>
            </DrinkCreateProvider>
          </DrinkSearchProvider>
        </DrinksProvider>
      </AuthProvider>
    </SafeAreaProvider>
  );
}
