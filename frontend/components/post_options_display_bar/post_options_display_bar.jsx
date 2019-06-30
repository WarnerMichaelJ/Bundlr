import React from "react";
import { Link } from "react-router-dom";

class PostOptionsDisplayBar extends React.Component {

  constructor(props) {
    super(props);

    this.state = {};
  }

  render () {

    const PostOptions = (
      <section className="post_options_buttons">
        <div className="post_options_buttons_box">
          <Link to="/" className="post_options_icon">
            <span className="dashboard_nav_text">Aa</span>
          </Link>
          <label className="dashboard_text_label">Text</label>
        </div>

        <div className="post_options_buttons_box">
          <Link to="/" className="post_options_icon">
            <i className="fas fa-camera-retro" />
          </Link>
          <label className="dashboard_text_label">Picture</label>
        </div>

        <div className="post_options_buttons_box">
          <Link to="/" className="post_options_icon">
            <i className="fas fa-quote-left" />
          </Link>
          <label className="dashboard_text_label">Quote</label>
        </div>

        <div className="post_options_buttons_box">
          <Link to="/" className="post_options_icon">
            <i className="fas fa-link" />
          </Link>
          <label className="dashboard_text_label">Link</label>
        </div>

        <div className="post_options_buttons_box">
          <Link to="/" className="post_options_icon">
            <i className="fas fa-headphones-alt" />
          </Link>
          <label className="dashboard_text_label">Audio</label>
        </div>

        <div className="post_options_buttons_box">
          <Link to="/" className="post_options_icon">
            <i className="fas fa-video" />
          </Link>
          <label className="dashboard_text_label">Video</label>
        </div>
      </section>
    );

    return this.props.currentUser ? PostOptions : null;

  }

}


export default PostOptionsDisplayBar;

