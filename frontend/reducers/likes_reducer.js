
import {
  RECEIVE_LIKE,
  REMOVE_LIKE
} from '../actions/like_actions';
import merge from 'lodash/merge';

const likesReducer = (oldState = {}, action) => {
  Object.freeze(oldState);
  let newState;

  switch (action.type) {
    case RECEIVE_LIKE:

      return merge({}, oldState, { [action.like.id]: action.like });
    case REMOVE_LIKE:
      newState = merge({}, oldState);
      delete newState[action.likeId];
      return newState;
    default:
      return oldState;
  }
};

export default likesReducer;
