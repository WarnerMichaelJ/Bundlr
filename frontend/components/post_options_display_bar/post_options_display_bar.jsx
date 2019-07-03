import React from "react";
import { Link } from "react-router-dom";

class PostOptionsDisplayBar extends React.Component {

  constructor(props) {
    super(props);

    this.state = {};
  }

  render () {
    if (!this.props.currentUser) return null;

    const PostOptions = (
      <div className="post_options_with_profile_pic_container">
        <div className="user_profile_pic">
          <img className="user_profile_pic_image" src={this.props.currentUser.profilePicture} />
        </div>
        <section className="post_options_buttons">
          <li onClick={() => this.props.openModal('Text Post Form')}>
            <div><p className="post_button text">Aa</p><span>Text</span></div>
          </li>
          <li onClick={() => this.props.openModal('Photo Post Form')}>
            <div><i className="post_button fas fa-camera"></i><span>Photo</span></div>
          </li>
          <li onClick={() => this.props.openModal('Quote Post Form')}>
            <div><i className="post_button fas fa-quote-right"></i><span>Quote</span></div>
          </li>
          <li onClick={() => this.props.openModal('Link Post Form')}>
            <div><i className="post_button fas fa-link"></i><span>Link</span></div>
          </li>
        </section>
      </div>  
    );

    return this.props.currentUser ? PostOptions : null;

  }

}


export default PostOptionsDisplayBar;

