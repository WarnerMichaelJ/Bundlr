import merge from 'lodash/merge';

import { RECEIVE_CURRENT_USER } from '../actions/session_actions';

import { RECEIVE_POSTS } from '../actions/post_actions';

import { RECEIVE_USERS } from '../actions/user_actions';

const usersReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_USERS: 

      return merge({}, state, action.users);
    case RECEIVE_POSTS:
      return merge({}, state, action.posts.users);
    case RECEIVE_CURRENT_USER:
      return merge({}, state, { [action.currentUser.id]: action.currentUser });

    default:
      return state;
  }
};

export default usersReducer;
