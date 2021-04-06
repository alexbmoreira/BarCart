import React from 'react';
import { Card, Title } from 'react-native-paper';
import { withTheme } from 'react-native-paper';
import Spacer from '../theme/Spacer';

function DrinkTile(props) {
  const { colors } = props.theme;
  return (
    <Spacer>
      <Card>
        <Card.Cover source={require('../../../assets/drink_default.png')} />
        <Card.Content>
          <Title style={{ color: colors.background }}>{props.drink.name}</Title>
        </Card.Content>
      </Card>
    </Spacer>
  );
}

export default withTheme(DrinkTile);
