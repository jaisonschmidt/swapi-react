/**
 * File: PersonBox.jsx
 * Type: PresentationComponent
 * Author: Jaison Schmidt
 * Description: Render information about an unique starship.
 * Data: 18/09/2019
 */
import React from 'react';
import PropTypes from 'prop-types';

import './Starship.scss';

const StarshipView = props => {
  const {
    starship: { name, model, crew },
  } = props;
  return (
    <div className="starship">
      <div className="-nameship">{name}</div>
      <div className="-detailship">Modelo: {model}</div>
      <div className="-detailship">Tripulantes: {crew}</div>
    </div>
  );
};

StarshipView.defaultProps = {
  starship: {},
};

StarshipView.propTypes = {
  starship: PropTypes.shape({
    name: PropTypes.string,
    model: PropTypes.string,
    crew: PropTypes.string,
  }),
};

export default StarshipView;
