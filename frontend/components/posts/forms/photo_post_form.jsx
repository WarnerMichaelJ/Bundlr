import React from 'react';
import { withRouter } from 'react-router-dom';

class PhotoForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { title: "", body: "" };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInput(field) {
    return e => this.setState({
      [field]: e.target.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.action(this.state).then(this.props.closeModal());
  }

  render() {


    return (
      <div className="photo_form_container">
        <form className="the_actual_photo_form" onSubmit={this.handleSubmit}>
          <h3 className="photo-form-username">{this.props.currentUser["username"]}</h3>
          <div className="inner_boxes_container">
            <input type="file" className="upload_photos"></input>
            
          </div>
          <div className="buttons-container-text-form">
            <button onClick={this.props.closeModal} className="close-text-post-modal">Close</button>
            <input className="post-button-text-form" type="submit" value={this.props.formType} />
          </div>
        </form>
      </div>
    );
  }
}

export default withRouter(PhotoForm);
