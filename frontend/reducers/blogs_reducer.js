import {
  RECEIVE_BLOG,
  REMOVE_BLOG,
} from '../actions/blog_actions';
import merge from 'lodash/merge';

const blogsReducer = (oldState = {}, action) => {
  Object.freeze(oldState);
  let newState; 
  switch (action.type) {
    case RECEIVE_BLOG:
      return merge({}, oldState, {[action.blog.id]:action.blog});
    case REMOVE_BLOG:
      newState = merge({}, oldState);
      delete newState[action.blogId];
      return newState;
    default:
      return oldState;
  }
};

export default blogsReducer;
