import React, { useContext, useEffect } from 'react';
import { ScrollView } from 'react-native-gesture-handler';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Text, Title } from 'react-native-paper';

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

  const popularDrinksArray = state.popularDrinks.map((drink, i) => {
    return <DrinkTile key={state.popularDrinks[i].id} drink={state.popularDrinks[i]} />;
  });

  const userDrinksArray = state.userDrinks.map((drink, i) => {
    return <DrinkTile key={state.userDrinks[i].id} drink={state.userDrinks[i]} />;
  });

  const userOnTapArray = state.userOnTap.map((drink, i) => {
    return <DrinkTile key={state.userOnTap[i].id} drink={state.userOnTap[i]} />;
  });

  const userLikesArray = state.userLikes.map((drink, i) => {
    return <DrinkTile key={state.userLikes[i].id} drink={state.userLikes[i]} />;
  });

  return (
    <SafeAreaView>
      <ScrollView>
        <Spacer>
          <Text>BarCart is a mobileapp designed to get the right drink in your hands</Text>
          <Text>Check out the "On Tap" section for drinks that you can make right now</Text>
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
    </SafeAreaView>
  );
}

export default Home;
