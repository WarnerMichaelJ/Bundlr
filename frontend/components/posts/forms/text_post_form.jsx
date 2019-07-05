import React from 'react';
import { withRouter } from 'react-router-dom';

class TextForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {title: "", body: "", content_type: "text"};
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
      <div className="text_post_form_container">
        <form className="the_actual_text_post_form" onSubmit={this.handleSubmit}>
          <h3 className="text-form-username">{this.props.currentUser["username"]}</h3>
          <input className="title-input-text_post_form_container"
            type="text"
            value={this.state.title}
            onChange={this.handleInput("title")}
            placeholder="Title"
          />

          <textarea className="body-input-text_post_form_container"
            type="text"
            value={this.state.body}
            onChange={this.handleInput("body")}
            placeholder="Your text here"
          />
          <div className="buttons-container-text-form">
            <button onClick={this.props.closeModal} className="close-text-post-modal">Close</button>
            <input className="post-button-text-form" type="submit" value={this.props.formType} />
          </div>
        </form>
      </div>
    );
  }
}

export default withRouter(TextForm);

