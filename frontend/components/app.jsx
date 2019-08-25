import React from 'react';
import GreetingContainer from './greeting/greeting_container';
import SignUpFormContainer from './session_form/signup_form_container';
import LogInFormContainer from './session_form/login_form_container';

import { AuthRoute, ProtectedRoute } from '../util/route_util';

import CreateBlogFormContainer from './blogs/create_blog_form_container';
import UpdateBlogFormContainer from './blogs/update_blog_form_container';
import BlogShowContainer from './blogs/blog_show_container';

import PostIndexContainer from './posts/post_index_container';

import NavBarContainer from './nav_bar/nav_bar_container';

import PostOptionsDisplayBar from './post_options_display_bar/post_options_display_bar_container';

import TrendingPosts from './posts/trending_posts/trending_posts_index_container';

import LikedPostsIndex from './posts/liked_posts_index_container';

import UserProfileContainer from './user_profile/user_profile_container';

import Modal from './modal/modal';

import {
  Route,
  Redirect,
  Switch,
  Link,
  HashRouter
} from 'react-router-dom';


const App = () => {
  return (
    <div>
      <Modal /> 
      <NavBarContainer />
      
      <Switch>
        <AuthRoute exact path="/login" component={LogInFormContainer} />
        <AuthRoute exact path="/signup" component={SignUpFormContainer} />
        <ProtectedRoute exact path="/posts" component={PostIndexContainer} />
        <ProtectedRoute exact path="/trendingposts" component={TrendingPosts} />
        <ProtectedRoute exact path="/liked" component={LikedPostsIndex} />
        <ProtectedRoute exact path="/users/:profileId" component={UserProfileContainer} />
        <ProtectedRoute path="/" component={PostIndexContainer} />
      </Switch>

    </div>
  );
};

export default App;

