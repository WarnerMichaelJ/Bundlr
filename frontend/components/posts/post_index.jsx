import React from 'react';
import ReactDOM from 'react-dom';

import { Link } from 'react-router-dom';

import PostOptionsDisplayBar from '../post_options_display_bar/post_options_display_bar_container';

import PostIndexItem from './post_index_item';

import NavBar from '../nav_bar/nav_bar_container';

class PostIndex extends React.Component {
  constructor(props) {
    super(props);

  }

  componentDidMount() {
    this.props.fetchPosts();
    this.props.fetchLikes();
  }


  render () {

    if (!this.props.posts) return null;
    let posters = this.props.posters;
    let posts = this.props.posts.map(post => {

      return (
        <PostIndexItem 
          post={post}
          key={post.id}
          deletePost={this.props.deletePost}
          postAuthor={posters[post.author_id]}
          createLike={this.props.createLike}
          removeLike={this.props.removeLike}
          likedIds={this.props.likedIds}
          currentUser={this.props.currentUser}
        />
      );
    });
    
    return (
      <div className="post_index_parent_div">
        <PostOptionsDisplayBar />
        <ol className="post_index_unordered_list">
          {posts}
        </ol>
      </div>
    );
  }

}

export default PostIndex;

