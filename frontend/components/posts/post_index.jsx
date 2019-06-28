import React from 'react';
import ReactDOM from 'react-dom';

import { Link } from 'react-router-dom';

import PostIndexItem from './post_index';



class PostIndex extends React.Component {
  constructor(props) {
    super(props);

    this.state = this.props.posts; 
  }

  componentDidMount() {
    this.props.fetchPosts();
    
  }


  render () {
    let posts = this.props.posts.map(post => {
      return (
        <PostIndexItem 
          post={post}
          key={post.id}
          deletePost={this.props.deletePost}
        />
      )
    })
  }

}

// render() {
//   let events = this.props.events.map(event => {
//     return (
//       <EventIndexItem
//         event={event}
//         key={event.id}
//         deleteEvent={this.props.deleteEvent}
//       />
//     );
//   });
//   return (
//     <div>
//       <ul>
//         {events}
//       </ul>
//       <Link to={`/events/new`}></Link>
//     </div>
//   );
}
