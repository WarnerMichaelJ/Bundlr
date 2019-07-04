import React from 'react';
import { Link } from 'react-router-dom';



class PostIndexItem extends React.Component {
  constructor(props) {
    super(props);
    
    this.state = { liked: false };
    this.handleLike = this.handleLike.bind(this);
    this.handleUnlike = this.handleUnlike.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
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

  handleUnlike(event) {
    event.preventDefault();
    let likeId;
    let likes = Object.values(this.props.post.likes);
    

    likes.forEach((like) => {
      if (like.user_id === this.props.currentUser.id) {
        likeId = like.id;
      }
    });

    this.props.removeLike(likeId).then(() => {
      this.setState({
        liked: false
      });
    });
  }

  handleDelete(event) {
    event.preventDefault();
    this.props.deletePost(this.props.post.id);
  }

  render() {
    
   
  const { post, currentUser, postAuthor, deletePost, createLike, removeLike } = this.props; 

  let heart;

  if (this.state.liked) {
    heart = <i className="fas red post-index fa-heart" onClick={this.handleUnlike}></i>;
  } else {
    heart = <i className="far red post-index fa-heart" onClick={this.handleLike}></i>;
  }

    let traditional_item = (
    <div className="index_item_container">
      <div className="user_profile_pic">
        <img className="user_profile_pic_image" src={postAuthor.profilePicture} />
      </div>
      <li className="post_index_list_item">
        <div className="username-and-handleDelete-button" >
          <p className="postAuthor-username">{postAuthor.username}</p>
          <h3 className="handleDelete-button" onClick={this.handleDelete}>X</h3>
        </div>
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
    


    let quote_post_item = (
      <div className="index_item_container">
        <div className="user_profile_pic">
          <img className="user_profile_pic_image" src={postAuthor.profilePicture} />
        </div>
        <li className="post_index_list_item">
          <div className="username-and-handleDelete-button" >
            <p className="postAuthor-username">{postAuthor.username}</p>
            <h3 className="handleDelete-button" onClick={this.handleDelete}>X</h3>
          </div>
          <br />
          <img className="quote_item" src={post.imageUrl} />
          <br />
          <h3 className="quote-text">{post.title}</h3>

          <h3 className="quote-source">{post.body}</h3>
          <br />
          <div className="fa-heart-flex-container">
            {heart}
          </div>
        </li>
      </div>
    );



    
  //   let current_post; 
   
  //   if (this.props.post.content_type === "photo") {
  //     // debugger; 
  //     current_post = traditional_item;
  //     // debugger; 
  //   } else if (this.props.post.content_type === "quote") {
  //     current_post = quote_post_item;
  // }
  //   else {
  //   current_post = traditional_item;
  // }
  


    return traditional_item;

  }
}

export default PostIndexItem;
