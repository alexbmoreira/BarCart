import React from 'react';
import { Container, Content, Text, Button } from 'native-base';

export default function Login({ navigation }) {
  return (
    <Container>
      <Content>
        <Text>Login</Text>
        <Button title="Next screen" onPress={() => navigation.navigate('Main')}>
          <Text>Next</Text>
        </Button>
        <Button title="Register" onPress={() => navigation.navigate('Register')}>
          <Text>Register</Text>
        </Button>
      </Content>
    </Container>
  );
}
