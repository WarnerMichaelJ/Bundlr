
import React from 'react';
import ReactDOM from 'react-dom';

import { Link } from 'react-router-dom';

// import PostIndexItem from '../posts/post_index_item';

import RecommendedBlogs from '../blogs/blogs_to_the_right_container';

import ProfileIndexItem from './profile_index_item';

class UserProfile extends React.Component {
  constructor(props) {
    super(props);

  }

  componentDidMount() {

    if (this.props.posts.length === 0) {
      this.props.fetchPosts();
    }
    
    // this.props.fetchLikes();
    // this.props.fetchUsers();
  }


  render() {

    if (!this.props.posts) return null;
    let posters = this.props.posters;
    let posts = this.props.posts;
    let profileId = parseInt(this.props.profileId);
    let posterId = parseInt(this.props.match.params.profileId);

    posts = posts.filter(post => {

      return post.author_id === posterId;
    });

    posts = posts.map(post => {

      return (
        <ProfileIndexItem
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

      <div className="">
        <img id="user-profile-default-background" src="https://bundlr-dev.s3.amazonaws.com/Additional_Images/Tumblr_Default_Background.png" />
        <div className="post_index_parent_div">

          <ol className="post_index_unordered_list">
            {posts}
          </ol>
        </div>
        {/* <RecommendedBlogs /> */}

      </div>

    );
  }

}

export default UserProfile;

