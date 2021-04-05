import AsyncStorage from '@react-native-async-storage/async-storage';
import createDataContext from './createDataContext';

import { navigate } from '../RootNavigation';

import api from '../api/api.service.js';

const authReducer = (state, action) => {
  switch (action.type) {
    case 'add_token':
      return { errorMessage: '', accessToken: action.payload };
    case 'clear_token':
      return { errorMessage: '', accessToken: null };
    case 'add_error':
      return { ...state, errorMessage: action.payload };
    case 'clear_error':
      return { ...state, errorMessage: '' };
    default:
      return state;
  }
};

const clearError = (dispatch) => {
  return () => {
    dispatch({ type: 'clear_error' });
  };
};

const tryLocalLogin = (dispatch) => {
  return async () => {
    const token = await AsyncStorage.getItem('access_token');
    if (token) {
      dispatch({ type: 'add_token', payload: token });
      navigate('Main');
    } else {
      navigate('Login');
    }
  };
};

const register = (dispatch) => {
  return async ({ firstName, lastName, username, email, password, confirmPassword }) => {
    try {
      const response = await api.post('/rest-auth/register/', { firstName, lastName, username, email, password1: password, password2: confirmPassword });
      await AsyncStorage.setItem('access_token', response.data.key);
      dispatch({ type: 'add_token', payload: response.data.key });
      navigate('Main');
    } catch (e) {
      dispatch({ type: 'add_error', payload: 'Oops! Something went wrong while signing up!' });
    }
  };
};

const login = (dispatch) => {
  return async ({ username, password }) => {
    try {
      const response = await api.post('/rest-auth/login/', { username, password });
      await AsyncStorage.setItem('access_token', response.data.key);
      dispatch({ type: 'add_token', payload: response.data.key });
      navigate('Main');
    } catch (e) {
      dispatch({ type: 'add_error', payload: 'Oops! Something went wrong while logging in!' });
    }
  };
};

const logout = (dispatch) => {
  return async () => {
    try {
      await api.post('/rest-auth/logout/');
      await AsyncStorage.removeItem('access_token');
      dispatch({ type: 'clear_token' });
      navigate('Login');
    } catch (e) {
      console.log(e.message);
    }
  };
};

export const { Provider, Context } = createDataContext(authReducer, { clearError, tryLocalLogin, register, login, logout }, { accessToken: null, errorMessage: '' });
