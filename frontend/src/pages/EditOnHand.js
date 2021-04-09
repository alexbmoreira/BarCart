import React, { useContext, useState, useEffect } from 'react';
import { View } from 'react-native';
import { Button, Text } from 'react-native-paper';
import RNPickerSelect from 'react-native-picker-select';

import { Context as OnHandContext } from '../contexts/OnHandContext';
import { Context as DrinkCreateContext } from '../contexts/DrinkCreateContext';

export default function EditOnHand({ navigation }) {
  const { state: onHandState, addOnHand } = useContext(OnHandContext);
  const { state: ingredientsState, getIngredients } = useContext(DrinkCreateContext);

  const [ingredient, setIngredient] = useState({});
  const [ingredients, setIngredients] = useState([]);

  useEffect(() => {
    const ing = navigation.addListener('focus', async () => {
      if (ingredientsState.ingredientsList.length <= 0) {
        await getIngredients();
      }
    });

    return ing;
  }, [navigation, getIngredients, ingredientsState]);

  const ingredientValueChange = (id) => {
    if (id) {
      setIngredient({ ingredient: id });
    }
  };

  const ingredientsArray = ingredientsState.ingredientsList.map((ing, i) => {
    return { label: ing.name, value: ing.id };
  });

  return (
    <View>
      <Text>Edit on Hand</Text>
      <RNPickerSelect placeholder={{ label: 'Select an ingredient...' }} onValueChange={ingredientValueChange} items={ingredientsArray} />
      <Button onPress={() => addOnHand(ingredient)}>Add ingredient</Button>
      <Button onPress={() => navigation.navigate('OnTap')}>See what's On Tap</Button>
    </View>
  );
}
