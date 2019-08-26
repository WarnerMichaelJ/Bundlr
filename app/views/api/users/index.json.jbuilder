

# @users.each do |user|
#   json.extract! user, :username 
#   if user.profile_picture.attached? 
#     json.profilePicture url_for(user.profile_picture)
#   end
# end

@users.each do |user|
  json.set! user.username do 
    json.extract! user, :username, :id
    if user.profile_picture.attached? 
      json.profilePicture url_for(user.profile_picture)
    end
  end 
end

