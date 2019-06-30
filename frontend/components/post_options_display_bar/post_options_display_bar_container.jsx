
import { connect } from 'react-redux';
import PostOptionsDisplayBar from './post_options_display_bar';


const msp = state => ({
  currentUser: state.session.id
});

const mdp = dispatch => ({
  
});

export default connect(msp, mdp)(PostOptionsDisplayBar);