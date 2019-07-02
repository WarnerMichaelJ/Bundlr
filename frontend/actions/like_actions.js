import * as LikeUtil from "../util/like_util";
import { fetchPost } from "./post_actions";

export const RECEIVE_LIKE = "RECEIVE_LIKE";
export const REMOVE_LIKE = "REMOVE_LIKE";


const receiveLike = (like) => (
  
  { 
    type: RECEIVE_LIKE,
    like: like 
  }
);

export const createLike = postId => dispatch => {
  // debugger; 
  return LikeUtil.createLike(postId).then(like => dispatch(receiveLike(like)));
};

export const removeLike = likeId => dispatch => {
  return LikeUtil.removeLike(likeId).then( () => dispatch(deleteLike(likeId)));
};

const deleteLike = (likeId) => (

  {
    type: REMOVE_LIKE,
    likeId
  }
);