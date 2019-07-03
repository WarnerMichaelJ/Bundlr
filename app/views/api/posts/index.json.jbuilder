
json.users do 
  @posts.each do |post|
    json.set! post.author_id do
      json.extract! post.user, :username
      if post.user.profile_picture.attached? 
        json.profilePicture url_for(post.user.profile_picture)
      end
    end
  end

end

json.posts do 
  @posts.each do |post| 
    json.set! post.id do 
      json.extract! post, :title, :body, :author_id, :content_type, :id, :likes 
      

      if post.photo.attached? 
        json.imageUrl url_for(post.photo)
      end
    end
  end
end
# Should probably add something here to restrict the amount of json being sent back later on