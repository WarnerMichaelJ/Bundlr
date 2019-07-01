import React from 'react';
import { withRouter } from 'react-router-dom';

class TextForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {title: "", body: ""};
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
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            value={this.state.title}
            onChange={this.handleInput("title")}
            placeholder="Title"
          />

          <input
            type="text"
            value={this.state.body}
            onChange={this.handleInput("body")}
            placeholder="Say what you need to say"
          />
          <button onClick={this.props.closeModal} className="close-modal">Close</button>
          <input type="submit" value={this.props.formType} />
        </form>
      </div>
    );
  }
}

export default withRouter(TextForm);

