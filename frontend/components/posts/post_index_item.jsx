import React from 'react';
import { Link } from 'react-router-dom';


const PostIndexItem = ({ post, deletePost }) => (

  <li>
    {post.title}
    <br />
    {post.body}
    <br />
    <img src={window.images.doncic_picture} /> 
  </li>
);

export default PostIndexItem;
