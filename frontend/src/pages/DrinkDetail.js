import React, { useContext, useEffect } from 'react';
import { ScrollView } from 'react-native-gesture-handler';
import { Text, Title } from 'react-native-paper';

import Spacer from '../components/theme/Spacer';

import { Context as DrinkDetailContext } from '../contexts/DrinkDetailContext';

function Home({ route, navigation }) {
  const { drinkID } = route.params;
  const { state, getDrink } = useContext(DrinkDetailContext);

  useEffect(() => {
    const ud = navigation.addListener('focus', async () => {
      if (!state.drink || state.drink.id !== drinkID) {
        await getDrink(drinkID);
      }
    });
    return ud;
  }, [navigation, drinkID, getDrink, state]);

  return (
    <ScrollView>
      <Spacer>
        <Title>Drink detail</Title>
        <Text>{state.drink ? state.drink.name : ''}</Text>
        <Text>{drinkID}</Text>
      </Spacer>
    </ScrollView>
  );
}

export default Home;
