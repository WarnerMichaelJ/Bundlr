
import React from 'react';

import { Link } from 'react-router-dom';

import PostIndexItem from './post_index_item';

import RecommendedBlogs from '../blogs/blogs_to_the_right_container';

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

    let posts; 
    if (likedPosts.length > 0) {
      posts = likedPosts.map(post => {

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
    } else {
      posts = (
        <div className="index_item_container">
          <div className="user_profile_pic">
            {/* <img className="user_profile_pic_image" src={postAuthor.profilePicture} /> */}
          </div>
          <li className="post_index_list_item">

            <h3 id="no-liked-posts-prompt">Like some posts!</h3>
            <h3 id="no-liked-posts-prompt2">Head back to the posts index and click the heart icon on posts you like</h3>
            {/* <i className="far fa-heart" id="no-liked-posts-prompt "></i> */}

          </li>
        </div>
      );
    }
    

    return (
      <div className="index_and_blogs_to_right">
        <div className="liked_post_index_parent_div">

          <ol className="post_index_unordered_list">
            {posts}
          </ol>
        </div>
        <RecommendedBlogs />
      </div>
    );
  }

}

export default LikedPostsIndex;
