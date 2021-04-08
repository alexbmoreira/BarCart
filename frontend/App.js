import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { Provider as PaperProvider } from 'react-native-paper';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import Home from './src/pages/Home';
import OnTap from './src/pages/OnTap';
import CreateDrink from './src/pages/CreateDrink';
import Profile from './src/pages/Profile';
import ProfileSettings from './src/pages/ProfileSettings';
import Search from './src/pages/Search';
import Login from './src/pages/Login';
import Register from './src/pages/Register';
import ResolveAuth from './src/pages/ResolveAuth';

import BarCartTheme from './src/BarCartTheme';

import { Provider as AuthProvider } from './src/contexts/AuthContext';
import { Provider as DrinksProvider } from './src/contexts/DrinkContext';
import { Provider as DrinkCreateProvider } from './src/contexts/DrinkCreateContext';

import { navigationRef } from './src/RootNavigation';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

function MainTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Search" component={Search} />
      <Tab.Screen name="CreateDrink" component={CreateDrink} />
      <Tab.Screen name="OnTap" component={OnTap} />
      <Tab.Screen name="Profile" component={Profile} />
    </Tab.Navigator>
  );
}

function AppNavigator() {
  return (
    <NavigationContainer ref={navigationRef}>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="ResolveAuth" component={ResolveAuth} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Register" component={Register} />
        <Stack.Screen name="Main" component={MainTabs} />
        <Stack.Screen name="ProfileSettings" component={ProfileSettings} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default function App() {
  return (
    <SafeAreaProvider>
      <AuthProvider>
        <DrinksProvider>
          <DrinkCreateProvider>
            <PaperProvider theme={BarCartTheme.theme}>
              <AppNavigator />
            </PaperProvider>
          </DrinkCreateProvider>
        </DrinksProvider>
      </AuthProvider>
    </SafeAreaProvider>
  );
}
