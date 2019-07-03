
 

json.like do 
  json.extract! @like, :id, :user_id, :post_id
end

json.post do 
  json.extract! @post, :id, :title, :body, :author_id, :likes 
end
