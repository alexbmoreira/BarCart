import React, { useContext, useEffect, useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Text } from 'react-native-paper';

import { Context as DrinkContext } from '../contexts/DrinkContext';

export default function Home({ navigation }) {
  const { state, getUserDrinks } = useContext(DrinkContext);

  const [userDrinks, setUserDrinks] = useState([]);

  useEffect(() => {
    const ud = navigation.addListener('focus', async () => {
      await getUserDrinks();
      setUserDrinks(state !== {} ? state : []);
    });

    return ud;
  }, [navigation, getUserDrinks, state]);

  const userDrinksArray = userDrinks.map((drink, i) => {
    return <Text key={userDrinks[i].id}>{userDrinks[i].name}</Text>;
  });

  return (
    <SafeAreaView>
      <Text>Home</Text>
      {userDrinksArray}
    </SafeAreaView>
  );
}
