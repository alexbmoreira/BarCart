import React, { useContext, useEffect } from 'react';
import { ScrollView } from 'react-native-gesture-handler';
import { Text, Title } from 'react-native-paper';

import Spacer from '../components/theme/Spacer';

import { Context as DrinkDetailContext } from '../contexts/DrinkDetailContext';

function Home({ navigation }) {
  const { state, getDrink } = useContext(DrinkDetailContext);

  useEffect(() => {
    const ud = navigation.addListener('focus', async () => {
      await getDrink();
    });
    return ud;
  }, [navigation, getDrink, state]);

  return (
    <ScrollView>
      <Spacer>
        <Title>Drink detail</Title>
        <Text>{state.drink ? state.drink.name : ''}</Text>
      </Spacer>
    </ScrollView>
  );
}

export default Home;
