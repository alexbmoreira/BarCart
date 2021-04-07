import createDataContext from './createDataContext';

import { navigate } from '../RootNavigation';

import drinksAPI from '../api/drinks';

const drinksReducer = (state, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

const createDrink = (dispatch) => {
  return async ({ name, instructions, ingredients }) => {
    await drinksAPI.createDrink({ name, instructions, ingredients });
    navigate('Main');
  };
};

export const { Provider, Context } = createDataContext(drinksReducer, { createDrink }, {});
