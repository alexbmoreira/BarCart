import React, { useContext } from 'react';
import { Button, Text } from 'react-native-paper';
import { SafeAreaView } from 'react-native-safe-area-context';

import { Context as DrinkCreateContext } from '../contexts/DrinkCreateContext';

export default function Home() {
  const { createDrink } = useContext(DrinkCreateContext);

  return (
    <SafeAreaView>
      <Button onPress={createDrink}>Create Drink</Button>
    </SafeAreaView>
  );
}
