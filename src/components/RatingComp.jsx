import React from 'react';
import PropTypes from 'prop-types';

class RatingComp extends React.Component {
  render() {
    const {
      data, value, name, inputName, inputData, inputType, func,
    } = this.props;
    return (
      <label data-testid={ data } htmlFor={ inputName }>
        {name}
        <input
          type={ inputType }
          value={ value }
          name={ inputName }
          data-testid={ inputData }
          onChange={ func }
        />
      </label>
    );
  }
}
export default RatingComp;

RatingComp.propTypes = {
  data: PropTypes.string.isRequired,
  value: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  inputType: PropTypes.string.isRequired,
  inputName: PropTypes.string.isRequired,
  inputData: PropTypes.string.isRequired,
  func: PropTypes.func.isRequired,
};
