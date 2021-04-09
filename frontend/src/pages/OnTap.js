import React, { useContext } from 'react';
import { View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { Button } from 'react-native-paper';

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
      <Spacer y>
        <ScrollView>
          {userOnTapArray}
          <Spacer x>
            <Button mode={'contained'} onPress={() => navigation.navigate('EditOnHand')}>
              Edit on-hand ingredients
            </Button>
          </Spacer>
        </ScrollView>
      </Spacer>
    </View>
  );
}
