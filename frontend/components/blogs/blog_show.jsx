import React from 'react';
import { Link } from 'react-router-dom';

class BlogShow extends React.Component {
  componentDidMount() {
    this.props.fetchBlog(this.props.match.params.blogId);
  }

  componentDidUpdate(prevProps) {
    if (prevProps.blog.id != this.props.match.params.blogId) {
      this.props.fetchBlog(this.props.match.params.blogId);
    }
  }

  render() {
    const { blog } = this.props;
    if (!blog) {
      return <div>Loading...</div>;
    }

    return (
      <div>
        <h3>{blog.name}</h3>
        <p>{blog.description}</p>
        <Link to="/">Link to display greeting component at the moment. Will likely change this to something else.</Link>
      </div>
    );
  }
}

export default BlogShow;
