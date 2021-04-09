import React from 'react';
import { View } from 'react-native';
import { Button, Text } from 'react-native-paper';

export default function OnTap({ navigation }) {
  return (
    <View>
      <Text>On Tap</Text>
      <Button onPress={() => navigation.navigate('EditOnHand')}>Edit on-hand ingredients</Button>
    </View>
  );
}
