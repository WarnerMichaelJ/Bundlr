import React from 'react';
import { Link, Redirect } from 'react-router-dom';



const Greeting = ({ currentUser, logout }) => {
  const sessionLinks = () => (
    <nav className="login-signup">
      <Redirect to="/login" />
      {/* <Link to="/login">Login</Link>
      &nbsp;or&nbsp;
      <Link to="/signup">Sign up!</Link> */}
    </nav>
  );
  const personalGreeting = () => (
    <hgroup className="header-group">
      <h2 className="header-name">Hi there, {currentUser.username}!</h2>
      <button className="header-button" onClick={logout}>Log Out</button>
      <br />
      <br />
      <button className="create-your-blog" onClick={logout}>(Put Pencil Icon Here after adding the post_form modal functionality)</button>
      {/* The onClick for pencil icon above, should dispatch a pojo. We should dispatch
      a pojo that updates our redux state to show that we should be displaying our modal. And also
      which modal we should be displaying. What's nice about modals
      is we don't have to dispatch any thunk actions. We just need to update the redux state
      to let the browser know we need to display a modal right now */}
    </hgroup>
  );

  return (
    <div>This is the Splash Page, greeting.jsx</div>
  );
};


export default Greeting;

//Note: Need to change the onClick here from logout to something that will redirect the user to the blog_creation_form 