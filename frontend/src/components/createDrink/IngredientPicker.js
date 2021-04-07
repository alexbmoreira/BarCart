import React from 'react';
import { View } from 'react-native';
import { TextInput } from 'react-native-paper';
import RNPickerSelect from 'react-native-picker-select';

export default function IngredientPicker(props) {
  return (
    <View>
      <RNPickerSelect placeholder={{ label: 'Select an ingredient...' }} onValueChange={props.ingredientValueChange} items={props.ingredientsArray} />
      <TextInput keyboardType="decimal-pad" onChangeText={props.quantityValueChange} />
      <RNPickerSelect placeholder={{ label: 'Select a measurement unit...' }} onValueChange={props.unitValueChange} items={props.pickerUnits} />
    </View>
  );
}
