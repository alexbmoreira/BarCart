import React, { useState, useContext, useEffect } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Text, Button, TextInput } from 'react-native-paper';

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
    <SafeAreaView>
      <Text>Login</Text>
      <TextInput placeholder="Username" value={username} onChangeText={(newUsername) => setUsername(newUsername)} autoCapitalize="none" autoCorrect={false} />
      <TextInput placeholder="Password" value={password} onChangeText={(newPassword) => setPassword(newPassword)} autoCapitalize="none" autoCorrect={false} secureTextEntry />
      <Button title="Login" onPress={loginUser}>
        <Text>Log In</Text>
      </Button>
      {state.errorMessage ? <Text>{state.errorMessage}</Text> : null}
      <Text>Don't have an Account?</Text>
      <Text onPress={() => navigation.navigate('Register')}>Register</Text>
    </SafeAreaView>
  );
}
