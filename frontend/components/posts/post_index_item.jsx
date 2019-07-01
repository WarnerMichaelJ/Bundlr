import React from 'react';
import { Link } from 'react-router-dom';


const PostIndexItem = ({ post, deletePost }) => (

  <li className="post_index_list_item">
    {post.title}
    <br />
    {post.body}
    <br />
    <img className="post_index_item_image" src={post.imageUrl} /> 
  </li>
);

export default PostIndexItem;
