import React, { useContext } from 'react';
import { View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

import Spacer from '../components/theme/Spacer';
import DrinkListItem from '../components/common/DrinkListItem';

import { Context as DrinkContext } from '../contexts/DrinkContext';

export default function YourDrinks({ navigation }) {
  const { state } = useContext(DrinkContext);

  const userDrinksArray = state.userDrinks.map((drink) => {
    return (
      <View key={drink.id}>
        <Spacer x>
          <DrinkListItem drink={drink} />
          <Spacer amount={5} />
        </Spacer>
      </View>
    );
  });

  return (
    <View>
      <Spacer y>
        <ScrollView>{userDrinksArray}</ScrollView>
      </Spacer>
    </View>
  );
}
