import React from 'react';
import { Link } from 'react-router-dom';


const PostIndexItem = ({ post, currentUser, deletePost }) => (

  <li className="post_index_list_item">
    <h3>author_id of poster: {post.author_id}</h3>
    <br />
    <img className="post_index_item_image" src={post.imageUrl} /> 
    <br />
    <h3 className="post-title-text">{post.title}</h3>

    <h3 className="post-body-text">{post.body}</h3>

  </li>
);

export default PostIndexItem;
