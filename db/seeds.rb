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
User.create(username: 'Lebron_James', email: "Lebron@gmail.com", password: '123456')
User.create(username: 'Steve_Nash', email: "Nash@gmail.com", password: '123456')
User.create(username: 'Zion_Williamson', email: "zion@gmail.com", password: '123456')
User.create(username: 'Stephen_Curry', email: "ChefCurry@gmail.com", password: '123456')
User.create(username: 'Michael_Jordan', email: "Jordanesque@gmail.com", password: '123456')
User.create(username: 'Jaren_Jackson_Jr', email: "JJJ@gmail.com", password: '123456')
User.create(username: 'Allen_Iverson', email: "Iverson@gmail.com", password: '123456')

post_1 = Post.create(title: "Congrats Jaren on your career high! Bright future in Memphis", author_id: user_1.id)
# Post.create(title: "Second Photo")
# Post.create(title: "Third Photo")
# Post.create(title: "Fourth Photo")
# Post.create(title: "Fifth Photo")

file = open('https://bundlr-dev.s3.amazonaws.com/Jaren_Jackson_Jr.jpg')
post_1.photo.attach(io: file, filename: 'jaren_jackson.jpg')


post_2 = Post.create(title: "So happy to be a part of the Mavs organization", author_id: user_1.id)
file_2 = open('https://bundlr-dev.s3.amazonaws.com/eeGoWNuN6mpZP5csUZrKP7KR')
post_2.photo.attach(io: file_2, filename: 'Luka_Image.jpg')


post_3 = Post.create(title: "Great meal after another Mavs win", author_id: user_1.id)
file_3 = open('https://bundlr-dev.s3.amazonaws.com/Pulled_pork_memphis_cuisine.jpg')
post_3.photo.attach(io: file_3, filename: 'Classic Memphis Meal')

post_4 = Post.create(title: "Scenic view after a hard NBA season", author_id: user_1.id)
file_4 = open('https://bundlr-dev.s3.amazonaws.com/pietro-de-grandi-T7K4aEPoGGk-unsplash.jpg')
post_4.photo.attach(io: file_4, filename: 'Scenic View')

post_5 = Post.create(title: "More great scenery. Got to love the city", author_id: user_1.id)
file_5 = open('https://bundlr-dev.s3.amazonaws.com/city_at_night.jpg')
post_5.photo.attach(io: file_5, filename: 'night time skyline')

post_6 = Post.create(title: "Great to workout in the summer in NYC", author_id: user_1.id)
file_6 = open('https://bundlr-dev.s3.amazonaws.com/new_york_city.jpg')
post_6.photo.attach(io: file_6, filename: 'NYC skyline')

