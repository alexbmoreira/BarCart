import AsyncStorage from '@react-native-async-storage/async-storage';
import createDataContext from './createDataContext';

import api from '../api/api.service.js';

const authReducer = (state, action) => {
  switch (action.type) {
    case 'add_token':
      return { errorMessage: '', accessToken: action.payload };
    case 'clear_error':
      return { ...state, errorMessage: '' };
    case 'add_error':
      return { ...state, errorMessage: action.payload };
    default:
      return state;
  }
};

const clearError = (dispatch) => {
  return () => {
    dispatch({ type: 'clear_error' });
  };
};

const register = (dispatch) => {
  return async ({ firstName, lastName, username, email, password, confirmPassword }) => {
    try {
      const response = await api.post('/rest-auth/register/', { firstName, lastName, username, email, password1: password, password2: confirmPassword });
      await AsyncStorage.setItem('access_token', response.data.key);
      dispatch({ type: 'add_token', payload: response.data.key });
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
    } catch (e) {
      console.log(e.response.data);
      dispatch({ type: 'add_error', payload: 'Oops! Something went wrong while logging in!' });
    }
  };
};

const logout = (dispatch) => {
  return async () => {
    try {
      const response = await api.post('/rest-auth/logout/');
      console.log(response.data);
    } catch (e) {
      console.log(e.message);
    }
  };
};

export const { Provider, Context } = createDataContext(authReducer, { clearError, register, login, logout }, { accessToken: null, errorMessage: '' });
