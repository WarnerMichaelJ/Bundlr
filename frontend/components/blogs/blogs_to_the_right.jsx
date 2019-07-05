import React from 'react';

// Still need a container for this

import { fetchUsers } from '../../actions/user_actions';

class RecommendedBlogs extends React.Component { 
  constructor(props) {
    super(props);


  }

  componentDidMount() {
    this.props.fetchUsers();
  }

  render () {

    

    return (

      <div className="blogs_to_the_right">
        <div className="recommended-blogs">
          <h3>Recommended Blogs</h3>
          <hr />
            <div className="blog-links">
              <div className="blog-1">
                <img className="Lebron_mad_blog_image" src="https://static.businessinsider.com/image/4fd16c7fecad043b4d000001-750.jpg"></img>
                <h3 className="Lebron_blog_description">Where LeBron contemplates his revenge on the league</h3>
              </div>

              <div className="blog-2">
                <img className="Iverson_Smiling" src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/Allen_Iverson_headshot.jpg/220px-Allen_Iverson_headshot.jpg"></img>
                <h3 className="Iverson_blog_description">I might be retired, but I'm still cheering hard as ever for my 76ers!</h3>
              </div>

              <div className="blog-3">
                <img className="Doncic_silly" src="https://media0.giphy.com/media/39qFkz5bbPpz33BAF3/giphy.gif"></img>
                <h3 className="Doncic_blog_description">It's so much fun being in the NBA</h3>
              </div>
            </div>

            <br />
          <h3>Radar</h3>
            <hr />
            <div className="blog-4">
              <img className="Jaren_Jackson_Happy" src="https://media1.giphy.com/media/1hMaDJF8AzXIde3wzc/giphy.gif"></img>
            </div>
        </div>

      </div>

      
    );
  }

  // render () {

  //   let blogLinks;
  //   let blogsArray = [];



  //   if (!this.props.users) {
  //     blogLinks = null; 
  //   } else {
  //     debugger; 
  //     blogLinks = (
        // <div className="blog-links">
        //   <div className="blog-1">
        //     {/* <img className="blog_user_profile_pic" src={this.props.users.Lebron_James.profilePicture} /> */}
        //   </div>

        //   <div className="blog-2">
        //     {/* <img className="blog_user_profile_pic" src={this.props.users.Allen_Iverson.profilePicture} /> */}
        //   </div>

        //   <div className="blog-3">
        //     {/* <img className="blog_user_profile_pic" src={this.props.users.Luka_Doncic.profilePicture} /> */}
        //   </div>
        // </div>
  //     );
  //   }

  //   return (
      // <div className="blogs_to_the_right">
      //   <div className="recommended-blogs">
      //     <h3>Recommended Blogs</h3>
      //     <hr />
      //     {blogLinks}


      //     <h3>Radar</h3>
      //     <hr />
      //   </div>

      // </div>

  //   );
  // }

}

export default RecommendedBlogs;