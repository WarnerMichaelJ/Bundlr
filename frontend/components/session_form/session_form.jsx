import React from 'react';
import { withRouter } from 'react-router-dom';

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      email: ''
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleDemoLoginSubmit = this.handleDemoLoginSubmit.bind(this);
  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  handleDemoLoginSubmit(event) {
    event.preventDefault();
    
    this.props.processForm({
      username: "Luka_Doncic",
      email: "Luka@gmail.com",
      password: "123456"
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = Object.assign({}, this.state);
    this.props.processForm(user);
  }

  renderErrors() {
    return (
      <ul>
        {this.props.errors.map((error, i) => (
          <li key={`error-${i}`}>
            {error}
          </li>
        ))}
      </ul>
    );
  }

  render() {

    const email = this.props.formType === 'Sign up' ? (
    <label>
        <input type="text"
          value={this.state.email}
          onChange={this.update('email')}
          className="login-input"
          placeholder="Email"
        />
        <br />
    </label> ) : null;

    const demoLogIn = this.props.formType === 'Log in' ? (

      <button className="Demo-Login-Button" onClick={this.handleDemoLoginSubmit}>
        Demo Log In
      </button> 

    ) : null;

    return (
      <div>
        <h3 className="Log-In-Or-Sign-Up"> {this.props.navLink} </h3>
        <div className={"sign-up-login-background"}>
          <div className="login-form-container">
              <form onSubmit={this.handleSubmit} className="login-form-box">
                <h1 className="Bundlr-Big-Text"> bundlr </h1>
                <br />
                {this.renderErrors()}
                <div className="login-form">
                  <br />
                  {email}
                  <label>
                    <input type="text"
                      value={this.state.username}
                      onChange={this.update('username')}
                      className="login-input"
                      placeholder="Username"
                    />
                  </label>
                  <br />
                  <label>
                    <input type="password"
                      value={this.state.password}
                      onChange={this.update('password')}
                      className="login-input"
                      placeholder="Password"
                    />
                  </label>
                  <br />
                  <input className="session-submit" type="submit" value={this.props.formType} />
                  {demoLogIn}
                </div>
              </form>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(SessionForm);
