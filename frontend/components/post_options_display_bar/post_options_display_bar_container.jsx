
import { connect } from 'react-redux';
import PostOptionsDisplayBar from './post_options_display_bar';
import { openModal } from '../../actions/ui/modal_actions';


const msp = state => {
  let currentUser = state.entities.users[state.session.id];
  
  return {
  currentUser
  };
};

const mdp = dispatch => ({
  openModal: modal => dispatch(openModal(modal))
});

export default connect(msp, mdp)(PostOptionsDisplayBar);