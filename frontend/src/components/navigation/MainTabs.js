import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { useTheme } from 'react-native-paper';
import { FontAwesome } from '@expo/vector-icons';
import BarCartIcons from '../../../assets/fonts/BarCartIcons';

import Stacks from './StackNavs';

const screenOptions = ({ route }) => ({
  tabBarIcon: ({ focused, color, size }) => {
    let iconName;
    let custom;

    switch (route.name) {
      case 'HomeStack':
        iconName = 'home';
        custom = false;
        break;
      case 'SearchStack':
        iconName = 'search';
        custom = false;
        break;
      case 'CreateDrinkStack':
        iconName = 'plus-square';
        custom = false;
        break;
      case 'OnTapStack':
        iconName = 'on-tap';
        custom = true;
        break;
      case 'ProfileStack':
        iconName = 'user-circle';
        custom = false;
        break;
    }

    return custom ? <BarCartIcons name={iconName} size={size} color={color} /> : <FontAwesome name={iconName} size={size} color={color} />;
  },
});

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
      screenOptions={screenOptions}
    >
      <Tab.Screen
        name="HomeStack"
        component={Stacks.HomeStack}
        options={{
          title: 'Home',
        }}
      />
      <Tab.Screen
        name="SearchStack"
        component={Stacks.SearchStack}
        options={{
          title: 'Search',
        }}
      />
      <Tab.Screen
        name="CreateDrinkStack"
        component={Stacks.CreateDrinkStack}
        options={{
          title: 'Create Drink',
        }}
      />
      <Tab.Screen
        name="OnTapStack"
        component={Stacks.OnTapStack}
        options={{
          title: 'On Tap',
        }}
      />
      <Tab.Screen
        name="ProfileStack"
        component={Stacks.ProfileStack}
        options={{
          title: 'Profile',
        }}
      />
    </Tab.Navigator>
  );
}

export default MainTabs;
