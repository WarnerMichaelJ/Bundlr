import React from 'react';
import { Link } from 'react-router-dom';
import AccountDropdown from "./account_dropdown";
import SearchbarDropdown from "./searchbar_dropdown";

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
          <Link className="logo" to="/posts">

            <img className="bundlr-logo-image" src="https://bundlr-dev.s3.amazonaws.com/Additional_Images/Bundlr_Icon.png"/>
          </Link>

          
          <SearchbarDropdown />
        </div>

        <ul className="nav-bar-ul">
          

          <li>
            <Link to={"/posts"}><i className="fas fa-home"></i></Link>
          </li>
          <li>
            <a href="https://github.com/WarnerMichaelJ"><i className="fab fa-github"></i></a>
          </li>

          <li>
            <Link className="liked" to={"/liked"}><i id="nav-heart" className="fas nav fa-heart"></i></Link>
          </li>

          <li>
            <Link className="compass-styling" to={"/trendingposts"}><i className="far fa-compass"></i></Link>
          </li>

          <li>
            <AccountDropdown logout={this.logout} currentUser={this.props.actualCurrentUser}/>
          </li>

          <li onClick={() => this.props.openModal("render post creation circles")}>
            <i className="far fa-edit" ></i>
          </li>
        </ul>


      </div>
    );

    const loggedOutNavBar = (
      <header>
        <Link to="/login" className="header-link">
          <h1><img className="bundlr-logo-image logged-out-logo" src="https://bundlr-dev.s3.amazonaws.com/Additional_Images/Bundlr_Icon.png" /></h1>
        </Link>
      </header>
    );

    return this.props.currentUser ? loggedInNavBar : loggedOutNavBar;

  }

}

export default NavBar;