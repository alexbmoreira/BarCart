import React from 'react';
import { Text } from 'react-native-paper';

export default function DrinkTile(props) {
  return <Text>{props.drink.name}</Text>;
}
