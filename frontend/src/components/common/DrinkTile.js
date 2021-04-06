import React from 'react';
import { StyleSheet } from 'react-native';
import { Card, Title } from 'react-native-paper';
import { withTheme } from 'react-native-paper';
import Spacer from '../theme/Spacer';

function DrinkTile(props) {
  const { colors } = props.theme;
  return (
    <Spacer>
      <Card style={styles.card}>
        <Card.Cover resizeMode="stretch" style={styles.cardCover} source={require('../../../assets/drink_default.png')} />
        <Card.Content>
          <Title style={{ ...styles.alignText, color: colors.background }} numberOfLines={1}>
            {props.drink.name}
          </Title>
        </Card.Content>
      </Card>
    </Spacer>
  );
}

const styles = StyleSheet.create({
  card: {
    width: 150,
    height: 150,
  },
  cardCover: {
    width: 150,
    height: 110,
  },
  alignText: {
    textAlign: 'center',
  },
});

export default withTheme(DrinkTile);
