// user_profile_container.jsx 

import { connect } from 'react-redux';
import { fetchPosts, deletePost } from '../../actions/post_actions';
import { fetchUsers } from '../../actions/user_actions';
import UserProfile from './user_profile';

import { createLike, removeLike, fetchLikes } from "../../actions/like_actions";
import { likedPostIds } from '../../reducers/selectors';


const msp = (state, ownProps) => {

  let posts = Object.values(state.entities.posts).reverse();
  let currentUser = state.entities.users[state.session.id];
  let posters = state.entities.users;
  let likedIds = likedPostIds(state);

  return {
    posts,
    currentUser,
    posters,
    likedIds,
    profileId: ownProps.match.params.profileId,
    ownProps
  };
};

const mdp = dispatch => {
  return {
    fetchUsers: () => dispatch(fetchUsers()),
    fetchPosts: () => dispatch(fetchPosts()),
    createLike: (postId) => dispatch(createLike(postId)),
    removeLike: (likeId) => dispatch(removeLike(likeId)),
    fetchLikes: () => dispatch(fetchLikes()),
    deletePost: (postId) => dispatch(deletePost(postId))
  };
};

export default connect(msp, mdp)(UserProfile);
