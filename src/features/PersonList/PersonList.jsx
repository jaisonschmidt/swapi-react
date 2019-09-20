/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/no-array-index-key */
/**
 * File: PersonList.jsx
 * Type: Feature
 * Author: Jaison Schmidt
 * Description: Component that render a list of PersonBox.
 * Data: 18/09/2019
 */

/**
 * TODO: apply presentation components
 */

import React from 'react';
import PropTypes from 'prop-types';
import Modal from 'react-modal';
import Swiper from 'react-id-swiper';

import Loading from '../Loading/Loading';
import PersonBox from '../PersonBox/PersonBox';
import PersonDetail from '../PersonDetail/PersonDetail';

import './PersonList.scss';

// Moda styled-component
const modalStyles = {
  overlay: {
    backgroundColor: 'rgba(0,0,0,0.8)',
  },
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    width: '100%',
  },
};

// append modal element
Modal.setAppElement('#root');

class PersonList extends React.Component {
  constructor() {
    super();

    // define local state
    this.state = {
      modalIsOpen: false,
      personDetail: null,
    };

    // bindings
    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  /*
   * Open a modal with specific person
   * Remove body scroll
   */
  openModal(person) {
    document.body.classList.add('modalOpen');
    this.setState({ modalIsOpen: true, personDetail: person });
  }

  /*
   * Close detail modal
   * Enable body scroll
   */
  closeModal() {
    document.body.classList.remove('modalOpen');
    this.setState({ modalIsOpen: false });
  }

  render() {
    const {
      doPagination,
      isLoadingList,
      people: { nextPage, results },
    } = this.props;

    /*
     * Render personbox
     */
    const childElements = results.map((person, key) => {
      return (
        <PersonBox
          imageLoaded={this.imageLoaded}
          openModal={this.openModal}
          person={person}
          key={key}
        />
      );
    });

    /*
     * Render pagination button
     */
    const buttonPagination =
      nextPage !== null ? (
        <button type="button" className="-buttonpagination" onClick={() => doPagination(nextPage)}>
          Carregar mais personagens &gt;
        </button>
      ) : null;

    const { modalIsOpen, personDetail } = this.state;

    const swiperParams = {
      slidesPerView: 'auto',
      shouldSwiperUpdate: true,
      freeMode: true,
      resizeReInit: true,
      scrollbar: {
        el: '.swiper-scrollbar',
        hide: false,
      },
    };

    return (
      <>
        {isLoadingList ? <Loading /> : null}
        <div className="personList">
          {!isLoadingList ? buttonPagination : null}
          {/* begin Modal */}
          <Modal
            isOpen={modalIsOpen}
            onAfterOpen={this.afterOpenModal}
            onRequestClose={this.closeModal}
            style={modalStyles}
            className="modalDetail"
            percentPosition
          >
            {/* close Modal */}
            <button type="button" onClick={this.closeModal} className="-btnclosemodal">
              X
            </button>

            {/* Modal content */}
            {personDetail !== null ? <PersonDetail person={personDetail} /> : 'Carregando...'}
          </Modal>
          {/* end Modal */}
          <Swiper {...swiperParams}>{childElements}</Swiper>
        </div>
      </>
    );
  }
}

PersonList.defaultProps = {
  isLoadingList: false,
  doPagination: '',
  people: {},
};

PersonList.propTypes = {
  isLoadingList: PropTypes.bool,
  doPagination: PropTypes.func,
  people: PropTypes.shape({
    nextPage: PropTypes.string,
    results: PropTypes.array,
  }),
};

export default PersonList;
