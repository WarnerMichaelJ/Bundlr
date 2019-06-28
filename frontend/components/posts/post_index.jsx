import React from 'react';
import ReactDOM from 'react-dom';

import { Link } from 'react-router-dom';

import PostIndexItem from './post_index_item';

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
      <div>
        <ul>
          {posts}
        </ul>
      </div>
    );
  }

}

export default PostIndex;