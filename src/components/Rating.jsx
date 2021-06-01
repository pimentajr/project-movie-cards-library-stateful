import React from 'react';
import PropTypes from 'prop-types';

class Rating extends React.Component {
  render() {
    const { rating, func } = this.props;
    return (
      <label htmlFor="i2" data-testid="rating-input-label">
        Avaliação
        <input
          id="rating-input"
          type="number"
          data-testid="rating-input"
          value={ rating }
          name="rating"
          onChange={ func }
        />
      </label>
    );
  }
}
export default Rating;

Rating.propTypes = {
  rating: PropTypes.string.isRequired,
  func: PropTypes.func.isRequired,
};
