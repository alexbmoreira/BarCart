import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { Provider as PaperProvider } from 'react-native-paper';
import { useTheme } from 'react-native-paper';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { FontAwesome } from '@expo/vector-icons';

import Login from './src/pages/Login';
import Register from './src/pages/Register';
import ResolveAuth from './src/pages/ResolveAuth';
import DrinkDetail from './src/pages/DrinkDetail';
import Home from './src/pages/Home';
import Search from './src/pages/Search';
import CreateDrink from './src/pages/CreateDrink';
import OnTap from './src/pages/OnTap';
import EditOnHand from './src/pages/EditOnHand';
import Profile from './src/pages/Profile';
import ProfileSettings from './src/pages/ProfileSettings';

import BarCartTheme from './src/BarCartTheme';

import { Provider as AuthProvider } from './src/contexts/AuthContext';
import { Provider as DrinksProvider } from './src/contexts/DrinkContext';
import { Provider as DrinkCreateProvider } from './src/contexts/DrinkCreateContext';
import { Provider as DrinkSearchProvider } from './src/contexts/SearchContext';
import { Provider as DrinkDetailProvider } from './src/contexts/DrinkDetailContext';
import { Provider as OnHandProvider } from './src/contexts/OnHandContext';

import { navigationRef } from './src/RootNavigation';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();
const HomeNav = createStackNavigator();
const SearchNav = createStackNavigator();
const CreateDrinkNav = createStackNavigator();
const OnTapNav = createStackNavigator();
const ProfileNav = createStackNavigator();

function HomeStack() {
  return (
    <HomeNav.Navigator>
      <HomeNav.Screen name="Home" component={Home} options={{ headerLeft: () => null }} />
      <HomeNav.Screen name="DrinkDetail" component={DrinkDetail} />
    </HomeNav.Navigator>
  );
}

function SearchStack() {
  return (
    <SearchNav.Navigator>
      <SearchNav.Screen name="Search" component={Search} options={{ headerLeft: () => null }} />
    </SearchNav.Navigator>
  );
}

function CreateDrinkStack() {
  return (
    <CreateDrinkNav.Navigator>
      <CreateDrinkNav.Screen name="CreateDrink" component={CreateDrink} options={{ headerLeft: () => null }} />
    </CreateDrinkNav.Navigator>
  );
}

function OnTapStack() {
  return (
    <OnTapNav.Navigator>
      <OnTapNav.Screen name="OnTap" component={OnTap} options={{ headerLeft: () => null }} />
      <OnTapNav.Screen name="EditOnHand" component={EditOnHand} />
    </OnTapNav.Navigator>
  );
}

function ProfileStack() {
  return (
    <ProfileNav.Navigator>
      <ProfileNav.Screen name="Profile" component={Profile} options={{ headerLeft: () => null }} />
      <ProfileNav.Screen name="ProfileSettings" component={ProfileSettings} />
    </ProfileNav.Navigator>
  );
}

function MainTabs() {
  const { colors } = useTheme();

  return (
    <Tab.Navigator>
      <Tab.Screen
        name="HomeStack"
        component={HomeStack}
        options={{
          title: 'Home',
          tabBarIcon: () => <FontAwesome name="home" size={36} color={colors.surface} />,
        }}
      />
      <Tab.Screen
        name="SearchStack"
        component={SearchStack}
        options={{
          title: 'Search',
          tabBarIcon: () => <FontAwesome name="search" size={32} color={colors.surface} />,
        }}
      />
      <Tab.Screen
        name="CreateDrinkStack"
        component={CreateDrinkStack}
        options={{
          title: 'Create Drink',
          tabBarIcon: () => <FontAwesome name="plus-square" size={32} color={colors.surface} />,
        }}
      />
      <Tab.Screen
        name="OnTapStack"
        component={OnTapStack}
        options={{
          title: 'On Tap',
          tabBarIcon: () => <FontAwesome name="glass" size={32} color={colors.surface} />,
        }}
      />
      <Tab.Screen
        name="ProfileStack"
        component={ProfileStack}
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
              <DrinkDetailProvider>
                <OnHandProvider>
                  <PaperProvider theme={BarCartTheme.theme}>
                    <AppNavigator />
                  </PaperProvider>
                </OnHandProvider>
              </DrinkDetailProvider>
            </DrinkCreateProvider>
          </DrinkSearchProvider>
        </DrinksProvider>
      </AuthProvider>
    </SafeAreaProvider>
  );
}
