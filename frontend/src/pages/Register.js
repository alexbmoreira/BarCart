import React, { useState } from 'react';
import { Card, Text, Button, TextInput } from 'react-native-paper';

export default function Register({ navigation }) {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  return (
    <Card>
      <Text>Register</Text>
      <TextInput placeholder="First Name" value={firstName} onChangeText={(newFirstName) => setFirstName(newFirstName)} />
      <TextInput placeholder="Last Name" value={lastName} onChangeText={(newLastName) => setLastName(newLastName)} />
      <TextInput placeholder="Username" value={username} onChangeText={(newUsername) => setUsername(newUsername)} autoCapitalize="none" autoCorrect={false} />
      <TextInput placeholder="Email Address" value={email} onChangeText={(newEmail) => setEmail(newEmail)} autoCapitalize="none" autoCorrect={false} />
      <TextInput placeholder="Password" value={password} onChangeText={(newPassword) => setPassword(newPassword)} autoCapitalize="none" autoCorrect={false} secureTextEntry />
      <TextInput placeholder="Confirm Password" value={confirmPassword} onChangeText={(newConfirmPassword) => setConfirmPassword(newConfirmPassword)} autoCapitalize="none" autoCorrect={false} secureTextEntry />
      <Button title="Login" onPress={() => navigation.navigate('Login')}>
        <Text>Login</Text>
      </Button>
      <Button title="Next screen" onPress={() => navigation.navigate('Main')}>
        <Text>Next</Text>
      </Button>
    </Card>
  );
}
