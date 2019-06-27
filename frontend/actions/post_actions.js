
import * as PostUtil from '../util/post_util';

export const RECEIVE_POST = 'RECEIVE_POST';
export const REMOVE_POST = 'REMOVE_POST';
export const RECEIVE_POST_ERRORS = 'RECEIVE_POST_ERRORS';

export const RECEIVE_POSTS = "RECEIVE_POSTS";

export const fetchPost = (postId) => (dispatch) => PostUtil.fetchPost(postId)
  .then(
    (post) => dispatch(receivePost(post)),
    (errors) => dispatch(receivePostErrors(errors.responseJSON))
  );

const receivePost = (post) => {
  return { type: RECEIVE_POST, post };
};

const receivePostErrors = (errors) => ({
  type: RECEIVE_POST_ERRORS,
  errors
});

export const createPost = (post) => (dispatch) => PostUtil.createPost(post)
  .then(
    (post) => dispatch(receivePost(post)),
    (errors) => dispatch(receivePostErrors(errors.responseJSON))
  );

export const updatePost = (post) => (dispatch) => PostUtil.updatePost(post)
  .then(
    (post) => dispatch(receivePost(post)),
    (errors) => dispatch(receivePostErrors(errors.responseJSON))
  );

const removePost = (postId) => ({
  type: REMOVE_POST,
  postId
});


export const deletePost = (postId) => (dispatch) => PostUtil.deletePost(postId)
  .then(
    (post) => dispatch(removePost(postId)),
    (errors) => dispatch(receivePostErrors(errors.responseJSON))
  );



const receivePosts = (posts) => ({
  type: RECEIVE_POSTS,
  posts
});

export const fetchPosts = () => (dispatch) => PostUtil.fetchPosts()
  .then(
    (posts) => dispatch(receivePosts(posts)),
    (errors) => dispatch(receivePostErrors(errors.responseJSON))
  );

