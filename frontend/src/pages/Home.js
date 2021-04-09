import React, { useContext, useEffect } from 'react';
import { ScrollView } from 'react-native-gesture-handler';
import { Button, Text, Title } from 'react-native-paper';

import Spacer from '../components/theme/Spacer';
import DrinkTile from '../components/common/DrinkTile';

import { Context as DrinkContext } from '../contexts/DrinkContext';

function Home({ navigation, theme }) {
  const { state, getPopularDrinks, getUserDrinks, getUserOnTap, getUserLikes } = useContext(DrinkContext);

  useEffect(() => {
    const ud = navigation.addListener('focus', async () => {
      await getPopularDrinks();
      await getUserDrinks();
      await getUserOnTap();
      await getUserLikes();
    });
    return ud;
  }, [navigation, getPopularDrinks, getUserDrinks, getUserOnTap, getUserLikes, state]);

  const popularDrinksArray = state.popularDrinks.map((drink) => {
    return <DrinkTile key={drink.id} drink={drink} />;
  });

  const userDrinksArray = state.userDrinks.map((drink) => {
    return <DrinkTile key={drink.id} drink={drink} />;
  });

  const userOnTapArray = state.userOnTap.map((drink) => {
    return <DrinkTile key={drink.id} drink={drink} />;
  });

  const userLikesArray = state.userLikes.map((drink) => {
    return <DrinkTile key={drink.id} drink={drink} />;
  });

  return (
    <ScrollView>
      <Button onPress={() => navigation.navigate('DrinkDetail')}>Go to drink detail page (remove me!)</Button>
      <Spacer>
        <Title>BarCart is an app designed to get the right drink in your hands!</Title>
        <Text>Check out the "On Tap" section for drinks that you can make right now.</Text>
      </Spacer>
      <Spacer x>
        <Title>Popular</Title>
      </Spacer>
      <ScrollView horizontal>{popularDrinksArray}</ScrollView>
      <Spacer x>
        <Title>Your Drinks</Title>
      </Spacer>
      <ScrollView horizontal>{userDrinksArray}</ScrollView>
      <Spacer x>
        <Title>On Tap</Title>
      </Spacer>
      <ScrollView horizontal>{userOnTapArray}</ScrollView>
      <Spacer x>
        <Title>Your Likes</Title>
      </Spacer>
      <ScrollView horizontal>{userLikesArray}</ScrollView>
    </ScrollView>
  );
}

export default Home;
