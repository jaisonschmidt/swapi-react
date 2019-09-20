/**
 * File: PersonBox.jsx
 * Type: Feature
 * Author: Jaison Schmidt
 * Description: Component that render a single person as a card.
 * Data: 18/09/2019
 */
import React from 'react';
import PropTypes from 'prop-types';

import SwapiServive from '../../service/SwapiService';

import './PersonBox.scss';
import imageFailed from '../../assets/img/image-failed.jpg';

class PersonBox extends React.Component {
  constructor(props) {
    super(props);

    // define local state
    this.state = {
      image: null,
    };

    // local variables
    this.SwapiServive = new SwapiServive();
  }

  componentDidMount() {
    const { person } = this.props;
    this.SwapiServive.getPersonImage(person.name).then(image => {
      this.setState({ image: image.items[0].link });
    });
  }

  // eslint-disable-next-line class-methods-use-this
  addDefaultSrc(e) {
    e.target.src = imageFailed;
  }

  render() {
    const { person, openModal } = this.props;
    const { image } = this.state;
    return (
      <div className="personBox swiper-slide">
        <button
          type="button"
          className="-boxwrapper"
          onClick={() => openModal({ ...person, image })}
        >
          <div className="-imgwrapper">
            <img src={image} alt="" onError={this.addDefaultSrc} />
          </div>
          <div className="-persondetailbox">
            <div className="-name">{person.name}</div>
          </div>
        </button>
      </div>
    );
  }
}

PersonBox.defaultProps = {
  openModal: '',
  person: {},
};

PersonBox.propTypes = {
  openModal: PropTypes.func,
  person: PropTypes.shape({
    name: PropTypes.string,
  }),
};

export default PersonBox;
