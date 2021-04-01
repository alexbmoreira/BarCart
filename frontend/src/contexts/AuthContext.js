import createDataContext from './createDataContext';

const authReducer = (state, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

const register = (dispatch) => {
  return ({ firstName, LastName, username, email, password, confirmPassword }) => {
    // make an API request to sign up
    // if we sign up: authenticate, change the state. signedIn = true
    // if not: send back an error
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
