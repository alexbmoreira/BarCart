import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { Provider as PaperProvider } from 'react-native-paper';

import Home from './src/pages/Home';
import OnTap from './src/pages/OnTap';
import CreateDrink from './src/pages/CreateDrink';
import Profile from './src/pages/Profile';
import Search from './src/pages/Search';
import Login from './src/pages/Login';
import Register from './src/pages/Register';
import BarCartTheme from './src/BarCartTheme';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

function MainTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="OnTap" component={OnTap} />
      <Tab.Screen name="CreateDrink" component={CreateDrink} />
      <Tab.Screen name="Profile" component={Profile} />
      <Tab.Screen name="Search" component={Search} />
    </Tab.Navigator>
  );
}

function AppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Register" component={Register} />
        <Stack.Screen name="Main" component={MainTabs} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default function App() {
  return (
    <PaperProvider theme={BarCartTheme.theme}>
      <AppNavigator />
    </PaperProvider>
  );
}
