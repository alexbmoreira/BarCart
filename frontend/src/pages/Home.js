import React, { useContext, useEffect } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Text } from 'react-native-paper';

import { Context as DrinkContext } from '../contexts/DrinkContext';

export default function Home({ navigation }) {
  const { state, getUserDrinks, getUserOnTap } = useContext(DrinkContext);

  useEffect(() => {
    const ud = navigation.addListener('focus', async () => {
      await getUserDrinks();

      await getUserOnTap();
    });

    return ud;
  }, [navigation, getUserDrinks, getUserOnTap, state]);

  const userDrinksArray = state.userDrinks.map((drink, i) => {
    return <Text key={state.userDrinks[i].id}>{state.userDrinks[i].name}</Text>;
  });

  const userOnTapArray = state.userOnTap.map((drink, i) => {
    return <Text key={state.userOnTap[i].id}>{state.userOnTap[i].name}</Text>;
  });

  return (
    <SafeAreaView>
      <Text>Home</Text>
      {userDrinksArray}
      {userOnTapArray}
    </SafeAreaView>
  );
}
