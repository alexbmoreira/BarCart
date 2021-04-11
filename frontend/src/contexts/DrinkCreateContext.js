import createDataContext from './createDataContext';

import { navigate } from '../RootNavigation';

import drinksAPI from '../api/drinks';

const drinksReducer = (state, action) => {
  switch (action.type) {
    case 'get_ingredients':
      return { ...state, ingredientsList: action.payload };
    default:
      return state;
  }
};

const createDrink = (dispatch) => {
  return async ({ name, instructions, ingredients }) => {
    await drinksAPI.createDrink({ name, instructions, ingredients });
    navigate('YourDrinks');
  };
};

const getIngredients = (dispatch) => {
  return async () => {
    const ingredients = await drinksAPI.getIngredients();
    dispatch({ type: 'get_ingredients', payload: ingredients });
  };
};

export const { Provider, Context } = createDataContext(drinksReducer, { createDrink, getIngredients }, { ingredientsList: [] });
