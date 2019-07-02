export const createLike = postId => {
  // debugger; 
  return $.ajax({
    method: 'post',
    url: 'api/likes',
    data: { postId }
  });
};

export const removeLike = likeId => {
  // debugger
  return $.ajax({
    method: 'delete',
    url: `api/likes/${likeId}`,
  });

};