import React, { useContext, useState, useEffect } from 'react';
import { View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { Title, Button, Text } from 'react-native-paper';
import RNPickerSelect from 'react-native-picker-select';

import Spacer from '../components/theme/Spacer';
import DrinkIngredient from '../components/createDrink/DrinkIngredient';

import { Context as OnHandContext } from '../contexts/OnHandContext';
import { Context as DrinkCreateContext } from '../contexts/DrinkCreateContext';

export default function EditOnHand({ navigation }) {
  const { state: onHandState, addOnHand, getOnHand } = useContext(OnHandContext);
  const { state: ingredientsState, getIngredients } = useContext(DrinkCreateContext);

  const [ingredient, setIngredient] = useState(null);
  const [ingredients, setIngredients] = useState([]);

  useEffect(() => {
    const ing = navigation.addListener('focus', async () => {
      if (ingredientsState.ingredientsList.length <= 0) {
        await getIngredients();
      }
      await getOnHand();
      setIngredients(
        onHandState.onHand.map((i) => {
          return { ingredient: i.id || i.ingredient, name: i.name };
        })
      );
    });

    return ing;
  }, [navigation, getIngredients, ingredientsState, getOnHand, onHandState]);

  const ingredientValueChange = (id, i) => {
    if (id) {
      setIngredient({ ingredient: id, name: ingredientsArray[i - 1].label });
    }
  };

  const addIngredientToList = () => {
    if (ingredient && !ingredients.find((ing) => ing.ingredient === ingredient.ingredient)) {
      setIngredients([ingredient, ...ingredients]);
    }
  };

  const updateIngredients = () => {
    const newIngredients = ingredients.filter((i) => !onHandState.onHand.some((ohi) => ohi.id === i.ingredient));
    addOnHand(newIngredients);
  };

  const ingredientsArray = ingredientsState.ingredientsList.map((ing, i) => {
    return { label: ing.name, value: ing.id };
  });

  const addedIngredients = ingredients.map((ing, i) => {
    return (
      <View key={ing.id || ing.ingredient}>
        <DrinkIngredient removeIngredient={() => {}} ingredient={ing} />
        {i < ingredients.length - 1 ? <Spacer amount={5} /> : null}
      </View>
    );
  });

  return (
    <ScrollView>
      <Spacer>
        <Title>Ingredients on hand</Title>
        <RNPickerSelect placeholder={{ label: 'Select an ingredient...' }} onValueChange={ingredientValueChange} items={ingredientsArray} />
        <Button onPress={addIngredientToList}>Add ingredient</Button>
        {ingredients.length > 0 ? addedIngredients : <Text>None</Text>}
        <Button onPress={updateIngredients}>Update on hand</Button>
        <Button onPress={() => navigation.navigate('OnTap')}>See what's On Tap</Button>
      </Spacer>
    </ScrollView>
  );
}