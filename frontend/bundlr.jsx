import React from 'react';
import ReactDOM from 'react-dom';
import * as APIUtil from './util/session_api_util';
import * as BlogUtil from './util/blog_util';
import * as BlogThunkActions from './actions/blog_actions';
import * as PostUtil from './util/post_util';

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
  // window.PostUtil = PostUtil;
  // window.BlogThunkActions = BlogThunkActions;
  // window.BlogUtil = BlogUtil;
  // window.logout = APIUtil.logout;
  const root = document.getElementById('root');
  ReactDOM.render(<Root store={store} />, root);
});

