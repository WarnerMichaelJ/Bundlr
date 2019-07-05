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

    let blogLinks;
    let blogsArray = [];



    if (!this.props.users) {
      blogLinks = null; 
    } else {
      debugger; 
      blogLinks = (
        <div className="blog-links">
          <div className="blog-1">
            <img className="blog_user_profile_pic" src={this.props.users.Lebron_James.profilePicture} />
          </div>

          <div className="blog-2">
            <img className="blog_user_profile_pic" src={this.props.users.Allen_Iverson.profilePicture} />
          </div>

          <div className="blog-3">
            <img className="blog_user_profile_pic" src={this.props.users.Luka_Doncic.profilePicture} />
          </div>
        </div>
      );
    }

    return (
      <div className="blogs_to_the_right">
        <div className="recommended-blogs">
          <h3>Recommended Blogs</h3>
          <hr />
          {blogLinks}


          <h3>Radar</h3>
          <hr />
        </div>

      </div>

    );
  }

}

export default RecommendedBlogs;