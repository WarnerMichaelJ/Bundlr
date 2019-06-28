import React from 'react';
import GreetingContainer from './greeting/greeting_container';
import SignUpFormContainer from './session_form/signup_form_container';
import LogInFormContainer from './session_form/login_form_container';

import { AuthRoute, ProtectedRoute } from '../util/route_util';

import CreateBlogFormContainer from './blogs/create_blog_form_container';
import UpdateBlogFormContainer from './blogs/update_blog_form_container';
import BlogShowContainer from './blogs/blog_show_container';



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
      <header>
        <Link to="/" className="header-link">
          <h1><i className='fas fa-basketball-ball' ></i></h1>
        </Link>
      </header>
        <Switch>
          <AuthRoute exact path="/login" component={LogInFormContainer} />
          <AuthRoute exact path="/signup" component={SignUpFormContainer} />

          <ProtectedRoute exact path="/blogs/new" component={CreateBlogFormContainer} />
          <ProtectedRoute exact path="/blogs/edit" component={UpdateBlogFormContainer} /> 

          <AuthRoute exact path="/blogs/:blogId" component={BlogShowContainer} />

          

          <Route path="/" component={GreetingContainer} />

        </Switch>

    </div>
  );
};

export default App;