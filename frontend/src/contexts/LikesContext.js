import createDataContext from './createDataContext';

import likesAPI from '../api/likes';

const likesReducer = (state, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

const addLikes = (dispatch) => {
  return async (like) => {
    await likesAPI.addLikes(like);
  };
};

const removeLikes = (dispatch) => {
  return async (like) => {
    await likesAPI.removeLikes(like);
  };
};

export const { Provider, Context } = createDataContext(likesReducer, { addLikes, removeLikes }, {});
