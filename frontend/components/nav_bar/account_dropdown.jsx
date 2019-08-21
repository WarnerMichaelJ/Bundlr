import React from 'react';
import { Link, withRouter } from 'react-router-dom';


class AccountDropdown extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      open: false
    };

    this.handleOpen = this.handleOpen.bind(this);
    this.handleClose = this.handleClose.bind(this);
  }

  handleOpen(event) {
    event.preventDefault();
    this.setState({
      open: true
    },
      () => document.addEventListener("click", this.handleClose)
    );
  }

  handleClose(event) {
    event.preventDefault();
    this.setState({
      open: false
    },
      () => document.removeEventListener("click", this.handleClose)
    );
  }

  componentWillUnmount() {
    document.removeEventListener("click", this.handleClose);
  }


  render() {
 
    if (this.state.open) {
      return (
        <div>
          <i className="far fa-user" onClick={this.handleClose} style={{ opacity: '1.0' }} />
          <div className="account-dropdown">

            <div style={{ borderRadius: '10px 10px 0px 0px' }}>Account</div>
            <div className="current-user-dropdown-flex-container">
              <img className="" src={this.props.currentUser.profilePicture} /><div>{this.props.currentUser.username}</div>
            </div>
            <div onClick={() => this.props.history.push("/liked")}>Likes</div>
            <div onClick={() => this.props.history.push("/posts")}>Posts</div>
              <div onClick={this.props.logout} style={{ borderRadius: '0px 0px 10px 10px' }}>Log out</div>
          </div>
        </div>
      );
    } else {
      return (
        <i className="far fa-user" onClick={this.handleOpen}></i>
      );
    }
  }

}

export default withRouter(AccountDropdown);

