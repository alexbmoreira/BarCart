import React, { useContext } from 'react';
import { StyleSheet } from 'react-native';
import { Text, Title, Button, TextInput, withTheme } from 'react-native-paper';
import { SafeAreaView } from 'react-native-safe-area-context';
import { FontAwesome } from '@expo/vector-icons';

import Spacer from '../components/theme/Spacer';

import { Context as AuthContext } from '../contexts/AuthContext';

function ProfileSettings() {
    const { logout } = useContext(AuthContext);

    const logoutUser = () => {
        logout();
      };

    return(
        <SafeAreaView>
            <Spacer>
                <Button onPress={logoutUser}>Log out</Button>
                <Title>[USERNAME]</Title>
                <Text style={styles.text}>account settings</Text>
            </Spacer>
            <Spacer x>
                <Title>Your on-hand ingredients</Title>
                <TextInput
                mode={'outlined'}
                disabled={true} 
                placeholder={"Ingredients"}
                value={''}
                />
                <Button
                style={styles.button}
                mode={'contained'}
                >
                Edit Ingredients
                </Button>
            </Spacer>
            <Spacer x>
                <Title>Username</Title>
                <TextInput
                mode={'outlined'}
                disabled={true} 
                placeholder={"Username"}
                value={''}
                />
            </Spacer>
            <Spacer x>
                <Title>Password</Title>
                <TextInput
                mode={'outlined'}
                disabled={true} 
                placeholder={"Password"}
                value={''}
                />
            </Spacer>
            <Spacer x>
            <Button
                style={styles.button}
                mode={'contained'}
                >
                Edit Log-In Credentials
                </Button>
            </Spacer>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    button: {
      width: 300,
      margin: 10,
      marginLeft: 37
    },
    text: {
      fontSize: 15
    }
  })

export default withTheme(ProfileSettings);