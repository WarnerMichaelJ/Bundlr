import React from 'react';
import { Link } from 'react-router-dom';



const TrendingPostIndexItem = ({ post, currentUser, postAuthor, deletePost, createLike, removeLike }) => {



  return (
    <div className="trending_index_item_container">
      <li className="trending_index_list_item">
        <p className="postAuthor-username">{postAuthor.username}</p>
        <br />
        <img className="trending_index_item_image" src={post.imageUrl} />
        <br />
        <h3 className="trending-title-text">{post.title}</h3>

        <h3 className="trending-body-text">{post.body}</h3>
        <br />
        <i className="far fa-heart" onClick={() => createLike(post.id)}></i>
      </li>
    </div>
  );
};

export default TrendingPostIndexItem;
