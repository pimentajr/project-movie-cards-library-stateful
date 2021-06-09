import React from 'react';
import PropTypes from 'prop-types';

class StoryLine extends React.Component {
  render() {
    const { value, handleChange } = this.props;
    return (
      <label data-testid="storyline-input-label" htmlFor="storyline-input">
        Sinopse
        <textarea
          data-testid="storyline-input"
          name="storyline"
          type="text"
          value={ value }
          onChange={ handleChange }
        />
      </label>
    );
  }
}
StoryLine.propTypes = {
  value: PropTypes.string,
  handleChange: PropTypes.func,
}.isRequired;

export default StoryLine;
