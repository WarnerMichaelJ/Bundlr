
import { connect } from 'react-redux';
import CreatePostModal from './create_post_modal';

import { openModal, closeModal } from '../../actions/ui/modal_actions';



const mdp = (dispatch) => {
  return {
    openModal: modal => dispatch(openModal(modal)),
    closeModal: () => dispatch(closeModal())
  };
};

export default connect(null, mdp)(CreatePostModal);