import React, { useState, useContext, useEffect } from 'react';
import { ScrollView } from 'react-native-gesture-handler';
import { Title, Text, Button, TextInput } from 'react-native-paper';

import Spacer from '../components/theme/Spacer';
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
    <ScrollView>
      <Spacer>
        <Title>Register</Title>
        <TextInput mode={'outlined'} placeholder="First Name" value={firstName} onChangeText={(newFirstName) => setFirstName(newFirstName)} />
        <Spacer y amount={7} />
        <TextInput mode={'outlined'} placeholder="Last Name" value={lastName} onChangeText={(newLastName) => setLastName(newLastName)} />
        <Spacer y amount={7} />
        <TextInput mode={'outlined'} placeholder="Username" value={username} onChangeText={(newUsername) => setUsername(newUsername)} autoCapitalize="none" autoCorrect={false} />
        <Spacer y amount={7} />
        <TextInput mode={'outlined'} placeholder="Email Address" value={email} onChangeText={(newEmail) => setEmail(newEmail)} autoCapitalize="none" autoCorrect={false} />
        <Spacer y amount={7} />
        <TextInput mode={'outlined'} placeholder="Password" value={password} onChangeText={(newPassword) => setPassword(newPassword)} autoCapitalize="none" autoCorrect={false} secureTextEntry />
        <Spacer y amount={7} />
        <TextInput mode={'outlined'} placeholder="Confirm Password" value={confirmPassword} onChangeText={(newConfirmPassword) => setConfirmPassword(newConfirmPassword)} autoCapitalize="none" autoCorrect={false} secureTextEntry />
        <Spacer y>
          <Button title="Register" onPress={registerUser}>
            <Text>Register</Text>
          </Button>
        </Spacer>
        {state.errorMessage ? <Text>{state.errorMessage}</Text> : null}
        <Text>Already have an account?</Text>
        <Text onPress={() => navigation.navigate('Login')}>Log In</Text>
      </Spacer>
    </ScrollView>
  );
}
