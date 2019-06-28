import React from 'react';
import ReactDOM from 'react-dom';

import { Link } from 'react-router-dom';

class PostIndex extends React.Component {
  constructor(props) {
    super(props);

    this.state = props.posts; 
  }

  componentDidMount() {
    this.props.fetchPosts();
    
  }


  render () {
    
  }

}

