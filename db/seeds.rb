# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.delete_all

User.create(username: 'Luka_Doncic', email: "Luka@gmail.com", password: '123456')
User.create(username: 'Lebron_James', email: "Lebron@gmail.com", password: '123456')
User.create(username: 'Steve_Nash', email: "Nash@gmail.com", password: '123456')
User.create(username: 'Zion_Williamson', email: "zion@gmail.com", password: '123456')
User.create(username: 'Stephen_Curry', email: "ChefCurry@gmail.com", password: '123456')
User.create(username: 'Michael_Jordan', email: "Jordanesque@gmail.com", password: '123456')
User.create(username: 'Jaren_Jackson_Jr', email: "JJJ@gmail.com", password: '123456')
User.create(username: 'Allen_Iverson', email: "Iverson@gmail.com", password: '123456')

