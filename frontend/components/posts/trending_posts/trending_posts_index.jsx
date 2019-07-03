import React from 'react';

import { Link } from 'react-router-dom';



import TrendingPostIndexItem from './trending_posts_index_item'

class TrendingPosts extends React.Component {
  constructor(props) {
    super(props);

    this.state = this.props.posts;
  }

  componentDidMount() {
    this.props.fetchPosts();

  }


  render() {

    if (!this.props.posts) return null;
    let posters = this.props.posters;
    // debugger; 
    let postsCount = {};

    let selectedPosts = [];
    
    this.props.posts.forEach(post => {
      if (!postsCount[post.author_id]) {
        selectedPosts.push(post);
        postsCount[post.author_id] = 1;
      }
      
    });

    let selectedPostsFromEachUser = selectedPosts.map(post => {

      return (
        <TrendingPostIndexItem
          post={post}
          key={post.id}
          deletePost={this.props.deletePost}
          postAuthor={posters[post.author_id]}
          createLike={this.props.createLike}
          removeLike={this.props.removeLike}
        />
      );
    });

    return (
      <div className="trending_posts_index_parent_div">

        <ol className="trending_posts_unordered_list">
          {selectedPostsFromEachUser}
        </ol>
      </div>
    );
  }

}

export default TrendingPosts;

