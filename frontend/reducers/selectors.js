
export const likedPostIds = (state) => {

  let postIds = [];
  let likes = Object.values(state.entities.likes); 
  likes.forEach((like) => {
    postIds.push(like.post_id);
  });

  return postIds;
};

