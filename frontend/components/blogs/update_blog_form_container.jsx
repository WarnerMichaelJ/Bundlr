import React from 'react';
import { connect } from 'react-redux';
import BlogForm from '../blogs/blog_form';
import { fetchBlog, updateBlog } from '../../actions/blog_actions';


import { withRouter } from 'react-router-dom';



const mapStateToProps = (state, ownProps) => {
  const defaultBlog = { name: '', description: '' };
  const blog = state.entities.blogs[ownProps.match.params.blogId] || defaultBlog;
  const formType = 'Update Blog';

  return { blog, formType };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchBlog: id => dispatch(fetchBlog(id)),
    action: blog => dispatch(updateBlog(blog)),
  };
};

class EditBlogForm extends React.Component {
  componentDidMount() {
    this.props.fetchBlog(this.props.match.params.blogId);
  }

  componentDidUpdate(prevProps) {
    if (prevProps.blog.id != this.props.match.params.blogId) {
      this.props.fetchBlog(this.props.match.params.blogId);
    }
  }

  render() {
    const { action, formType, blog } = this.props;
    return (
      <BlogForm
        action={action}
        formType={formType}
        blog={blog} />
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(EditBlogForm);
