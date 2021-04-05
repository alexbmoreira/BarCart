import React, { useState, useContext, useEffect } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Text, Button, TextInput } from 'react-native-paper';

import { Context as AuthContext } from '../contexts/AuthContext';

export default function Register({ navigation }) {
  const { state, register, clearError } = useContext(AuthContext);

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const registerUser = () => {
    register({ firstName, lastName, username, email, password, confirmPassword });
    navigation.navigate('Main');
  };

  useEffect(() => {
    navigation.addListener('focus', (e) => {
      clearError();
    });
  }, [navigation, clearError]);

  return (
    <SafeAreaView>
      <Text>Register</Text>
      <TextInput placeholder="First Name" value={firstName} onChangeText={(newFirstName) => setFirstName(newFirstName)} />
      <TextInput placeholder="Last Name" value={lastName} onChangeText={(newLastName) => setLastName(newLastName)} />
      <TextInput placeholder="Username" value={username} onChangeText={(newUsername) => setUsername(newUsername)} autoCapitalize="none" autoCorrect={false} />
      <TextInput placeholder="Email Address" value={email} onChangeText={(newEmail) => setEmail(newEmail)} autoCapitalize="none" autoCorrect={false} />
      <TextInput placeholder="Password" value={password} onChangeText={(newPassword) => setPassword(newPassword)} autoCapitalize="none" autoCorrect={false} secureTextEntry />
      <TextInput placeholder="Confirm Password" value={confirmPassword} onChangeText={(newConfirmPassword) => setConfirmPassword(newConfirmPassword)} autoCapitalize="none" autoCorrect={false} secureTextEntry />
      <Button title="Register" onPress={registerUser}>
        <Text>Register</Text>
      </Button>
      {state.errorMessage ? <Text>{state.errorMessage}</Text> : null}
      <Text>Already have an account?</Text>
      <Text onPress={() => navigation.navigate('Login')}>Log In</Text>
    </SafeAreaView>
  );
}
