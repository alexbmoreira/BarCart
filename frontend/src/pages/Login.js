import React, { useState, useContext, useEffect } from 'react';
import { ScrollView } from 'react-native-gesture-handler';
import { Title, Text, Button, TextInput } from 'react-native-paper';

import Spacer from '../components/theme/Spacer';
import { Context as AuthContext } from '../contexts/AuthContext';

export default function Login({ navigation }) {
  const { state, login, clearError } = useContext(AuthContext);

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const loginUser = () => {
    login({ username, password });
  };

  useEffect(() => {
    navigation.addListener('focus', (e) => {
      clearError();
    });
  }, [navigation, clearError]);

  return (
    <ScrollView>
      <Spacer>
        <Title>Login</Title>
        <TextInput mode={'outlined'} placeholder="Username" value={username} onChangeText={(newUsername) => setUsername(newUsername)} autoCapitalize="none" autoCorrect={false} />
        <Spacer y amount={7} />
        <TextInput mode={'outlined'} placeholder="Password" value={password} onChangeText={(newPassword) => setPassword(newPassword)} autoCapitalize="none" autoCorrect={false} secureTextEntry />
        <Spacer y>
          <Button mode={'contained'} title="Login" onPress={loginUser}>
            Log In
          </Button>
        </Spacer>
        {state.errorMessage ? <Text>{state.errorMessage}</Text> : null}
        <Text>Don't have an Account?</Text>
        <Text onPress={() => navigation.navigate('Register')}>Register</Text>
      </Spacer>
    </ScrollView>
  );
}
