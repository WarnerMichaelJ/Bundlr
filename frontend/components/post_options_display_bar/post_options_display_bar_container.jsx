
import { connect } from 'react-redux';
import PostOptionsDisplayBar from './post_options_display_bar';
import { openModal } from '../../actions/ui/modal_actions';


const msp = state => ({
  currentUser: state.session.id
});

const mdp = dispatch => ({
  openModal: modal => dispatch(openModal(modal))
});

export default connect(msp, mdp)(PostOptionsDisplayBar);