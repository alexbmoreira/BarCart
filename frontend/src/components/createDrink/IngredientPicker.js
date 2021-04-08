import React, { useState } from 'react';
import { View } from 'react-native';
import { Button, TextInput } from 'react-native-paper';
import RNPickerSelect from 'react-native-picker-select';

export default function IngredientPicker(props) {
  const [ingredient, setIngredient] = useState({});
  const [quantity, setQuantity] = useState(0);
  const [units, setUnits] = useState('');

  const ingredientValueChange = (id, i) => {
    if (id) {
      setIngredient({ ingredient: id, name: props.ingredientsArray[i - 1].label });
    }
  };

  const quantityValueChange = (newQuantity) => setQuantity(newQuantity);

  const unitValueChange = (newUnits) => setUnits(newUnits);

  return (
    <View>
      <RNPickerSelect placeholder={{ label: 'Select an ingredient...' }} onValueChange={ingredientValueChange} items={props.ingredientsArray} />
      <TextInput mode={'outlined'} keyboardType="decimal-pad" onChangeText={quantityValueChange} />
      <RNPickerSelect placeholder={{ label: 'Select a measurement unit...' }} onValueChange={unitValueChange} items={props.pickerUnits} />
      <Button onPress={props.addIngredient.bind(this, { ingredient, quantity, units })}>Add</Button>
    </View>
  );
}
