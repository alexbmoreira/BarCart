import React from 'react';
import { Card, Text, Button } from 'react-native-paper';

export default function Register({ navigation }) {
  return (
    <Card>
      <Text>Register</Text>
      <Button title="Next screen" onPress={() => navigation.navigate('Main')}>
        <Text>Next</Text>
      </Button>
      <Button title="Login" onPress={() => navigation.navigate('Login')}>
        <Text>Login</Text>
      </Button>
    </Card>
  );
}
