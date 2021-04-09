import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { useTheme } from 'react-native-paper';
import { FontAwesome } from '@expo/vector-icons';

import DrinkDetail from '../../pages/DrinkDetail';
import Home from '../../pages/Home';
import Search from '../../pages/Search';
import CreateDrink from '../../pages/CreateDrink';
import OnTap from '../../pages/OnTap';
import EditOnHand from '../../pages/EditOnHand';
import Profile from '../../pages/Profile';
import ProfileSettings from '../../pages/ProfileSettings';

import Spacer from '../theme/Spacer';

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
      <SearchNav.Screen name="DrinkDetail" component={DrinkDetail} />
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
      <OnTapNav.Screen name="DrinkDetail" component={DrinkDetail} />
    </OnTapNav.Navigator>
  );
}

function ProfileStack() {
  const { colors } = useTheme();
  return (
    <ProfileNav.Navigator>
      <ProfileNav.Screen
        name="Profile"
        component={Profile}
        options={({ navigation }) => ({
          headerLeft: () => null,
          headerRight: () => (
            <Spacer x amount={24}>
              <FontAwesome name="gear" size={32} color={colors.surface} onPress={() => navigation.navigate('ProfileSettings')} />
            </Spacer>
          ),
        })}
      />
      <ProfileNav.Screen name="ProfileSettings" component={ProfileSettings} />
      <ProfileNav.Screen name="DrinkDetail" component={DrinkDetail} />
    </ProfileNav.Navigator>
  );
}

export default {
  HomeStack,
  SearchStack,
  CreateDrinkStack,
  OnTapStack,
  ProfileStack,
};
