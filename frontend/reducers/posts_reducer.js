import {
  RECEIVE_POST,
  REMOVE_POST,
  RECEIVE_POSTS
} from '../actions/post_actions';

import { RECEIVE_LIKE, REMOVE_LIKE } from '../actions/like_actions';

import merge from 'lodash/merge';

const postsReducer = (oldState = {}, action) => {
  Object.freeze(oldState);
  let newState;
  
  switch (action.type) {
    case REMOVE_LIKE:
    
      return merge({}, oldState, { [action.payload.post.id]: action.payload.post });
    case RECEIVE_LIKE:
     
      return merge({}, oldState, {[action.payload.post.id]: action.payload.post});
    case RECEIVE_POSTS:

      return merge({}, oldState, action.posts.posts);
    case RECEIVE_POST:
      return merge({}, oldState, { [action.post.id]: action.post });
    case REMOVE_POST:
      newState = merge({}, oldState);
      delete newState[action.postId];
      return newState;
    default:
      return oldState;
  }
};

export default postsReducer;
