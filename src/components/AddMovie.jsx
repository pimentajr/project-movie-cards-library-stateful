// implement AddMovie component here
import React from 'react';
import PropTypes from 'prop-types';

class AddMovie extends React.Component {
  constructor(props) {
    super(props);

    const { onClick } = this.props;

    this.state = {
      subtitle: '',
      title: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange({ target }) {
    const { name, value } = target;
    this.setState({
      [name]: value,
    });
  }

  render() {
    const { subtitle, title, imagePath, storyline, rating, genre } = this.props;
    return (
      <form data-testid="add-movie-form">
        <label data-testid="title-input-label" htmlFor="title-input">
          <input
            data-testid="title-input"
            value={ title }
            onChange={ this.handleChange }
          />
          Título
        </label>
        <label data-testid="subtitle-input-label" htmlFor="subtitle-input">
          <input
            data-testid="subtitle-input"
            value={ subtitle }
            onChange={ this.handleChange }
          />
          Subtítulo
        </label>
        <label data-testid="image-input-label" htmlFor="image-input">
          <input
            data-testid="image-input"
            value={ imagePath }
            onChange={ this.handleChange }
          />
          Imagem
        </label>
        <label data-testid="storyline-input-label" htmlFor="storyline-input">
          <textarea
            data-testid="storyline-input"
            value={ storyline }
            onChange={ this.handleChange }
          />
          Sinopse
        </label>
      </form>
    );
  }
}

AddMovie.propTypes = {
  subtitle: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  imagePath: PropTypes.string.isRequired,
  storyline: PropTypes.string.isRequired,
  rating: PropTypes.string.isRequired,
  genre: PropTypes.string.isRequired,
};

export default AddMovie;
