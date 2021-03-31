import React from 'react';
import { Card, Text, Button, TextInput } from 'react-native-paper';

export default function Login({ navigation }) {
  return (
    <Card>
      <Text>Login</Text>
      <TextInput placeholder="Username" />
      <TextInput placeholder="Password" />
      <Button title="Register" onPress={() => navigation.navigate('Register')}>
        <Text>Register</Text>
      </Button>
      <Button title="Next screen" onPress={() => navigation.navigate('Main')}>
        <Text>Next</Text>
      </Button>
    </Card>
  );
}
