import React from 'react';
import { Link } from 'react-router-dom';


class NavBar extends React.Component {

  constructor(props) {
    super(props);

    this.state = { };
    this.logout = this.logout.bind(this);
  }

  logout() {

    this.props.logout();
  }


  render () {

    const loggedInNavBar = (
      <div className="nav-bar-parent-div">

        <div className="logo-and-search-container">
          <Link to="/posts">
            <i className="fas fa-file-archive"></i>
          </Link>

          <input className="search-bar-input" type="text" placeholder="Search Bundlr" />
 
        </div>

        <ul className="nav-bar-ul">
          

          <li>
            <Link to={"/"}><i className="fas fa-home"></i></Link>
          </li>

          <li>
            <Link to={"/"}><i className="far fa-compass"></i></Link>
          </li>

          {/* <li>
            <Link to={"/"}><i className="fas fa-envelope-open-text"></i></Link>
          </li> */}

          <li>
            <Link to={"/"}><i className="far fa-user"></i></Link>
          </li>

          <li onClick={() => this.props.openModal("render post creation circles")}>
            <i className="far fa-edit" ></i>
          </li>

          <li>
            <button className="header-button" onClick={this.logout}>Log Out</button>
          </li>
        </ul>


      </div>
    );

    const loggedOutNavBar = (
      <header>
        <Link to="/login" className="header-link">
          <h1><i className="fas fa-file-archive"></i></h1>
        </Link>
      </header>
    );

    return this.props.currentUser ? loggedInNavBar : loggedOutNavBar;

  }

}

export default NavBar;