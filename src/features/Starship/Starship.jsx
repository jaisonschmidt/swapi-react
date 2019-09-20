import React from 'react';
import PropTypes from 'prop-types';
import SwapiService from '../../service/SwapiService';
import StarshipView from './StarshipView';

class Starship extends React.Component {
  constructor(props) {
    super(props);

    // initial state
    this.state = {
      starship: null,
    };

    // local variables
    this.SwapiService = new SwapiService();
  }

  componentDidMount() {
    const { starship } = this.props;
    this.SwapiService.getStarshipDetail(starship).then(response => {
      this.setState({ starship: response });
    });
  }

  // implements Presentation components
  render() {
    const { starship } = this.state;
    return (
      <div>
        {starship !== null ? (
          <StarshipView starship={starship} />
        ) : (
          <div className="starship">Carregando...</div>
        )}
      </div>
    );
  }
}

Starship.defaultProps = {
  starship: '',
};

Starship.propTypes = {
  starship: PropTypes.string,
};

export default Starship;
