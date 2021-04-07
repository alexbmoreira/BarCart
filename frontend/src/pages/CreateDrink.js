import React, { useContext, useState, useEffect } from 'react';
import { Text, Button, TextInput } from 'react-native-paper';
import { SafeAreaView } from 'react-native-safe-area-context';
import { withTheme } from 'react-native-paper';
import { FontAwesome } from '@expo/vector-icons';

import Spacer from '../components/theme/Spacer';
import IngredientPicker from '../components/createDrink/IngredientPicker';

import { Context as DrinkCreateContext } from '../contexts/DrinkCreateContext';

function CreateDrink({ navigation, theme }) {
  const { colors } = theme;
  const { state, createDrink, getIngredients } = useContext(DrinkCreateContext);

  const [drinkName, setDrinkName] = useState('');
  const [instructions, setInstructions] = useState('');
  // const [ingredient, setIngredient] = useState({});
  // const [quantity, setQuantity] = useState(0);
  // const [units, setUnits] = useState('');
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
    return <Text key={i}>{ing.name}</Text>;
  });

  const addIngredient = ({ ingredient, quantity, units }) => {
    setIngredients([...ingredients, { name: ingredient.name, ingredient: ingredient.ingredient, quantity, units }]);
  };

  return (
    <SafeAreaView>
      <Spacer>
        <TextInput placeholder="Drink Name" value={drinkName} onChangeText={(newDrinkName) => setDrinkName(newDrinkName)} autoCorrect={false} />
        <Spacer />
        <TextInput placeholder="Instructions" value={instructions} onChangeText={(newInstructions) => setInstructions(newInstructions)} multiline numberOfLines={5} />
        <Spacer />
        {addedIngredients}
        <Spacer />
        <IngredientPicker addIngredient={addIngredient} ingredientsArray={ingredientsArray} pickerUnits={pickerUnits} />
        <Spacer />
        <Button onPress={submitCreateDrink}>Create Drink</Button>
      </Spacer>
    </SafeAreaView>
  );
}

export default withTheme(CreateDrink);
