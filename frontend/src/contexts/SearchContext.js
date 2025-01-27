import createDataContext from './createDataContext';

import drinksAPI from '../api/drinks';

const drinksReducer = (state, action) => {
  switch (action.type) {
    case 'get_drinks':
      return { ...state, searchDrinks: action.payload };
    default:
      return state;
  }
};

const getDrinks = (dispatch) => {
  return async ({ searchTerm }) => {
    const searchDrinks = await drinksAPI.searchDrinks(searchTerm);
    dispatch({ type: 'get_drinks', payload: searchDrinks });
  };
};

export const { Provider, Context } = createDataContext(drinksReducer, { getDrinks }, { searchDrinks: [] });
