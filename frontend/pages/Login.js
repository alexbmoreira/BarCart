import React from 'react';
import { Card, Text, Button } from 'react-native-paper';

export default function Login({ navigation }) {
  return (
    <Card>
      <Text>Login</Text>
      <Button title="Next screen" onPress={() => navigation.navigate('Main')}>
        <Text>Next</Text>
      </Button>
      <Button title="Register" onPress={() => navigation.navigate('Register')}>
        <Text>Register</Text>
      </Button>
    </Card>
  );
}
