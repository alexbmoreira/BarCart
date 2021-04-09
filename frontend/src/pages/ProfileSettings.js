import React, { useContext } from 'react';
import { ScrollView } from 'react-native-gesture-handler';
import { Title, Button, TextInput } from 'react-native-paper';

import Spacer from '../components/theme/Spacer';

import { Context as AuthContext } from '../contexts/AuthContext';

function ProfileSettings() {
  const { state, logout } = useContext(AuthContext);

  const logoutUser = () => {
    logout();
  };

  return (
    <ScrollView>
      <Spacer>
        <Button onPress={logoutUser}>Log out</Button>
        <Title>{state.userInfo ? state.userInfo.username : ''}</Title>

        <Spacer y>
          <Title>Your on-hand ingredients</Title>
          <TextInput mode={'outlined'} disabled={true} placeholder={'Ingredients'} value={''} />
        </Spacer>
        <Button mode={'contained'}>Edit Ingredients</Button>

        <Spacer y>
          <Title>Username</Title>
          <TextInput mode={'outlined'} disabled={true} placeholder={'Username'} value={''} />
          <Title>Password</Title>
          <TextInput mode={'outlined'} disabled={true} placeholder={'Password'} value={''} />
        </Spacer>
        <Button mode={'contained'}>Edit Log-In Credentials</Button>
      </Spacer>
    </ScrollView>
  );
}

export default ProfileSettings;
