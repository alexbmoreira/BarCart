import createDataContext from './createDataContext';

import drinksAPI from '../api/drinks';

const drinksReducer = (state, action) => {
  switch (action.type) {
    case 'get_user_drinks':
      return { ...state, userDrinks: action.payload };
    case 'get_user_ontap':
      return { ...state, userOnTap: action.payload };
    case 'get_user_likes':
      return { ...state, userLikes: action.payload };
    case 'get_popular_drinks':
      return { ...state, popularDrinks: action.payload };
    default:
      return state;
  }
};

const getUserDrinks = (dispatch) => {
  return async () => {
    const userDrinks = await drinksAPI.getUserDrinks();
    dispatch({ type: 'get_user_drinks', payload: userDrinks });
  };
};

const getUserOnTap = (dispatch) => {
  return async () => {
    const userOnTap = await drinksAPI.getUserOnTap();
    dispatch({ type: 'get_user_ontap', payload: userOnTap });
  };
};

const getUserLikes = (dispatch) => {
  return async () => {
    const userLikes = await drinksAPI.getUserLikes();
    dispatch({ type: 'get_user_likes', payload: userLikes });
  };
};

const getPopularDrinks = (dispatch) => {
  return async () => {
    const popularDrinks = await drinksAPI.getPopularDrinks();
    dispatch({ type: 'get_popular_drinks', payload: popularDrinks });
  };
};

export const { Provider, Context } = createDataContext(drinksReducer, { getUserDrinks, getUserOnTap, getUserLikes, getPopularDrinks }, { userDrinks: [], userOnTap: [], userLikes: [], popularDrinks: [] });
