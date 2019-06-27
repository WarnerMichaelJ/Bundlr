import * as BlogUtil from '../util/blog_util';



export const RECEIVE_BLOG = 'RECEIVE_BLOG';
export const REMOVE_BLOG = 'REMOVE_BLOG';
export const RECEIVE_BLOG_ERRORS = 'RECEIVE_BLOG_ERRORS';


export const fetchBlog = (blogId) => (dispatch) => BlogUtil.fetchBlog(blogId)
  .then(
    (blog) => dispatch(receiveBlog(blog)),
    (errors) => dispatch(receiveBlogErrors(errors.responseJSON))
  );

const receiveBlog = (blog) => {
  return { type: RECEIVE_BLOG, blog };
};

const receiveBlogErrors = (errors) => ({
  type: RECEIVE_BLOG_ERRORS,
  errors
});

export const createBlog = (blog) => (dispatch) => BlogUtil.createBlog(blog)
  .then(
    (blog) => dispatch(receiveBlog(blog)),
    (errors) => dispatch(receiveBlogErrors(errors.responseJSON))
  );

export const updateBlog = (blog) => (dispatch) => BlogUtil.updateBlog(blog)
  .then(
    (blog) => dispatch(receiveBlog(blog)),
    (errors) => dispatch(receiveBlogErrors(errors.responseJSON))
  );

const removeBlog = (blogId) => ({
  type: REMOVE_BLOG,
  blogId
});


export const deleteBlog = (blogId) => (dispatch) => BlogUtil.deleteBlog(blogId)
  .then(
    (blog) => dispatch(removeBlog(blogId)),
    (errors) => dispatch(receiveBlogErrors(errors.responseJSON))
  );

