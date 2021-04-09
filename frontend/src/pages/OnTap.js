import React, { useContext } from 'react';
import { View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { Button, Title } from 'react-native-paper';

import Spacer from '../components/theme/Spacer';
import DrinkListItem from '../components/common/DrinkListItem';

import { Context as DrinkContext } from '../contexts/DrinkContext';

export default function OnTap({ navigation }) {
  const { state } = useContext(DrinkContext);

  const userOnTapArray = state.userOnTap.map((drink) => {
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
      <Spacer>
        <Title>On Tap</Title>
      </Spacer>
      <ScrollView>
        {userOnTapArray}
        <Spacer x>
          <Button onPress={() => navigation.navigate('EditOnHand')}>Edit on-hand ingredients</Button>
        </Spacer>
      </ScrollView>
    </View>
  );
}
