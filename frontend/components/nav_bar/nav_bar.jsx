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


    return (
      <div className="nav-bar-parent-div">
        <ul className="nav-bar-ul">
          <li>
            <Link to="/posts">
              <h1><i className="fas fa-file-archive"></i></h1>
            </Link>
          </li>

          <li>   
            <input className="search-bar-input" type="text" placeholder="Search Bundlr" />
          </li>


          <li>
            <Link to={"/"}><i className="fas fa-home"></i></Link>
          </li>

          <li>
            <Link to={"/"}><i className="far fa-compass"></i></Link>
          </li>

          <li>
            <Link to={"/"}><i className="fas fa-envelope-open-text"></i></Link>
          </li>

          <li>
            <Link to={"/"}><i className="far fa-user"></i></Link>
          </li>
          
          <li>
            <Link to={"/"}><i className="far fa-edit"></i></Link>
          </li>

    

        </ul>
      </div>
    );

  }

}

export default NavBar;