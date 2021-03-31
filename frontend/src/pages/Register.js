import React from 'react';
import { Card, Text, Button, TextInput } from 'react-native-paper';

export default function Register({ navigation }) {
  return (
    <Card>
      <Text>Register</Text>
      <TextInput placeholder="First Name" />
      <TextInput placeholder="Last Name" />
      <TextInput placeholder="Username" />
      <TextInput placeholder="Email Address" />
      <TextInput placeholder="Password" />
      <TextInput placeholder="Confirm Password" />
      <Button title="Login" onPress={() => navigation.navigate('Login')}>
        <Text>Login</Text>
      </Button>
      <Button title="Next screen" onPress={() => navigation.navigate('Main')}>
        <Text>Next</Text>
      </Button>
    </Card>
  );
}
