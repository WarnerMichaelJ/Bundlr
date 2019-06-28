import React from 'react';
import { Link } from 'react-router-dom';

const PostIndexItem = ({ post, deletePost }) => (

  <li>
    {post.title}
    {post.body}
    <button onClick={deletePost(post.id)}>delete this post if you're brave</button>
  </li>
);

export default PostIndexItem;
