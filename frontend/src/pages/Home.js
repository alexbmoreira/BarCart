import React, { useContext, useEffect, useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Text } from 'react-native-paper';

import { Context as DrinkContext } from '../contexts/DrinkContext';

export default function Home() {
  const { state, getUserDrinks } = useContext(DrinkContext);

  const [userDrinks, setUserDrinks] = useState([]);

  useEffect(() => {
    async function ud() {
      await getUserDrinks();
      setUserDrinks(state);
      console.log(userDrinks);
    }

    ud();
  }, []);

  console.log(userDrinks);

  const userDrinksArray = userDrinks.map((drink, i) => {
    return <Text>{userDrinks[i].name}</Text>;
  });

  return (
    <SafeAreaView>
      <Text>Home</Text>
      {userDrinksArray}
    </SafeAreaView>
  );
}
