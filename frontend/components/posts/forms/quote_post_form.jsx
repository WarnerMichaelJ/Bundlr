import React from 'react';
import { withRouter } from 'react-router-dom';

class QuotePostForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {title: "", body: "", content_type: "quote"};
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
      <div className="form_container">
        <div className="author_name">{this.props.currentUser["username"] }</div>
        <form className="quote-form" onSubmit={this.handleSubmit}>
          <div className="quote"><input className="quote-text"
            type="text"
            value={this.state.title}
            onChange={this.handleInput("title")}
            placeholder="&rdquo;Quote&rdquo;"
          /></div>

          <textarea className="body-text"
            type="text"
            value={this.state.body}
            onChange={this.handleInput("body")}
            placeholder="--Source"
          />

          <div className="post-form-footer">
            <button onClick={this.props.closeModal} className="close-modal">Close</button>
            <input className="submit-post" type="submit" value={this.props.formType} />
          </div>
        </form>
      </div>
    );
  }
}

export default withRouter(QuotePostForm);