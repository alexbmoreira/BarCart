import React, { useContext } from 'react';
import { ScrollView } from 'react-native-gesture-handler';
import { Title } from 'react-native-paper';

import Spacer from '../components/theme/Spacer';
import Flex from '../components/theme/Flex';
import DrinkTile from '../components/common/DrinkTile';

import { Context as DrinkContext } from '../contexts/DrinkContext';
import { Context as AuthContext } from '../contexts/AuthContext';

function Profile({ navigation }) {
  const { state: drinkState } = useContext(DrinkContext);
  const { state: authState } = useContext(AuthContext);

  const userDrinksArray = drinkState.userDrinks.map((drink, i) => {
    return <DrinkTile key={drinkState.userDrinks[i].id} drink={drinkState.userDrinks[i]} />;
  });

  const userOnTapArray = drinkState.userOnTap.map((drink, i) => {
    return <DrinkTile key={drinkState.userOnTap[i].id} drink={drinkState.userOnTap[i]} />;
  });

  return (
    <ScrollView>
      <Spacer>
        <Flex row>
          <Title>{authState.userInfo?.username}</Title>
        </Flex>
      </Spacer>
      <Spacer x>
        <Title>Your Drinks</Title>
      </Spacer>
      <ScrollView horizontal>{userDrinksArray}</ScrollView>
      <Spacer x>
        <Title>On Tap</Title>
      </Spacer>
      <ScrollView horizontal>{userOnTapArray}</ScrollView>
    </ScrollView>
  );
}

export default Profile;
