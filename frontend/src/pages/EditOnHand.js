import React, { useContext } from 'react';
import { View } from 'react-native';
import { Button, Text } from 'react-native-paper';

import { Context as OnHandContext } from '../contexts/OnHandContext';

export default function EditOnHand({ navigation }) {
  const { state, addOnHand } = useContext(OnHandContext);

  return (
    <View>
      <Text>Edit on Hand</Text>
      <Button onPress={() => addOnHand()}>Add ingredients</Button>
      <Button onPress={() => navigation.navigate('OnTap')}>See what's On Tap</Button>
    </View>
  );
}
