export const createLike = postId => {

  return $.ajax({
    method: 'post',
    url: 'api/likes',
    data: { postId }
  });
};



export const removeLike = likeId => {
  
  return $.ajax({
    method: 'delete',
    url: `api/likes/${likeId}`
  });

};

export const fetchLikes = () => {
  return $.ajax({
    method: 'get',
    url: `/api/likes`
  });
};