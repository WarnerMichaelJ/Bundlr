export const createBlog = (blog) => (
  $.ajax({
    method: 'POST',
    url: '/api/blogs',
    data: { blog: blog }
  })
);

export const deleteBlog = (blogId) => (
  $.ajax({
    method: 'DELETE',
    url: `/api/blogs/${blogId}`
  })
);

export const fetchBlog = (blogId) => (
  $.ajax({
    method: 'GET',
    url: `/api/blogs/${blogId}`
  })
);

export const updateBlog = (blog) => (
  $.ajax({
    method: 'PATCH',
    url: `/api/blogs/${blog.id}`,
    data: { blog: blog }
  })
);


