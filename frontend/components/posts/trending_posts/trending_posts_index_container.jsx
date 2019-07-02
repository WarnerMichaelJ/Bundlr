import { connect } from 'react-redux';
import { fetchPost, createPost, updatePost, deletePost, fetchPosts } from '../../../actions/post_actions';
import TrendingPostsIndex from './trending_posts_index';

import { createLike, removeLike } from "../../../actions/like_actions";

const msp = state => {
  let posts = Object.values(state.entities.posts);
  let currentUser = state.entities.users[state.session.id];
  let posters = state.entities.users;

  return {
    posts,
    currentUser,
    posters
  };
};

const mdp = dispatch => {
  return {
    fetchPost: (id) => dispatch(fetchPost(id)),
    createPost: (post) => dispatch(createPost(post)),
    updatePost: (post) => dispatch(updatePost(post)),
    deletePost: (postId) => dispatch(deletePost(postId)),
    fetchPosts: () => dispatch(fetchPosts()),
    createLike: (postId) => dispatch(createLike(postId)),
    removeLike: (likeId) => dispatch(removeLike(likeId)),
  };
};

export default connect(msp, mdp)(TrendingPostsIndex);

