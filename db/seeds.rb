# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

require 'open-uri'



User.delete_all
Post.delete_all

user_1 = User.create(username: 'Luka_Doncic', email: "Luka@gmail.com", password: '123456')
user_2 = User.create(username: 'Jaren_Jackson_Jr', email: "JJJ@gmail.com", password: '123456')
user_3 = User.create(username: 'Lebron_James', email: "Lebron@gmail.com", password: '123456')
user_4 = User.create(username: 'Steve_Nash', email: "Nash@gmail.com", password: '123456')
user_5 = User.create(username: 'Zion_Williamson', email: "zion@gmail.com", password: '123456')
user_6 = User.create(username: 'Stephen_Curry', email: "ChefCurry@gmail.com", password: '123456')
user_7 = User.create(username: 'Michael_Jordan', email: "Jordanesque@gmail.com", password: '123456')
user_8 = User.create(username: 'Allen_Iverson', email: "Iverson@gmail.com", password: '123456')

# Post.create(title: "Second Photo")
# Post.create(title: "Third Photo")
# Post.create(title: "Fourth Photo")
# Post.create(title: "Fifth Photo")






profile_picture_1 = open('https://bundlr-dev.s3.amazonaws.com/Profile+Pictures+for+Users/LukaProfile.jpg')
user_1.profile_picture.attach(io: profile_picture_1, filename: 'Profile Pic Luka')


profile_picture_2 = open('https://bundlr-dev.s3.amazonaws.com/Profile+Pictures+for+Users/Jaren1.jpg')
user_2.profile_picture.attach(io: profile_picture_2, filename: 'Profile Pic Jaren Smiling')

#Add an association of has one photo to the user model as well
#I called it profile_picture instead of photo just as a heads up 

profile_picture_3 = open('https://bundlr-dev.s3.amazonaws.com/Additional_Images/Lebron_Profile1.jpg')
user_3.profile_picture.attach(io: profile_picture_3, filename: 'Profile Pic LeBron')

profile_picture_4 = open('https://bundlr-dev.s3.amazonaws.com/Profile+Pictures+for+Users/Nash1.jpg')
user_4.profile_picture.attach(io: profile_picture_4, filename: 'Profile Pic Nash')

profile_picture_5 = open('https://bundlr-dev.s3.amazonaws.com/Additional_Images/Zion_profile3.jpg')
user_5.profile_picture.attach(io: profile_picture_5, filename: 'Profile Pic Zion')

profile_picture_6 = open('https://bundlr-dev.s3.amazonaws.com/Profile+Pictures+for+Users/StephenCurry1.jpg')
user_6.profile_picture.attach(io: profile_picture_6, filename: 'Profile Pic Curry')

profile_picture_7 = open('https://bundlr-dev.s3.amazonaws.com/Additional_Images/Jordan_champagne1.jpg')
user_7.profile_picture.attach(io: profile_picture_7, filename: 'Profile Pic Jordan')

profile_picture_8 = open('https://bundlr-dev.s3.amazonaws.com/Profile+Pictures+for+Users/Iverson1.jpg')
user_8.profile_picture.attach(io: profile_picture_8, filename: 'Profile Pic Iverson')





post_19 = Post.create(title: "Kawhy did you do this to me", body: "My endeavors to court Kawhi Leonard to the Lakers have soured. I now descend into a bitter place of both patient hope and quiet despair, as I wonder who between Kawhi and I will take the city of Los Angeles.. Who am I kidding I’m LeBron James of course I’m taking the city.", author_id: user_3.id, content_type: "text")

post_22 = Post.create(title: "Thinking of Kyrie and Love", body: "In anticipation of this upcoming Taco Tuesday, my sleep has grown erratic. In my insomnia I’ve thought often of Kyrie and Kevin. Such great buddies. If only Kelly Olynyk never hurt Kevin in that Boston series. Damn you Kelly..", author_id: user_3.id, content_type: "text")


post_20 = Post.create(title: "Cleveland! This is for you!", body: "Me", author_id: user_3.id, content_type: "quote")


post_21 = Post.create(title: "On the topic of Taco Tuesday", body: "These past few nights I’ve noticed a strange impulse grow within me. A lost appetite. An emptiness. A strange sensation that Taco Tuesday is no longer what it once was to me. Perhaps I no longer enjoy tacos…. PSYCHE! HAH! You know I LOVE tacos and it’s TACO TUUEESSDAYYY!", author_id: user_3.id, content_type: "text")


post_18 = Post.create(title: "Dear LeBron's Journal..", body: "As I embark on this momentous 17th season of my career, I can't help but quietly ponder, in this private Bundlr account, on all the amazing feats I've accomplished on my way to becoming the greatest player of all time. Damn it's so great being me, Lebron James..", author_id: user_3.id, content_type: "text")





post_14 = Post.create(title: "Has everybody forgotten I have six rings? Because I have six rings.", author_id: user_7.id, content_type: "photo")
file_14 = open('https://bundlr-dev.s3.amazonaws.com/Posts_for_multiple_users/Jordan_bragging.jpg')
post_14.photo.attach(io: file_14, filename: 'Jordan rings')


