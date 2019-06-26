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
    </hgroup>
  );

  return currentUser ? personalGreeting() : sessionLinks();
};


export default Greeting;