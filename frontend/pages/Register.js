import React from 'react';
import { Container, Content, Text, Button } from 'native-base';

export default function Register({ navigation }) {
  return (
    <Container>
      <Content>
        <Text>Register</Text>
        <Button title="Next screen" onPress={() => navigation.navigate('Main')}>
          <Text>Next</Text>
        </Button>
        <Button title="Login" onPress={() => navigation.navigate('Login')}>
          <Text>Login</Text>
        </Button>
      </Content>
    </Container>
  );
}
