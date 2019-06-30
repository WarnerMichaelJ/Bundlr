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
      <NavBarContainer />
      <PostOptionsDisplayBar />
      <Switch>
        <AuthRoute exact path="/login" component={LogInFormContainer} />
        <AuthRoute exact path="/signup" component={SignUpFormContainer} />


        <ProtectedRoute exact path="/posts" component={PostIndexContainer} />

        <AuthRoute exact path="/" component={GreetingContainer} />

      </Switch>

    </div>
  );
};

export default App;



{/* <ProtectedRoute exact path="/blogs/new" component={CreateBlogFormContainer} />
<ProtectedRoute exact path="/blogs/edit" component={UpdateBlogFormContainer} />

<ProtectedRoute exact path="/blogs/:blogId" component={BlogShowContainer} /> */}
// May add these routes again later 