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
  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
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

    const email = this.props.formType === 'signup' ? (
    <label>
        <input type="text"
          value={this.state.email}
          onChange={this.update('email')}
          className="login-input"
          placeholder="Email"
        />
        <br />
    </label> ) : null;

    

    return (
      <div className="login-form-container">
        <div className="background-of-session-form">
          <form onSubmit={this.handleSubmit} className="login-form-box">
            <h1 className="Bundlr-Big-Text"> bundlr </h1>
            <br />
            <h3 className="Please-this-or-this"> Please {this.props.formType} or {this.props.navLink} </h3>
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
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default withRouter(SessionForm);
