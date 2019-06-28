import { connect } from 'react-redux';
import { fetchPost, createPost, updatePost, deletePost, fetchPosts } from '../../actions/post_actions';
import PostIndex from './post_index';



const msp = state => {
  let posts = Object.values(state.entities.posts);
  return {
    posts
  };
};

const mdp = dispatch => {
  return {
    fetchPost: (id) => dispatch(fetchPost(id)),
    createPost: (post) => dispatch(createPost(post)),
    updatePost: (post) => dispatch(updatePost(post)),
    deletePost: (postId) => dispatch(deletePost(postId)),
    fetchPosts: () => dispatch(fetchPosts()),
  };
};

export default connect(msp, mdp)(PostIndex);

