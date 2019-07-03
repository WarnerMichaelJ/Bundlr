import React from 'react';
import { Link } from 'react-router-dom';



class PostIndexItem extends React.Component {
  constructor(props) {
    super(props);
    
    this.state = { liked: false };
    this.handleLike = this.handleLike.bind(this);
  }

  componentDidMount() {
    
    if (this.props.likedIds.includes(this.props.post.id)) {
      this.setState({ liked: true });
    }
  }
  
  handleLike(event) {
    event.preventDefault();
    this.props.createLike(this.props.post.id).then(() => {
      this.setState({
        liked: true
      });
    });
  }
  
  render() {
    
   
  const { post, currentUser, postAuthor, deletePost, createLike, removeLike } = this.props; 

  let heart;

  if (this.state.liked) {
    heart = <i className="fas red fa-heart" color="red" onClick={() => removeLike()}></i>;
  } else {
    heart = <i className="far fa-heart" onClick={this.handleLike}></i>;
  }

  return (
  <div className="index_item_container">
    <div className="user_profile_pic">
      <img className="user_profile_pic_image" src={postAuthor.profilePicture} />
    </div>
    <li className="post_index_list_item">
      <p className="postAuthor-username">{postAuthor.username}</p>
      <br />
      <img className="post_index_item_image" src={post.imageUrl} /> 
      <br />
      <h3 className="post-title-text">{post.title}</h3>

      <h3 className="post-body-text">{post.body}</h3>
      <br />
      <div className="fa-heart-flex-container">
      {heart}
      </div>
    </li>
  </div>
  );

  }
}

export default PostIndexItem;
