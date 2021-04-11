import React, { useContext, useEffect } from 'react';
import { StyleSheet } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { Card, Text, Title } from 'react-native-paper';
import { useTheme } from 'react-native-paper';
import { FontAwesome } from '@expo/vector-icons';
import BarCartIcons from '../../assets/fonts/BarCartIcons';

import Flex from '../components/theme/Flex';
import Spacer from '../components/theme/Spacer';

import { Context as DrinkContext } from '../contexts/DrinkContext';
import { Context as DrinkDetailContext } from '../contexts/DrinkDetailContext';

function Home({ route, navigation }) {
  const { colors } = useTheme();

  const { drinkID } = route.params;
  const { state: drinkState } = useContext(DrinkContext);
  const { state: detailState, getDrink } = useContext(DrinkDetailContext);

  useEffect(() => {
    const ud = navigation.addListener('focus', async () => {
      if (!detailState.drink || detailState.drink.id !== drinkID) {
        await getDrink(drinkID);
      }
    });
    return ud;
  }, [navigation, drinkID, getDrink, detailState]);

  const drinkIngredients = detailState.drink?.ingredients.map((ing, i) => {
    return (
      <Text key={ing.ingredient}>
        • {ing.name}
        {detailState.drink?.ingredients[i + 1] ? '\n' : null}
      </Text>
    );
  });

  const onTapDrink = () => {
    const liked = drinkState.userOnTap.some((drink) => drink.id === detailState.drink?.id);
    return liked ? <BarCartIcons name="on-tap" size={32} /> : null;
  };

  const likedDrink = () => {
    const liked = drinkState.userLikes.some((drink) => drink.id === detailState.drink?.id);
    return <FontAwesome name={liked ? 'heart' : 'heart-o'} size={32} />;
  };

  return (
    <ScrollView>
      <Spacer>
        <Card>
          <Card.Cover resizeMode="stretch" source={require('../../assets/drink_default.png')} />
          <Card.Content>
            <Title style={{ ...styles.alignText, color: colors.background }} numberOfLines={1}>
              {detailState.drink?.name}
            </Title>
          </Card.Content>
        </Card>
        <Spacer y>
          <Flex row justify="space-between">
            <Title>Created by: {detailState.drink?.creator_username}</Title>
            <Flex row justify="flex-end">
              {onTapDrink()}
              {likedDrink()}
            </Flex>
          </Flex>
        </Spacer>
        <Title>Ingredients:</Title>
        <Text>{drinkIngredients}</Text>
        <Spacer y amout={7} />
        <Title>Instructions:</Title>
        <Text>{detailState.drink?.instructions}</Text>
      </Spacer>
    </ScrollView>
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
    textAlignVertical: 'center',
  },
});

export default Home;
