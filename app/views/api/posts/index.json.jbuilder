
@posts.each do |post| 
  json.set! post.id do 
    json.extract! post, :title, :body, :author_id, :content_type  
    if post.photo.attached? 
      json.imageUrl url_for(post.photo)
    end
  end
end

# Should probably add something here to restrict the amount of json being sent back later on