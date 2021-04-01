import createDataContext from './createDataContext';

import api from '../api/api.service.js';

const authReducer = (state, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

const register = (dispatch) => {
  return async ({ firstName, lastName, username, email, password, confirmPassword }) => {
    try {
      const response = await api.post('/rest-auth/register/', { firstName, lastName, username, email, password1: password, password2: confirmPassword });
      console.log(response.data);
    } catch (e) {
      console.log(e.message);
    }
  };
};

const login = (dispatch) => {
  return async ({ username, password }) => {
    try {
      const response = await api.post('/rest-auth/login/', { username, password });
      console.log(response.data);
    } catch (e) {
      console.log(e.message);
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

export const { Provider, Context } = createDataContext(authReducer, { register, login, logout }, { isSignedIn: false });
