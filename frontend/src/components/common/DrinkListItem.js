import React from 'react';
import { Text, Card, Title } from 'react-native-paper';
import { useTheme } from 'react-native-paper';

import Flex from '../theme/Flex';

function DrinkSearchItem({ drink }) {
  const { colors } = useTheme();
  return (
    <Card>
      <Card.Content>
        <Flex row>
          <Title style={{ color: colors.background }} numberOfLines={1}>
            {drink.name}
          </Title>
          <Text style={{ color: colors.background }} numberOfLines={1}>
            by {drink.creator_username}
          </Text>
        </Flex>
      </Card.Content>
    </Card>
  );
}

export default DrinkSearchItem;
