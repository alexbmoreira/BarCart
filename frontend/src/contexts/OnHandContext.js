import createDataContext from './createDataContext';

import onHandAPI from '../api/onHand';

const onHandReducer = (state, action) => {
  switch (action.type) {
    case 'get_on_hand':
      return { ...state, onHand: action.payload };
    default:
      return state;
  }
};

const addOnHand = (dispatch) => {
  return async (ingredients) => {
    await onHandAPI.addOnHand(ingredients);
  };
};

const removeOnHand = (dispatch) => {
  return async (ingredients) => {
    await onHandAPI.removeOnHand(ingredients);
  };
};

const getOnHand = (dispatch) => {
  return async () => {
    const ingredients = await onHandAPI.getOnHand();
    dispatch({ type: 'get_on_hand', payload: ingredients });
  };
};

export const { Provider, Context } = createDataContext(onHandReducer, { addOnHand, removeOnHand, getOnHand }, { onHand: [] });
