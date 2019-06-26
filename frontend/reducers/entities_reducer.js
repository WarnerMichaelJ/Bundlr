import { combineReducers } from 'redux';


import usersReducer from './users_reducer';
import blogsReducer from './blogs_reducer';

export default combineReducers({
  users: usersReducer,
  blogs: blogsReducer,
});
