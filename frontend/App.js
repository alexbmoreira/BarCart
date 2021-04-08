import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { Provider as PaperProvider } from 'react-native-paper';
import { useTheme } from 'react-native-paper';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { FontAwesome } from '@expo/vector-icons';

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
import { Provider as DrinkSearchProvider } from './src/contexts/SearchContext';

import { navigationRef } from './src/RootNavigation';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();
const ProfileStack = createStackNavigator();

function ProfileNav() {
  return (
    <ProfileStack.Navigator>
      <ProfileStack.Screen name="Profile" component={Profile} options={{ headerLeft: () => null }} />
      <ProfileStack.Screen name="ProfileSettings" component={ProfileSettings} />
    </ProfileStack.Navigator>
  );
}

function MainTabs() {
  const { colors } = useTheme();

  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          title: 'Home',
          tabBarIcon: () => <FontAwesome name="home" size={36} color={colors.surface} />,
        }}
      />
      <Tab.Screen
        name="Search"
        component={Search}
        options={{
          title: 'Search',
          tabBarIcon: () => <FontAwesome name="search" size={32} color={colors.surface} />,
        }}
      />
      <Tab.Screen
        name="CreateDrink"
        component={CreateDrink}
        options={{
          title: 'Create Drink',
          tabBarIcon: () => <FontAwesome name="plus-square" size={32} color={colors.surface} />,
        }}
      />
      <Tab.Screen
        name="OnTap"
        component={OnTap}
        options={{
          title: 'On Tap',
          tabBarIcon: () => <FontAwesome name="glass" size={32} color={colors.surface} />,
        }}
      />
      <Tab.Screen
        name="ProfileStack"
        component={ProfileNav}
        options={{
          title: 'Profile',
          tabBarIcon: () => <FontAwesome name="user-circle" size={32} color={colors.surface} />,
        }}
      />
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
              <PaperProvider theme={BarCartTheme.theme}>
                <AppNavigator />
              </PaperProvider>
            </DrinkCreateProvider>
          </DrinkSearchProvider>
        </DrinksProvider>
      </AuthProvider>
    </SafeAreaProvider>
  );
}
