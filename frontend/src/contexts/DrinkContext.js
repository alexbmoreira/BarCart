import createDataContext from './createDataContext';

import profileAPI from '../api/profile';

const drinksReducer = (state, action) => {
  switch (action.type) {
    case 'get_user_drinks':
      return action.payload;
    default:
      return state;
  }
};

const getUserDrinks = (dispatch) => {
  return async () => {
    const userDrinks = await profileAPI.getUserDrinks();
    dispatch({ type: 'get_user_drinks', payload: userDrinks });
  };
};

export const { Provider, Context } = createDataContext(drinksReducer, { getUserDrinks }, []);
