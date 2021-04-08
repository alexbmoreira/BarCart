import React from 'react';
import { Text, Title, Button } from 'react-native-paper';
import { SafeAreaView } from 'react-native-safe-area-context';

import Spacer from '../components/theme/Spacer';

function Profile({ navigation }) {
  const viewSettings = () => {
    navigation.navigate('ProfileSettings');
  };

  return (
    <SafeAreaView>
      <Text>Profile</Text>
      <Spacer>
        <Button icon={require('../../assets/settings-icon.png')} onPress={() => viewSettings()} />
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

export default Profile;
