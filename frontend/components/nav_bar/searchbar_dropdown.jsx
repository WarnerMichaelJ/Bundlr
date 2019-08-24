import React from 'react';
import { Link, withRouter } from 'react-router-dom';


class SearchbarDropdown extends React.Component {

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
        <span className='navbar-search'>
          <i className="fas fa-search"></i>
          <input onClick={this.handleClose} className="search-bar-input" type="text" placeholder="Search Bundlr" />
          <section id="searchdropdown">
            Feature Coming Soon
          </section>
        </span>
      );
    } else {
      return (
        <span className='navbar-search'>
          <i className="fas fa-search"></i>
          <input onClick={this.handleOpen} className="search-bar-input" type="text" placeholder="Search Bundlr" />
        </span>
      );
    }
    
  }

}

export default withRouter(SearchbarDropdown);

