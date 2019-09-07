import React from 'react';

import { Link } from 'react-router-dom';

import { fetchUsers } from '../../actions/user_actions';

class RecommendedBlogs extends React.Component { 
  constructor(props) {
    super(props);


  }

  componentDidMount() {
    this.props.fetchUsers();
  }

  render () {
    if (!this.props.users) return null;
    let leBronId, lukaId, iversonId, jarenId; 
    let users = this.props.users; 
    users.forEach(user => {
      if (user.username === "Luka_Doncic") {
        lukaId = user.id;
      } else if (user.username === "Jaren_Jackson_Jr") {
        jarenId = user.id; 
      } else if (user.username === "Lebron_James") {
        leBronId = user.id; 
      } else if (user.username === "Allen_Iverson") {
        iversonId = user.id; 
      }
    });

    return (


      <div className="recommended-blogs">
        <h3>Recommended Blogs</h3>
        <hr />
          <div className="blog-links">
            <div className="blog-1">
              <Link to={`users/${leBronId}`}><img className="Lebron_mad_blog_image" src="https://static.businessinsider.com/image/4fd16c7fecad043b4d000001-750.jpg"></img></Link>
              <h3 className="Lebron_blog_description">Where LeBron contemplates his revenge on the league</h3>
            </div>

            <div className="blog-2">
              <Link to={`users/${iversonId}`}><img className="Iverson_Smiling" src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/Allen_Iverson_headshot.jpg/220px-Allen_Iverson_headshot.jpg"></img></Link>
              <h3 className="Iverson_blog_description">I might be retired, but I'm still cheering hard as ever for my 76ers!</h3>
            </div>

            <div className="blog-3">
              <Link to={`users/${lukaId}`}><img className="Doncic_silly" src="https://media0.giphy.com/media/39qFkz5bbPpz33BAF3/giphy.gif"></img></Link>
              <h3 className="Doncic_blog_description">It's so much fun being in the NBA</h3>
            </div>
          </div>

          <br />
        <h3>Radar</h3>
          <hr />
          <div className="blog-4">
            <Link to={`users/${jarenId}`}><img className="Jaren_Jackson_Happy" src="https://media1.giphy.com/media/1hMaDJF8AzXIde3wzc/giphy.gif"></img></Link>
          </div>
      </div>



      
    );
  }

}

export default RecommendedBlogs;