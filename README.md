# Bundlr

[Live link](https://bundlr-app-project.herokuapp.com/#/posts)

Welcome to Bundlr! Bundlr is a content aggregation website, as well as a blogging platform where users can make posts to a general feed which gets displayed to all other users of the site. There are additional feeds displaying trending posts within the application, as well as the posts that have been liked by the currently logged in user. 

This project was built in 12 days. 

## Features

- Authentication using BCrypt. Users can sign up with their own account information, or try the demo login to explore the site without having to register.

- Users can scroll through a feed of posts and see what other bloggers on the site have posted

- Users can make their own posts to the general feed. They may also delete their own posts in the feed, but not the posts of others. 

- The navbar at the top allows for simple navigation between the home page of the posts feed, a feed of posts liked by the user, and a trending posts feed of the first posts made by users. 

- Users can like the posts they enjoy through heart icons that change color at the base of the posts. These likes and dislikes persist to the global application state, and are accurately reflected in the other feeds within the application where those same liked/unliked posts appear. 

- The create post “pencil” icon at the top right corner of the page presents a stylized pop up of options for how users may post to the site. Though photo additions are disabled to avoid exceeding the application’s present AWS storage limits. 

![alt text](https://raw.githubusercontent.com/WarnerMichaelJ/Bundlr-Final-Project/master/app/assets/images/Bundlr%20Splash%20Page.png "Splash Page")

Upon signing up/logging in, users are redirected to a home page feed of posts they've made, as well as posts made by other users of the site. 

![alt text](https://raw.githubusercontent.com/WarnerMichaelJ/Bundlr-Final-Project/master/app/assets/images/Home%20Page%20Posts%20Feed%20.png "Home Page Posts Feed")

You'll notice that the navigation bar is always present at the top of the site so long as the user is logged in. This allows for simple maneuvering between the different feeds on the platform. 


![alt text](https://raw.githubusercontent.com/WarnerMichaelJ/Bundlr-Final-Project/master/app/assets/images/Trending%20Posts%20Page.png "Trending Posts Feed")

The trending posts page is accessed by clicking on the compass icon within the navigation bar. It currently displays first posts made by users of the site. Posts at any section of the site can be liked and unliked, and all likes will persist to the global redux state of the application so the current like status of all posts can be accurately represented on the same posts rendered on other sections of the site. 


![alt text](https://raw.githubusercontent.com/WarnerMichaelJ/Bundlr-Final-Project/master/app/assets/images/Liked%20Posts%20Feed.png "Liked Posts Feed")

The liked posts feed is accessed by clicking on the heart icon within the navigation bar. It renders all presently liked posts by the currently logged in user. Any unliking of posts within the liked posts feed leads to immediate removal of the post from the feed. 


![alt text](https://raw.githubusercontent.com/WarnerMichaelJ/Bundlr-Final-Project/master/app/assets/images/Post%20Options%20.png "Post Options Modal popup")

The post options modal is stylistically rendered after clicking on the "pencil" icon in the top right corner of the navigation bar. The post options presented here are duplicated within the post options display bar present at the top of the posts index feed as well. Posts can be created and subsequently deleted. All posts are selectively styled based on their content_type. 


### Technologies used
 1.	React.js
 2. Redux
 3.	Ruby on Rails for backend
 4. Bcrypt for user authentication
 5.	PostgreSQL
 6.	HTML
 7.	CSS
 8. AWS S3 buckets to store images 

