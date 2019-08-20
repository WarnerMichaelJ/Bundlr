
import React from 'react';
import { connect } from 'react-redux';
// import LoginFormContainer from '';
// import SignupFormContainer from '';

import { closeModal } from '../../actions/ui/modal_actions';

import TextPostForm from '../posts/forms/text_post_form_container';

import QuotePostForm from '../posts/forms/create_quote_form_container';

import LinkPostForm from '../posts/forms/link_post_form_container';

import PhotoPostForm from '../posts/forms/photo_post_form_container';

import PopupCirclesPostOptions from '../create_posts_popup_circles/create_posts_popup_circles_container';

function Modal({ modal, closeModal }) {
  if (!modal) {
    return null;
  }

  let component;

  switch (modal) {
    case 'Text Post Form':
      component = <TextPostForm />;
      break;
    case 'Quote Post Form':
      component = <QuotePostForm />;
      break;
    case 'Link Post Form':
      component = <LinkPostForm />;
      break;
    case 'Photo Post Form':
      component = <PhotoPostForm />;
      break;
    case 'render post creation circles':
      component = <PopupCirclesPostOptions />;
      break;
    default:
      return null;
  }
  return (
    <div className="modal-background" onClick={closeModal}>
      <div className="modal-child" onClick={e => e.stopPropagation()}>
        {component}
      </div>
    </div>
  );
}

const mapStateToProps = state => {
  return {
    modal: state.ui.modal
  };
};

const mapDispatchToProps = dispatch => {
  return {
    closeModal: () => dispatch(closeModal())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Modal);


