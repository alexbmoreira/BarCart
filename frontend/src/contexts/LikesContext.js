import createDataContext from './createDataContext';

import likesAPI from '../api/likes';
import likes from '../api/likes';

const likesReducer = (state, action) => {
  switch (action.type) {
    case 'get_likes':
      return { ...state, likes: action.payload };
    case 'add_like':
      return { ...state, likes: [...likes, action.payload] };
    case 'remove_like':
      return { ...state, likes: likes.filter((d) => d.id !== action.payload.drink) };
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

const getLikes = (dispatch) => {
  return async () => {
    const ingredients = await likesAPI.getLikes();
    dispatch({ type: 'get_likes', payload: ingredients });
  };
};

export const { Provider, Context } = createDataContext(likesReducer, { addLikes, removeLikes, getLikes }, { likes: [] });
