import React, { useContext, useState, useEffect } from 'react';
import { View } from 'react-native';
import { Text, Button, TextInput, Title } from 'react-native-paper';
import { SafeAreaView } from 'react-native-safe-area-context';

import Spacer from '../components/theme/Spacer';
import DrinkIngredient from '../components/createDrink/DrinkIngredient';
import IngredientPicker from '../components/createDrink/IngredientPicker';

import { Context as DrinkCreateContext } from '../contexts/DrinkCreateContext';
import { ScrollView } from 'react-native-gesture-handler';

function CreateDrink({ navigation, theme }) {
  const { state, createDrink, getIngredients } = useContext(DrinkCreateContext);

  const [drinkName, setDrinkName] = useState('');
  const [instructions, setInstructions] = useState('');
  const [ingredients, setIngredients] = useState([]);

  useEffect(() => {
    const ud = navigation.addListener('focus', async () => {
      await getIngredients();
    });

    return ud;
  }, [navigation, getIngredients, state]);

  const submitCreateDrink = () => {
    createDrink({ name: drinkName, instructions, ingredients });
  };

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

  const ingredientsArray = state.ingredientsList.map((ing, i) => {
    return { label: ing.name, value: ing.id };
  });

  const addIngredient = ({ ingredient, quantity, units }) => {
    if (ingredient && quantity && units && !ingredients.find((ing) => ing.ingredient === ingredient.ingredient)) {
      setIngredients([...ingredients, { name: ingredient.name, ingredient: ingredient.ingredient, quantity, units }]);
    }
  };

  const removeIngredient = (id) => {
    setIngredients(ingredients.filter((ing) => ing.ingredient !== id));
  };

  const addedIngredients = ingredients.map((ing, i) => {
    return (
      <View key={ing.ingredient}>
        <DrinkIngredient removeIngredient={removeIngredient} ingredient={ing} />
        {i < ingredients.length - 1 ? <Spacer amount={5} /> : null}
      </View>
    );
  });

  return (
    <SafeAreaView>
      <ScrollView>
        <Spacer>
          <Title>Name:</Title>
          <TextInput mode={'outlined'} placeholder="Drink Name" value={drinkName} onChangeText={(newDrinkName) => setDrinkName(newDrinkName)} autoCorrect={false} />
          <Spacer />
          <Title>Instructions:</Title>
          <TextInput mode={'outlined'} placeholder="Instructions" value={instructions} onChangeText={(newInstructions) => setInstructions(newInstructions)} multiline numberOfLines={5} />
          <Spacer />
          <Title>Ingredients:</Title>
          {ingredients.length > 0 ? addedIngredients : <Text>None</Text>}
          <Spacer />
          <IngredientPicker addIngredient={addIngredient} ingredientsArray={ingredientsArray} pickerUnits={pickerUnits} />
          <Spacer />
          <Button onPress={submitCreateDrink}>Create Drink</Button>
        </Spacer>
      </ScrollView>
    </SafeAreaView>
  );
}

export default CreateDrink;
