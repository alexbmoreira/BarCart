import React, { useContext, useEffect, useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Text } from 'react-native-paper';

import { Context as DrinkContext } from '../contexts/DrinkContext';

export default function Home({ navigation }) {
  const { state, getUserDrinks, getUserOnTap } = useContext(DrinkContext);

  const [userDrinks, setUserDrinks] = useState([]);
  const [userOnTap, setUserOnTap] = useState([]);

  useEffect(() => {
    const ud = navigation.addListener('focus', async () => {
      await getUserDrinks();
      console.log(state);
      setUserDrinks(state.userDrinks);

      await getUserOnTap();
      setUserOnTap(state.userOnTap);
    });

    return ud;
  }, [navigation, getUserDrinks, getUserOnTap, state]);

  const userDrinksArray = userDrinks.map((drink, i) => {
    return <Text key={userDrinks[i].id}>{userDrinks[i].name}</Text>;
  });

  const userOnTapArray = userOnTap.map((drink, i) => {
    return <Text key={userOnTap[i].id}>{userOnTap[i].name}</Text>;
  });

  return (
    <SafeAreaView>
      <Text>Home</Text>
      {userDrinksArray}
      {userOnTapArray}
    </SafeAreaView>
  );
}
