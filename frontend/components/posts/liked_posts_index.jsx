
import React from 'react';

import { Link } from 'react-router-dom';

import PostIndexItem from './post_index_item';



class LikedPostsIndex extends React.Component {
  constructor(props) {
    super(props);

  }

  componentDidMount() {
    this.props.fetchPosts();
    this.props.fetchLikes();
  }


  render() {

    if (!this.props.posts) return null;
    let posters = this.props.posters;

 

    let likedPosts = [];

    this.props.posts.forEach((post) => {
      if (this.props.likedIds.includes(post.id)) {
        likedPosts.push(post);
      }
    });

    let posts = likedPosts.map(post => {

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

        <ol className="post_index_unordered_list">
          {posts}
        </ol>
      </div>
    );
  }

}

export default LikedPostsIndex;
