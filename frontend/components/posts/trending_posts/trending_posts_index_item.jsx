import React from 'react';
import { Link } from 'react-router-dom';



class TrendingPostIndexItem extends React.Component {

  constructor(props) {
    super(props);

    this.state = {liked: false };
    this.handleLike = this.handleLike.bind(this);
    this.handleUnlike = this.handleUnlike.bind(this);
  }

  componentDidMount() {

    if (this.props.likedIds.includes(this.props.post.id)) {
      this.setState({liked: true});
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

  render( ) {

  const { post, currentUser, postAuthor, deletePost, createLike, removeLike } = this.props; 

  let heart;

  if (this.state.liked) {
    heart = <i className="fas red fa-heart" color="red" onClick={this.handleUnlike}></i>;
  } else {
    heart = <i className="far fa-heart" onClick={this.handleLike}></i>;
  }



  return (
    <div className="trending_index_item_container">
      <li className="trending_index_list_item">
        <Link to={`users/${post.author_id}`}><p className="postAuthor-username">{postAuthor.username}</p></Link>
        <br />
        <img className="trending_index_item_image" src={post.imageUrl} />
        <br />
        <h3 className="trending-title-text">{post.title}</h3>

        <h3 className="trending-body-text">{post.body}</h3>
        <br />
        {heart}
      </li>
    </div>
  );
  }
}


export default TrendingPostIndexItem;
