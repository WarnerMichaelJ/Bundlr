import { connect } from 'react-redux';
import { fetchPost, createPost, updatePost, deletePost, fetchPosts } from '../../actions/post_actions';
import LikedPostsIndex from './liked_posts_index';

import { createLike, removeLike, fetchLikes } from "../../actions/like_actions";
import { likedPostIds } from '../../reducers/selectors';

const msp = state => {
  
  let posts = Object.values(state.entities.posts);
  let currentUser = state.entities.users[state.session.id];
  let posters = state.entities.users;
  let likedIds = likedPostIds(state);
  return {
    posts,
    currentUser,
    posters,
    likedIds
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
    fetchLikes: () => dispatch(fetchLikes()),
  };
};

export default connect(msp, mdp)(LikedPostsIndex);

