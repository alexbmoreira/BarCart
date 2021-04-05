import React, { useContext } from 'react';
import { Text, Button } from 'react-native-paper';
import { SafeAreaView } from 'react-native-safe-area-context';

import { Context as AuthContext } from '../contexts/AuthContext';

export default function Profile() {
  const { logout } = useContext(AuthContext);

  const logoutUser = () => {
    logout();
  };

  return (
    <SafeAreaView>
      <Text>Profile</Text>
      <Button onPress={logoutUser}>Log out</Button>
    </SafeAreaView>
  );
}
