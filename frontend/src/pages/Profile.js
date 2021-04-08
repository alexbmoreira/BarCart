import React from 'react';
import { Text, Title, Button, withTheme } from 'react-native-paper';

import { SafeAreaView } from 'react-native-safe-area-context';

import { FontAwesome } from '@expo/vector-icons';

import Spacer from '../components/theme/Spacer';

function Profile({navigation, theme}) {
  const { colors } = theme;

  React.useLayoutEffect(() => {
    navigation.setOptions({
      title: 'Profile',
      tabBarIcon: () => <FontAwesome name="user" size={36} color={colors.surface} />,
    });
  }, [navigation, colors.surface]);

  const viewSettings = () => {
    navigation.navigate('ProfileSettings')
  }

  return (
    <SafeAreaView>
      <Text>Profile</Text>
      <Spacer>
        <Button 
          icon={require('../../assets/settings-icon.png')}
          onPress={() => viewSettings()}
        />
      </Spacer>
      <Spacer x>
        <Title>Your Drinks</Title>
      </Spacer>
      <Spacer x>
        <Title>On Tap</Title>
      </Spacer>
    </SafeAreaView>
  );
}

export default withTheme(Profile);
