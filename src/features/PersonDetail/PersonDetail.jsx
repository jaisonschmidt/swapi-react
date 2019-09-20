/* eslint-disable react/no-array-index-key */
/**
 * File: PersonDetail.jsx
 * Type: Feature
 * Author: Jaison Schmidt
 * Description: Component that render a single person detail and starship informations.
 * Data: 18/09/2019
 */
import React from 'react';
import PropTypes from 'prop-types';

import Starship from '../Starship/Starship';

import './PersonDetail.scss';

const PersonDetail = props => {
  const {
    person: { name, image, starships },
  } = props;
  return (
    <div className="personDetail">
      <div className="-detailbox">
        <div className="-imgcontainer">
          <img src={image} alt="" />
        </div>

        <div className="-detail">
          <div className="-name">{name}</div>

          {starships.length > 0 ? (
            <h2 className="-starshiptitle">Starships</h2>
          ) : (
            <h2 className="-starshiptitle">Starship not found</h2>
          )}

          {starships.map((starship, key) => (
            <Starship starship={starship} key={key} />
          ))}
        </div>
      </div>
    </div>
  );
};

PersonDetail.defaultProps = {
  person: {},
};

PersonDetail.propTypes = {
  person: PropTypes.shape({
    image: PropTypes.string,
    name: PropTypes.string,
    starships: PropTypes.array,
  }),
};

export default PersonDetail;
