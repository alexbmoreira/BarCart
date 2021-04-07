import React, { useContext, useState, useEffect } from 'react';
import { View } from 'react-native';
import { Text, Button, TextInput, Title } from 'react-native-paper';
import { SafeAreaView } from 'react-native-safe-area-context';
import { withTheme } from 'react-native-paper';
import { FontAwesome } from '@expo/vector-icons';

import Spacer from '../components/theme/Spacer';
import DrinkIngredient from '../components/createDrink/DrinkIngredient';
import IngredientPicker from '../components/createDrink/IngredientPicker';

import { Context as DrinkCreateContext } from '../contexts/DrinkCreateContext';
import { ScrollView } from 'react-native-gesture-handler';

function CreateDrink({ navigation, theme }) {
  const { colors } = theme;
  const { state, createDrink, getIngredients } = useContext(DrinkCreateContext);

  const [drinkName, setDrinkName] = useState('');
  const [instructions, setInstructions] = useState('');
  const [ingredients, setIngredients] = useState([]);

  React.useLayoutEffect(() => {
    navigation.setOptions({
      title: 'Create Drink',
      tabBarIcon: () => <FontAwesome name="plus-square" size={32} color={colors.surface} />,
    });
  }, [navigation, colors.surface]);

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

  const addedIngredients = ingredients.map((ing, i) => {
    return (
      <View key={ing.ingredient}>
        <DrinkIngredient ingredient={ing} />
        {i < ingredients.length - 1 ? <Spacer /> : null}
      </View>
    );
  });

  const addIngredient = ({ ingredient, quantity, units }) => {
    if (ingredient && quantity && units) {
      setIngredients([...ingredients, { name: ingredient.name, ingredient: ingredient.ingredient, quantity, units }]);
    }
  };

  return (
    <SafeAreaView>
      <ScrollView>
        <Spacer>
          <Title>Name:</Title>
          <TextInput placeholder="Drink Name" value={drinkName} onChangeText={(newDrinkName) => setDrinkName(newDrinkName)} autoCorrect={false} />
          <Spacer />
          <Title>Instructions:</Title>
          <TextInput placeholder="Instructions" value={instructions} onChangeText={(newInstructions) => setInstructions(newInstructions)} multiline numberOfLines={5} />
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

export default withTheme(CreateDrink);
