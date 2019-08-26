
import { connect } from 'react-redux';

import { fetchUsers } from '../../actions/user_actions';

import RecommendedBlogs from './blogs_to_the_right';

const msp = (state, ownProps) => {
  let users = Object.values(state.entities.users);

 
  return {
  users
  };
};

const mdp = dispatch => ({
  fetchUsers: () => dispatch(fetchUsers())
});

export default connect(
  msp,
  mdp
)(RecommendedBlogs);
