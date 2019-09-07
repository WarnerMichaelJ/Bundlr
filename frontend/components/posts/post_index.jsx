import React from 'react';
import ReactDOM from 'react-dom';

import { Link } from 'react-router-dom';

import PostOptionsDisplayBar from '../post_options_display_bar/post_options_display_bar_container';

import PostIndexItem from './post_index_item';

import NavBar from '../nav_bar/nav_bar_container';

import RecommendedBlogs from '../blogs/blogs_to_the_right_container';

import debounce from "lodash/debounce";

class PostIndex extends React.Component {
  constructor(props) {
    super(props);

    this.throttledCount = 5; 
    this.state = { throttledCount: 5 };
    this.handlePagination = this.handlePagination.bind(this);
  }

  componentDidMount() {
    this.props.fetchPosts();
    this.props.fetchLikes();
    window.onscroll = debounce(this.handlePagination, 100);
  }

  handlePagination() {

    if (
      window.innerHeight + document.documentElement.scrollTop
      >= document.documentElement.offsetHeight
    ) {
      let currentCount = this.state.throttledCount + 5;

      this.setState({
        throttledCount: currentCount
      });

    }
  }

  componentWillUnmount() {
    window.onscroll = null; 
  }

  render () {

    if (!this.props.posts) return null;
    let posters = this.props.posters;
    let mapped = this.props.posts.map(post => {

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

    let posts = mapped.slice(0, this.state.throttledCount);

    return (

      <div className="wraps_post_index_and_blogs_to_the_right">
        <div className="post_index_parent_div">

          <PostOptionsDisplayBar />
          <ol className="post_index_unordered_list">
            {posts}
          </ol>
        </div>
        <RecommendedBlogs />
      </div>

    );
  }

}

export default PostIndex;

