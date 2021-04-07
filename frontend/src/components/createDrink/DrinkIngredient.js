import React from 'react';
import { Text, Button, Card } from 'react-native-paper';
import { withTheme } from 'react-native-paper';
import { FontAwesome } from '@expo/vector-icons';

import Spacer from '../theme/Spacer';
import Flex from '../theme/Flex';

function DrinkIngredient({ ingredient, theme }) {
  const { colors } = theme;
  return (
    <Card>
      <Flex row>
        <Spacer>
          <Text style={{ color: colors.background }}>
            {ingredient.quantity} {ingredient.units} of {ingredient.name}
          </Text>
        </Spacer>
        <Button>
          <FontAwesome name="trash" size={32} color="white" />
        </Button>
      </Flex>
    </Card>
  );
}

export default withTheme(DrinkIngredient);
