import React, { useContext, useEffect } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Text } from 'react-native-paper';

import DrinkTile from '../components/common/DrinkTile';

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
    return <DrinkTile key={state.userDrinks[i].id} drink={state.userDrinks[i]} />;
  });

  const userOnTapArray = state.userOnTap.map((drink, i) => {
    return <DrinkTile key={state.userOnTap[i].id} drink={state.userOnTap[i]} />;
  });

  return (
    <SafeAreaView>
      <Text>Home</Text>
      {userDrinksArray}
      {userOnTapArray}
    </SafeAreaView>
  );
}
