import React from 'react';
import { StyleSheet } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Card, Title } from 'react-native-paper';
import { useTheme } from 'react-native-paper';

import Spacer from '../theme/Spacer';

import { navigate } from '../../RootNavigation';

function DrinkTile({ drink }) {
  const { colors } = useTheme();
  return (
    <Spacer>
      <TouchableOpacity onPress={() => navigate('DrinkDetail')}>
        <Card style={styles.card}>
          <Card.Cover resizeMode="stretch" style={styles.cardCover} source={require('../../../assets/drink_default.png')} />
          <Card.Content>
            <Title style={{ ...styles.alignText, color: colors.background }} numberOfLines={1}>
              {drink.name}
            </Title>
          </Card.Content>
        </Card>
      </TouchableOpacity>
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

export default DrinkTile;
