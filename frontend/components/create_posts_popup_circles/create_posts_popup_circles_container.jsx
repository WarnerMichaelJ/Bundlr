

import { connect } from 'react-redux';
import PopupCirclesPostOptions from './create_posts_popup_circles';
import { openModal } from '../../actions/ui/modal_actions';


const msp = state => ({
  currentUser: state.session.id
});

const mdp = dispatch => ({
  openModal: modal => dispatch(openModal(modal))
});

export default connect(msp, mdp)(PopupCirclesPostOptions);