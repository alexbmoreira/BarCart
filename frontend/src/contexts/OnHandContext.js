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
  return async () => {
    await onHandAPI.addOnHand([{ ingredient: 2838 }, { ingredient: 2879 }]);
  };
};

export const { Provider, Context } = createDataContext(onHandReducer, { addOnHand }, { onHand: [] });
