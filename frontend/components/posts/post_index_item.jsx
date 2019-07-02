import React from 'react';
import { Link } from 'react-router-dom';



const PostIndexItem = ({ post, currentUser, postAuthor, deletePost, createLike, removeLike }) => {
  
  

  return (
  <div className="index_item_container">
    <div className="user_profile_pic">
      <img className="user_profile_pic_image" src={postAuthor.profilePicture} />
    </div>
    <li className="post_index_list_item">
      <h3>{postAuthor.username}</h3>
      <br />
      <img className="post_index_item_image" src={post.imageUrl} /> 
      <br />
      <h3 className="post-title-text">{post.title}</h3>

      <h3 className="post-body-text">{post.body}</h3>
      <br />
      <i className="far fa-heart" onClick={() => createLike(post.id)}></i>
    </li>
  </div>
  );
};

export default PostIndexItem;
