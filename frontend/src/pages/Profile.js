import React, { useContext } from 'react';
import { Card, Text, Button } from 'react-native-paper';

import { Context as AuthContext } from '../contexts/AuthContext';

export default function Profile() {
  const { logout } = useContext(AuthContext);

  const logoutUser = () => {
    logout();
  };

  return (
    <Card>
      <Text>Profile</Text>
      <Button onPress={logoutUser}>Log out</Button>
    </Card>
  );
}
