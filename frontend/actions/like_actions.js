import * as LikeUtil from "../util/like_util";
import { fetchPost } from "./post_actions";

export const RECEIVE_LIKE = "RECEIVE_LIKE";
export const REMOVE_LIKE = "REMOVE_LIKE";

export const RECEIVE_LIKES = "RECEIVE_LIKES";

const receiveLike = (payload) => (
  
  { 
    type: RECEIVE_LIKE,
    payload: payload 
  }
);

export const createLike = postId => dispatch => {
  
  return LikeUtil.createLike(postId).then(payload => dispatch(receiveLike(payload)));
};

export const removeLike = likeId => dispatch => {

  return LikeUtil.removeLike(likeId).then( (payload) => dispatch(deleteLike(payload)));
};

const deleteLike = (payload) => (

  {
    type: REMOVE_LIKE,
    payload
  }
);

const receiveLikes = (likes) => (

  {
    type: RECEIVE_LIKES,
    likes: likes 
  }
);

export const fetchLikes = () => (dispatch) => LikeUtil.fetchLikes()
  .then(
    (likes) => dispatch(receiveLikes(likes))
  );

