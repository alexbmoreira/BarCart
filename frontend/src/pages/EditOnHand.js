import React from 'react';
import { View } from 'react-native';
import { Button, Text } from 'react-native-paper';

export default function EditOnHand({ navigation }) {
  return (
    <View>
      <Text>Edit on Hand</Text>
      <Button onPress={() => navigation.navigate('OnTap')}>See what's On Tap</Button>
    </View>
  );
}
