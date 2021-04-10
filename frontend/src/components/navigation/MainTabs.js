import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { useTheme } from 'react-native-paper';
import { FontAwesome } from '@expo/vector-icons';
import BarCartIcons from '../../../assets/fonts/BarCartIcons';

import Stacks from './StackNavs';

const Tab = createBottomTabNavigator();

function MainTabs() {
  const { colors } = useTheme();

  return (
    <Tab.Navigator
      tabBarOptions={{
        activeTintColor: colors.background,
        inactiveTintColor: colors.surface,
        style: {
          backgroundColor: colors.primary,
        },
      }}
    >
      <Tab.Screen
        name="HomeStack"
        component={Stacks.HomeStack}
        options={{
          title: 'Home',
          tabBarIcon: () => <FontAwesome name="home" size={30} color={colors.surface} />,
        }}
      />
      <Tab.Screen
        name="SearchStack"
        component={Stacks.SearchStack}
        options={{
          title: 'Search',
          tabBarIcon: () => <FontAwesome name="search" size={28} color={colors.surface} />,
        }}
      />
      <Tab.Screen
        name="CreateDrinkStack"
        component={Stacks.CreateDrinkStack}
        options={{
          title: 'Create Drink',
          tabBarIcon: () => <FontAwesome name="plus-square" size={28} color={colors.surface} />,
        }}
      />
      <Tab.Screen
        name="OnTapStack"
        component={Stacks.OnTapStack}
        options={{
          title: 'On Tap',
          tabBarIcon: () => <BarCartIcons name="on-tap" size={28} color={colors.surface} />,
        }}
      />
      <Tab.Screen
        name="ProfileStack"
        component={Stacks.ProfileStack}
        options={{
          title: 'Profile',
          tabBarIcon: () => <FontAwesome name="user-circle" size={28} color={colors.surface} />,
        }}
      />
    </Tab.Navigator>
  );
}

export default MainTabs;
