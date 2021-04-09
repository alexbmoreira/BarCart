import createDataContext from './createDataContext';

import drinksAPI from '../api/drinks';

const drinksReducer = (state, action) => {
  switch (action.type) {
    case 'get_drink':
      return { drink: action.payload };
    default:
      return state;
  }
};

const getDrink = (dispatch) => {
  return async (drinkID) => {
    const drink = await drinksAPI.getDrink(drinkID);
    dispatch({ type: 'get_drink', payload: drink });
  };
};

export const { Provider, Context } = createDataContext(drinksReducer, { getDrink }, { drink: null });
