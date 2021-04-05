import { useContext, useEffect } from 'react';

import { Context as AuthContext } from '../contexts/AuthContext';

export default function Login({ navigation }) {
  const { tryLocalLogin } = useContext(AuthContext);

  useEffect(() => {
    tryLocalLogin();
  }, [tryLocalLogin]);

  return null;
}
