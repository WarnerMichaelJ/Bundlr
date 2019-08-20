# Bundlr

[Live link](https://bundlr-app-project.herokuapp.com/#/posts)

Welcome to Bundlr! Bundlr is a content aggregation website, as well as a blogging platform where users can make posts to a general feed which gets displayed to all other users of the site. There are additional feeds displaying trending posts within the application, as well as the posts that have been liked by the currently logged in user. 

This project was built in 12 days. 

### Technologies used
 1.	React.js
 2. Redux
 3.	Ruby on Rails for backend
 4. Bcrypt for user authentication
 5.	PostgreSQL
 6.	HTML
 7.	CSS
 8. Webpack
 9. SASS
 10. AWS S3 buckets to store images 


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

The trending posts page is accessed by clicking on the compass icon within the navigation bar. It currently displays first posts made by users of the site. Posts at any section of the site can be liked and unliked, and all likes will persist to the global redux state of the application so the current like status of all posts can be accurately represented on the same posts rendered on other sections of the site. The reducer facilitating this is displayed below. 

```js
const likesReducer = (oldState = {}, action) => {
  Object.freeze(oldState);
  let newState;

  switch (action.type) {
    case RECEIVE_LIKES:
      return merge({}, oldState, action.likes);
    case RECEIVE_LIKE:
      return merge({}, oldState, { [action.payload.like.id]: action.payload.like });
    case REMOVE_LIKE:
      newState = merge({}, oldState);
      delete newState[action.payload.like.id];
      return newState;
    default:
      return oldState;
  }
};

export default likesReducer;
```

Old likes are retained through the use of lodash's merge function taking in an empty object, the previous state, along with the incoming like within the action's payload. For removal, select likes are isolated for deletion by id. 

### Liked Posts Feed

![alt text](https://raw.githubusercontent.com/WarnerMichaelJ/Bundlr-Final-Project/master/app/assets/images/Liked%20Posts%20Feed.png "Liked Posts Feed")

The liked posts feed is accessed by clicking on the heart icon within the navigation bar. It renders all presently liked posts by the currently logged in user. Any unliking of posts within the liked posts feed leads to immediate removal of the post from the feed. 

### Global Application Modal

A flexible, application wide modal was implemented by the addition of a Modal component to the app with a default value of null. 

```js
  const App = () => {
  return (
    <div>
      <Modal /> 
      <NavBarContainer />
      
      <Switch>
        <AuthRoute exact path="/login" component={LogInFormContainer} />
        <AuthRoute exact path="/signup" component={SignUpFormContainer} />
        <ProtectedRoute exact path="/posts" component={PostIndexContainer} />
        <ProtectedRoute exact path="/trendingposts" component={TrendingPosts} />
        <ProtectedRoute exact path="/liked" component={LikedPostsIndex} />
        <ProtectedRoute path="/" component={GreetingContainer} />
      </Switch>

    </div>
  );
};
```

Select components are rendered through the use of an openModal function which takes as an argument a description of the modal to be rendered. The modal then selectively renders distinct forms through a switch statement depending on the type of modal now described in the modal slice of state. 

```js
  function Modal({ modal, closeModal }) {
  if (!modal) {
    return null;
  }

  let component;

  switch (modal) {
    case 'Text Post Form':
      component = <TextPostForm />;
      break;
    case 'Quote Post Form':
      component = <QuotePostForm />;
      break;
    case 'Link Post Form':
      component = <LinkPostForm />;
      break;
    case 'Photo Post Form':
      component = <PhotoPostForm />;
      break;
    case 'render post creation circles':
      component = <PopupCirclesPostOptions />;
      break;
    default:
      return null;
  }
  return (
    <div className="modal-background" onClick={closeModal}>
      <div className="modal-child" onClick={e => e.stopPropagation()}>
        {component}
      </div>
    </div>
  );
}

const mapStateToProps = state => {
  return {
    modal: state.ui.modal
  };
};

const mapDispatchToProps = dispatch => {
  return {
    closeModal: () => dispatch(closeModal())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Modal);

```

### Post Options Modal

![alt text](https://raw.githubusercontent.com/WarnerMichaelJ/Bundlr-Final-Project/master/app/assets/images/Post%20Options%20.png "Post Options Modal popup")

The post options modal is stylistically rendered after clicking on the "pencil" icon in the top right corner of the navigation bar. The post options presented here are duplicated within the post options display bar present at the top of the posts index feed as well. Posts can be created and subsequently deleted. All posts are selectively styled based on their content_type. 

![alt text](https://raw.githubusercontent.com/WarnerMichaelJ/Bundlr-Final-Project/master/app/assets/images/bundlr_quote_creation.gif "Quote Creation Gif")

