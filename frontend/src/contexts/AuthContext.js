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
  return ({ username, password }) => {
    // API request
    // success: authenticate, change the state
    // error: send back an error
  };
};

const logout = (dispatch) => {
  return () => {
    // API request
    // success: sign out
  };
};

export const { Provider, Context } = createDataContext(authReducer, { register, login, logout }, { isSignedIn: false });
