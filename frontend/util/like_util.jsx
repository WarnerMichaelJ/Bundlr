export const createLike = postId => {
  // debugger; 
  return $.ajax({
    method: 'post',
    url: 'api/likes',
    data: { postId }
  });
};

// export const removeLike = postId => {
//   // debugger
//   return $.ajax({
//     method: 'delete',
//     url: `api/likes/${likeId}`,
//     data: { postId }
//   });

// };

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