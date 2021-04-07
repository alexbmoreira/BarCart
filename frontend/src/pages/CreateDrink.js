import React, { useContext, useState } from 'react';
import { Button, TextInput } from 'react-native-paper';
import { SafeAreaView } from 'react-native-safe-area-context';

import Spacer from '../components/theme/Spacer';

import { Context as DrinkCreateContext } from '../contexts/DrinkCreateContext';

export default function Home() {
  const { createDrink } = useContext(DrinkCreateContext);

  const [drinkName, setDrinkName] = useState('');
  const [instructions, setInstructions] = useState('');

  const submitCreateDrink = () => {
    createDrink({ name: drinkName, instructions });
  };

  return (
    <SafeAreaView>
      <Spacer>
        <TextInput placeholder="Drink Name" value={drinkName} onChangeText={(newDrinkName) => setDrinkName(newDrinkName)} autoCorrect={false} />
        <Spacer />
        <TextInput placeholder="Instructions" value={instructions} onChangeText={(newInstructions) => setInstructions(newInstructions)} multiline numberOfLines={5} />
        <Spacer />
        <Button onPress={submitCreateDrink}>Create Drink</Button>
      </Spacer>
    </SafeAreaView>
  );
}
