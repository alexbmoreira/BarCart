import React, { useContext, useState } from 'react';
import { Button, TextInput } from 'react-native-paper';
import { SafeAreaView } from 'react-native-safe-area-context';
import RNPickerSelect from 'react-native-picker-select';

import Spacer from '../components/theme/Spacer';

import { Context as DrinkCreateContext } from '../contexts/DrinkCreateContext';

export default function Home() {
  const { createDrink } = useContext(DrinkCreateContext);

  const [drinkName, setDrinkName] = useState('');
  const [instructions, setInstructions] = useState('');
  const [ingredient, setIngredient] = useState({});
  const [quantity, setQuantity] = useState(0);
  const [units, setUnits] = useState('');
  // const [ingredients, setIngredients] = useState([]);

  const submitCreateDrink = () => {
    const ingredients = [{ name: ingredient.name, ingredient: ingredient.ingredient, quantity, units }];
    createDrink({ name: drinkName, instructions, ingredients });
  };

  const ingredientsArray = [
    {
      id: 203,
      name: 'mint',
    },
    {
      id: 219,
      name: 'brown sugar',
    },
    {
      id: 220,
      name: 'orange juice',
    },
  ].map((ing, i) => {
    return { label: ing.name, value: ing.id };
  });

  const pickerUnits = [
    {
      label: 'oz',
      value: 'oz',
    },
    {
      label: 'tbsp',
      value: 'tbsp',
    },
    {
      label: 'tsp',
      value: 'tsp',
    },
  ];

  return (
    <SafeAreaView>
      <Spacer>
        <TextInput placeholder="Drink Name" value={drinkName} onChangeText={(newDrinkName) => setDrinkName(newDrinkName)} autoCorrect={false} />
        <Spacer />
        <TextInput placeholder="Instructions" value={instructions} onChangeText={(newInstructions) => setInstructions(newInstructions)} multiline numberOfLines={5} />
        <Spacer />
        <RNPickerSelect placeholder={{ label: 'Select an ingredient...' }} onValueChange={(id, i) => setIngredient({ ingredient: id, name: ingredientsArray[i - 1].label })} items={ingredientsArray} />
        <TextInput keyboardType="decimal-pad" onChangeText={(newQuantity) => setQuantity(newQuantity)} />
        <RNPickerSelect placeholder={{ label: 'Select a measurement unit...' }} onValueChange={(newUnits) => setUnits(newUnits)} items={pickerUnits} />
        <Spacer />
        <Button onPress={submitCreateDrink}>Create Drink</Button>
      </Spacer>
    </SafeAreaView>
  );
}
