import createDataContext from './createDataContext';

import profileAPI from '../api/profile';

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
    const userDrinks = await profileAPI.getUserDrinks();
    dispatch({ type: 'get_user_drinks', payload: userDrinks });
  };
};

const getUserOnTap = (dispatch) => {
  return async () => {
    const userOnTap = await profileAPI.getUserOnTap();
    dispatch({ type: 'get_user_ontap', payload: userOnTap });
  };
};

const getUserLikes = (dispatch) => {
  return async () => {
    const userLikes = await profileAPI.getUserLikes();
    dispatch({ type: 'get_user_likes', payload: userLikes });
  };
};

const getPopularDrinks = (dispatch) => {
  return async () => {
    const popularDrinks = await profileAPI.getPopularDrinks();
    dispatch({ type: 'get_popular_drinks', payload: popularDrinks });
  };
};

export const { Provider, Context } = createDataContext(drinksReducer, { getUserDrinks, getUserOnTap, getUserLikes, getPopularDrinks }, { userDrinks: [], userOnTap: [], userLikes: [], popularDrinks: [] });
