
import React from 'react';
import ReactDOM from 'react-dom';

import { Link } from 'react-router-dom';

// import PostIndexItem from '../posts/post_index_item';

import RecommendedBlogs from '../blogs/blogs_to_the_right_container';

import ProfileIndexItem from './profile_index_item';

class UserProfile extends React.Component {
  constructor(props) {
    super(props);
    this.body = document.getElementById("app-body");
  }

  componentDidMount() {
    this.body.style.backgroundColor = "#fafafa";
    if (this.props.posts.length === 0) {
      this.props.fetchPosts();
    }
    
    // this.props.fetchLikes();
    // this.props.fetchUsers();
  }

  componentWillUnmount() {
    this.body.style.backgroundColor = "#001935";
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

    let postAuthor = posters[posterId];

    let profilePicture; 
    let username; 
    if (postAuthor !== undefined) {
 
      profilePicture = <img id="round-profile-pic" src={postAuthor.profilePicture}></img>;
      username = <h1 id="user-profile-name">{postAuthor.username}'s Blog </h1>; 
    }
    return (

      <div className="">
        <img id="user-profile-default-background" src="https://bundlr-dev.s3.amazonaws.com/Additional_Images/Tumblr_Default_Background.png" />
        {profilePicture}
        {username}
        <div className="post_index_parent_div index-margin-top">
          <ol className="profile_index_unordered_list">
            {posts}
          </ol>
        </div>
        {/* <RecommendedBlogs /> */}

      </div>

    );
  }

}

export default UserProfile;

