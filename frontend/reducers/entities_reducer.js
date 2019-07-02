import { combineReducers } from 'redux';


import usersReducer from './users_reducer';
import blogsReducer from './blogs_reducer';
import postsReducer from './posts_reducer';
import likesReducer from './likes_reducer';



export default combineReducers({
  users: usersReducer,
  blogs: blogsReducer,
  posts: postsReducer,
  likes: likesReducer, 
});
