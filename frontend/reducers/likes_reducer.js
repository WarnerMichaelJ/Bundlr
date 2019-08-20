
import {
  RECEIVE_LIKE,
  REMOVE_LIKE,
  RECEIVE_LIKES,
} from '../actions/like_actions';
import merge from 'lodash/merge';

const likesReducer = (oldState = {}, action) => {
  Object.freeze(oldState);
  let newState;

  switch (action.type) {
    case RECEIVE_LIKES:
      return merge({}, oldState, action.likes);
    case RECEIVE_LIKE:

      return merge({}, oldState, { [action.payload.like.id]: action.payload.like });
    case REMOVE_LIKE:

      newState = merge({}, oldState);
      delete newState[action.payload.like.id];
      return newState;
    default:
      return oldState;
  }
};

export default likesReducer;
