import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import BlogForm from '../blogs/blog_form';
import { createBlog } from '../../actions/blog_actions';

const mapStateToProps = (state, ownProps) => {
  const blog = { name: 'input name here', description: 'input description here' };
  const formType = 'Create Blog';

  return { blog, formType };
};

const mapDispatchToProps = (dispatch) => {
  return {
    action: blog => dispatch(createBlog(blog)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(BlogForm);
