
import React from 'react';
import { withRouter } from 'react-router-dom';

class LinkForm extends React.Component {
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
      <div className="link_post_form_container">
        <div className="author_name">{this.props.currentUser["username"]}</div>
        <form className="the_actual_link_post_form" onSubmit={this.handleSubmit}>
          {/* <input className="title-input-link_post_form_container"
            type="text"
            value={this.state.title}
            onChange={this.handleInput("title")}
            placeholder="Title"
          /> */}

          <textarea className="body-input-link_post_form_container"
            type="text"
            value={this.state.body}
            onChange={this.handleInput("body")}
            placeholder="Type or paste a URL"
          />
          <div className="link-post-buttons">
            <button onClick={this.props.closeModal} className="close-modal">Close</button>
            <input className="submit-link-button" type="submit" value={this.props.formType} />
          </div>
        </form>
      </div>
    );
  }
}

export default withRouter(LinkForm);

