import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { Button, TextInput } from 'react-native-paper';
import RNPickerSelect from 'react-native-picker-select';
import { FontAwesome } from '@expo/vector-icons';

import Spacer from '../theme/Spacer';

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
      <RNPickerSelect
        style={pickerSelectStyles}
        useNativeAndroidPickerStyle={false}
        Icon={() => <FontAwesome name="chevron-down" size={20} color="grey" />}
        placeholder={{ label: 'Select an ingredient...' }}
        onValueChange={ingredientValueChange}
        items={props.ingredientsArray}
      />
      <Spacer y amount={5} />
      <TextInput mode={'outlined'} keyboardType="decimal-pad" onChangeText={quantityValueChange} />
      <Spacer y amount={7} />
      <RNPickerSelect
        style={pickerSelectStyles}
        useNativeAndroidPickerStyle={false}
        Icon={() => <FontAwesome name="chevron-down" size={20} color="grey" />}
        placeholder={{ label: 'Select a measurement unit...' }}
        onValueChange={unitValueChange}
        items={props.pickerUnits}
      />
      <Spacer y amount={7} />
      <Button mode={'contained'} onPress={props.addIngredient.bind(this, { ingredient, quantity, units })}>
        Add
      </Button>
    </View>
  );
}

const pickerSelectStyles = StyleSheet.create({
  inputIOS: {
    fontSize: 16,
    paddingVertical: 12,
    paddingHorizontal: 10,
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 8,
    color: 'black',
    paddingRight: 30, // to ensure the text is never behind the icon
  },
  inputAndroid: {
    fontSize: 16,
    paddingHorizontal: 10,
    paddingVertical: 8,
    borderWidth: 1,
    borderRadius: 8,
    borderColor: 'gray',
    color: 'black',
    paddingRight: 30, // to ensure the text is never behind the icon
  },
  iconContainer: {
    top: 10,
    right: 15,
  },
});
