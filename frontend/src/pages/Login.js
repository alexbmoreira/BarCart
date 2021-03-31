import React, { useState } from 'react';
import { Card, Text, Button, TextInput } from 'react-native-paper';

export default function Login({ navigation }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  return (
    <Card>
      <Text>Login</Text>
      <TextInput placeholder="Username" value={username} onChangeText={(newUsername) => setUsername(newUsername)} autoCapitalize="none" autoCorrect={false} />
      <TextInput placeholder="Password" value={password} onChangeText={(newPassword) => setPassword(newPassword)} autoCapitalize="none" autoCorrect={false} secureTextEntry />
      <Button title="Register" onPress={() => navigation.navigate('Register')}>
        <Text>Register</Text>
      </Button>
      <Button title="Next screen" onPress={() => navigation.navigate('Main')}>
        <Text>Next</Text>
      </Button>
    </Card>
  );
}
