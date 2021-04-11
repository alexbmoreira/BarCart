import React, { useContext } from 'react';
import { TouchableOpacity } from 'react-native';
import { Text, Card, Button, Title } from 'react-native-paper';
import { useTheme } from 'react-native-paper';
import { FontAwesome } from '@expo/vector-icons';

import Flex from '../theme/Flex';

import { Context as DrinkContext } from '../../contexts/DrinkContext';
import { Context as LikesContext } from '../../contexts/LikesContext';

import { navigate } from '../../RootNavigation';

function DrinkSearchItem({ drink }) {
  const { colors } = useTheme();

  const { state: drinkState, getUserLikes } = useContext(DrinkContext);
  const { addLikes, removeLikes } = useContext(LikesContext);

  let liked = drinkState.userLikes.some((d) => d.id === drink.id);

  const updateLikes = async () => {
    const update = { drink: drink.id };
    liked ? await removeLikes(update) : await addLikes(update);
    liked = !liked;
    await getUserLikes();
  };

  const likedDrink = () => {
    return (
      <Button onPress={updateLikes}>
        <FontAwesome name={liked ? 'heart' : 'heart-o'} size={32} color={colors.text} />
      </Button>
    );
  };

  return (
    <TouchableOpacity onPress={() => navigate('DrinkDetail', { drinkID: drink.id })}>
      <Card>
        <Card.Content>
          <Flex row justify="space-between">
            <Flex col justify="space-between" align="flex-start">
              <Title style={{ color: colors.background }} numberOfLines={1}>
                {drink.name}
              </Title>
              <Text style={{ color: colors.background }} numberOfLines={1}>
                by {drink.creator_username}
              </Text>
            </Flex>
            {likedDrink()}
          </Flex>
        </Card.Content>
      </Card>
    </TouchableOpacity>
  );
}

export default DrinkSearchItem;
