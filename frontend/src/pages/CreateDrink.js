import React, { useContext, useState, useEffect } from 'react';
import { Button, TextInput } from 'react-native-paper';
import { SafeAreaView } from 'react-native-safe-area-context';
import RNPickerSelect from 'react-native-picker-select';
import { withTheme } from 'react-native-paper';
import { FontAwesome } from '@expo/vector-icons';

import Spacer from '../components/theme/Spacer';

import { Context as DrinkCreateContext } from '../contexts/DrinkCreateContext';

function CreateDrink({ navigation, theme }) {
  const { colors } = theme;
  const { state, createDrink, getIngredients } = useContext(DrinkCreateContext);

  const [drinkName, setDrinkName] = useState('');
  const [instructions, setInstructions] = useState('');
  const [ingredient, setIngredient] = useState({});
  const [quantity, setQuantity] = useState(0);
  const [units, setUnits] = useState('');
  // const [ingredients, setIngredients] = useState([]);

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
    const ingredients = [{ name: ingredient.name, ingredient: ingredient.ingredient, quantity, units }];
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

  const ingredientValueChange = (id, i) => {
    if (id) {
      setIngredient({ ingredient: id, name: ingredientsArray[i - 1].label });
    }
  };

  return (
    <SafeAreaView>
      <Spacer>
        <TextInput placeholder="Drink Name" value={drinkName} onChangeText={(newDrinkName) => setDrinkName(newDrinkName)} autoCorrect={false} />
        <Spacer />
        <TextInput placeholder="Instructions" value={instructions} onChangeText={(newInstructions) => setInstructions(newInstructions)} multiline numberOfLines={5} />
        <Spacer />
        <RNPickerSelect placeholder={{ label: 'Select an ingredient...' }} onValueChange={ingredientValueChange} items={ingredientsArray} />
        <TextInput keyboardType="decimal-pad" onChangeText={(newQuantity) => setQuantity(newQuantity)} />
        <RNPickerSelect placeholder={{ label: 'Select a measurement unit...' }} onValueChange={(newUnits) => setUnits(newUnits)} items={pickerUnits} />
        <Spacer />
        <Button onPress={submitCreateDrink}>Create Drink</Button>
      </Spacer>
    </SafeAreaView>
  );
}

export default withTheme(CreateDrink);
