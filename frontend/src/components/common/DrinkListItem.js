import React from 'react';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Text, Card, Title } from 'react-native-paper';
import { useTheme } from 'react-native-paper';

import Flex from '../theme/Flex';

import { navigate } from '../../RootNavigation';

function DrinkSearchItem({ drink }) {
  const { colors } = useTheme();
  return (
    <TouchableOpacity onPress={() => navigate('DrinkDetail', { drinkID: drink.id })}>
      <Card>
        <Card.Content>
          <Flex row justify="space-between">
            <Title style={{ color: colors.background }} numberOfLines={1}>
              {drink.name}
            </Title>
            <Text style={{ color: colors.background }} numberOfLines={1}>
              by {drink.creator_username}
            </Text>
          </Flex>
        </Card.Content>
      </Card>
    </TouchableOpacity>
  );
}

export default DrinkSearchItem;
