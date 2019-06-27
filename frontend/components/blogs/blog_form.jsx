import React from 'react';
import { withRouter } from 'react-router-dom';

class BlogForm extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.update = this.update.bind(this);
    console.log(this.props);
    this.state = this.props.blog;
  }

  update(field) {
    return (e) => {
      this.setState({ [field]: e.target.value });
    };
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.action(this.state).then(() => this.props.history.push('/')); //Will likely change this route to something else. Probably the blog's show page
  }

  render() {
    
    return (
      <div>
        <h3>{this.props.formType}</h3>
        <form onSubmit={this.handleSubmit}>
          <label>Name
            <input
              type="text"
              value={this.state.name}
              onChange={this.update('name')} />
          </label>

          <label>
            <textarea
              value={this.state.description}
              onChange={this.update('description')} />
          </label>

          <input type="submit" value={this.props.formType} />
        </form>
      </div>
    );
  }
}

export default withRouter(BlogForm);
