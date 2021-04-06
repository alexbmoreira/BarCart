import createDataContext from './createDataContext';

import profileAPI from '../api/profile';

const drinksReducer = (state, action) => {
  switch (action.type) {
    case 'get_user_drinks':
      return { ...state, userDrinks: action.payload };
    case 'get_user_ontap':
      return { ...state, userOnTap: action.payload };
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

export const { Provider, Context } = createDataContext(drinksReducer, { getUserDrinks, getUserOnTap }, { userDrinks: [], userOnTap: [] });