post_12 = Post.create(title: "Getting ready to take the league by storm. #OnTheGrind #MakePelicansBasketballGreatAgain", author_id: user_5.id, content_type: "photo")
file_12 = open('https://bundlr-dev.s3.amazonaws.com/Posts_for_multiple_users/Zion_training_post.jpg')
post_12.photo.attach(io: file_12, filename: 'Zion training')



post_11 = Post.create(title: "Enjoying retirement vacationing with the family!", author_id: user_4.id, content_type: "photo")
file_11 = open('https://bundlr-dev.s3.amazonaws.com/Posts_for_multiple_users/Nash_post.jpg')
post_11.photo.attach(io: file_11, filename: 'Nash enjoying retirement')


post_10 = Post.create(title: "Congrats on the victory Kawhi! Much deserved. Hope you still want to come out to LA!", author_id: user_3.id, content_type: "photo")
file_10 = open('https://bundlr-dev.s3.amazonaws.com/Kawhi+Champagne.jpg')
post_10.photo.attach(io: file_10, filename: 'Lebron happily tampering')


post_17 = Post.create(title: "Three is greater than Two", body: "Stephen '3 > 2' Curry", author_id: user_6.id, content_type: "quote")


post_13 = Post.create(title: "Get well soon my splash brotha.. Me and D'loading will hold down the fort until then", author_id: user_6.id, content_type: "photo")
file_13 = open('https://bundlr-dev.s3.amazonaws.com/Posts_for_multiple_users/Get_well_soon_Klay.jpg')
post_13.photo.attach(io: file_13, filename: 'Wishing Klay well')


post_9 = Post.create(title: "Welcome to Memphis Ja! We're about to be TROUBLE next season", author_id: user_2.id, content_type: "photo")
file_9 = open('https://bundlr-dev.s3.amazonaws.com/Jaren_Jackson_Posts/Jaren_and_Ja_Shoutout.jpg')
post_9.photo.attach(io: file_9, filename: 'Jaren Shouting Out Ja Morant')


post_8 = Post.create(title: "Dear Memphis coaching staff: Let. Me. Shoot. More. Threes.PLEASE", author_id: user_2.id, content_type: "photo")
file_8 = open('https://bundlr-dev.s3.amazonaws.com/Jaren_Jackson_Posts/Let_Me_Shoot_More_Threes.jpg')
post_8.photo.attach(io: file_8, filename: 'Jaren Shooting A Three')


post_7 = Post.create(title: "Great working out with you KG!", author_id: user_2.id, content_type: "photo")
file_7 = open('https://bundlr-dev.s3.amazonaws.com/Jaren_Jackson_Posts/Garnett_And_Jaren_After_Workout.jpg')
post_7.photo.attach(io: file_7, filename: 'Jaren and KG')


post_16 = Post.create(title: "What are we talking about? Practice?", body: "Allen Iverson", author_id: user_8.id, content_type: "quote")

post_15 = Post.create(title: "I love my little guys. They my little guys. I love 'em. Can't wait to watch them take the league over. #AStormIsComing", author_id: user_8.id, content_type: "photo")
file_15 = open('https://bundlr-dev.s3.amazonaws.com/Posts_for_multiple_users/I_love_my_little_guys_Iverson.jpg')
post_15.photo.attach(io: file_15, filename: 'Iverson hyping Embiid and Simmons')


post_6 = Post.create(title: "Great to workout in the summer in NYC", author_id: user_1.id, content_type: "photo")
file_6 = open('https://bundlr-dev.s3.amazonaws.com/new_york_city.jpg')
post_6.photo.attach(io: file_6, filename: 'NYC skyline')


post_5 = Post.create(title: "More great scenery. Got to love the city", author_id: user_1.id, content_type: "photo")
file_5 = open('https://bundlr-dev.s3.amazonaws.com/city_at_night.jpg')
post_5.photo.attach(io: file_5, filename: 'night time skyline')


post_4 = Post.create(title: "Scenic view after a hard NBA season", author_id: user_1.id, content_type: "photo")
file_4 = open('https://bundlr-dev.s3.amazonaws.com/pietro-de-grandi-T7K4aEPoGGk-unsplash.jpg')
post_4.photo.attach(io: file_4, filename: 'Scenic View')


post_3 = Post.create(title: "Great meal after another Mavs win", author_id: user_1.id, content_type: "photo")
file_3 = open('https://bundlr-dev.s3.amazonaws.com/Pulled_pork_memphis_cuisine.jpg')
post_3.photo.attach(io: file_3, filename: 'Classic Memphis Meal')


post_2 = Post.create(title: "Congrats Jaren on your career high! Bright future in Memphis", author_id: user_1.id, content_type: "photo")
file_2 = open('https://bundlr-dev.s3.amazonaws.com/Jaren_Jackson_Jr.jpg')
post_2.photo.attach(io: file_2, filename: 'jaren_jackson.jpg')


post_1 = Post.create(title: "So happy to be a part of the Mavs organization", author_id: user_1.id, content_type: "photo")
file_1 = open('https://bundlr-dev.s3.amazonaws.com/Additional_Images/luka-2.jpg')
post_1.photo.attach(io: file_1, filename: 'Luka_Image.jpg')


