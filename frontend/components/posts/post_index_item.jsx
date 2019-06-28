import React from 'react';
import { Link } from 'react-router-dom';


const PostIndexItem = ({ post, deletePost }) => (

  <li>
    {post.title}
    <br />
    {post.body}
  </li>
);

export default PostIndexItem;
