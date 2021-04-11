import React from 'react';
import { Text, Button, Card } from 'react-native-paper';
import { withTheme } from 'react-native-paper';
import { FontAwesome } from '@expo/vector-icons';

import Spacer from '../theme/Spacer';
import Flex from '../theme/Flex';

function DrinkIngredient({ removeIngredient, ingredient, isBase, theme }) {
  const { colors } = theme;
  return (
    <Card>
      <Flex row justify="space-between">
        <Spacer>
          <Text style={{ color: colors.background }}>
            {!isBase ? `${ingredient.quantity} ${ingredient.units} of ` : null}
            {ingredient.name}
          </Text>
        </Spacer>
        <Button onPress={removeIngredient.bind(this, ingredient.ingredient)}>
          <FontAwesome name="trash" size={32} color="white" />
        </Button>
      </Flex>
    </Card>
  );
}

export default withTheme(DrinkIngredient);
