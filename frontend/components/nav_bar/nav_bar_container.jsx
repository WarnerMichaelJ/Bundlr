
import { connect } from 'react-redux';
import NavigationBar from './nav_bar';
import { logout } from '../../actions/session_actions';
import { openModal } from '../../actions/ui/modal_actions';


const msp = state => ({
  currentUser: state.session.id,
  actualCurrentUser: state.entities.users[state.session.id]
});

const mdp = dispatch => ({
  logout: () => dispatch(logout()),
  openModal: (modal) => dispatch(openModal(modal)),

});

export default connect(msp, mdp)(NavigationBar);