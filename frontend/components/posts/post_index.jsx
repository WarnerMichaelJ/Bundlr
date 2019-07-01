import React from 'react';
import ReactDOM from 'react-dom';

import { Link } from 'react-router-dom';


import PostIndexItem from './post_index_item';

import NavBar from '../nav_bar/nav_bar_container';

class PostIndex extends React.Component {
  constructor(props) {
    super(props);

    this.state = this.props.posts; 
  }

  componentDidMount() {
    this.props.fetchPosts();

  }


  render () {

    if (!this.props.posts) return null;

    let posts = this.props.posts.map(post => {
      return (
        <PostIndexItem 
          post={post}
          key={post.id}
          deletePost={this.props.deletePost}
          
        />
      );
    });
    
    return (
      <div className="post_index_parent_div">

        <ul className="post_index_unordered_list">
          {posts}
        </ul>
      </div>
    );
  }

}

export default PostIndex;