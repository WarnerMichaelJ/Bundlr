
import React from "react";

class PopupCirclesPostOptions extends React.Component {

  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {

    const PopupCircles = (
      <ul className="post_options_circles">
        <li onClick={() => this.props.openModal('Text Post Form')}>
          <div><p className="post_circle text">Aa</p><span>Text</span></div>
        </li>
        <li onClick={() => this.props.openModal('Photo Post Form')}>
          <div><i className="post_circle fas fa-camera"></i><span>Photo</span></div>
        </li>
        <li onClick={() => this.props.openModal('Quote Post Form')}>
          <div><i className="post_circle fas fa-quote-right"></i><span>Quote</span></div>
        </li>
        <li onClick={() => this.props.openModal('Link Post Form')}>
          <div><i className="post_circle fas fa-link"></i><span>Link</span></div>
        </li>
      </ul>
    );

    return PopupCircles;

  }

}


export default PopupCirclesPostOptions;

