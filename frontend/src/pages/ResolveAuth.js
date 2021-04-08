import { useContext, useEffect } from 'react';

import { Context as AuthContext } from '../contexts/AuthContext';

export default function Login({ navigation }) {
  const { tryLocalLogin } = useContext(AuthContext);

  useEffect(() => {
    const loc = navigation.addListener('focus', async () => {
      tryLocalLogin();
    });
    return loc;
  }, [navigation, tryLocalLogin]);

  return null;
}
