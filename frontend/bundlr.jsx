import React from 'react';
import ReactDOM from 'react-dom';
import * as APIUtil from './util/session_api_util';
import * as BlogUtil from './util/blog_util';
import * as BlogThunkActions from './actions/blog_actions';
import * as PostUtil from './util/post_util';

import * as UserUtil from './util/user_util';

import * as LikeUtil from './util/like_util';

import * as PostThunkActions from './actions/post_actions';

import Root from './components/root';
import configureStore from './store/store';

document.addEventListener('DOMContentLoaded', () => {
  let store;
  if (window.currentUser) {
    const preloadedState = {
      session: { id: window.currentUser.id },
      entities: {
        users: { [window.currentUser.id]: window.currentUser }
      }
    };
    store = configureStore(preloadedState);
    delete window.currentUser;
  } else {
    store = configureStore();
  }


  window.store = store; 
  window.LikeUtil = LikeUtil;
  // window.PostThunkActions = PostThunkActions;
  window.PostUtil = PostUtil;
  // window.BlogThunkActions = BlogThunkActions;
  // window.BlogUtil = BlogUtil;

  // window.UserUtil = UserUtil;

  window.logout = APIUtil.logout;
  const root = document.getElementById('root');
  ReactDOM.render(<Root store={store} />, root);
});

