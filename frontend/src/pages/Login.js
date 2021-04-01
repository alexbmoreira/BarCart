import React, { useState } from 'react';
import { View } from 'react-native';
import { Text, Button, TextInput } from 'react-native-paper';

export default function Login({ navigation }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  return (
    <View>
      <Text>Login</Text>
      <TextInput placeholder="Username" value={username} onChangeText={(newUsername) => setUsername(newUsername)} autoCapitalize="none" autoCorrect={false} />
      <TextInput placeholder="Password" value={password} onChangeText={(newPassword) => setPassword(newPassword)} autoCapitalize="none" autoCorrect={false} secureTextEntry />
      <Button title="Login" onPress={() => navigation.navigate('Main')}>
        <Text>Log In</Text>
      </Button>
      <Text>Don't have an Account?</Text>
      <Text onPress={() => navigation.navigate('Register')}>Register</Text>
    </View>
  );
}
