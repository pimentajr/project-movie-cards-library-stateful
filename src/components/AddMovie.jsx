import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class AddMovie extends Component {
  constructor() {
    super();
    this.state = {
      subtitle: '',
      title: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    };
    this.handleChange = this.handleChange.bind(this);
    this.makeInput = this.makeInput.bind(this);
  }

  // Função para receber o valor dos inputs e salvar no state.
  handleChange({ target }) {
    const { name, value } = target;
    if (name === 'image') {
      this.setState({
        imagePath: value,
      });
    }
    this.setState({
      [name]: value,
    });
  }

  // Função que serve tanto para resetar o state quanto para chamar a função onClick de callback, com o parametro passado de todos dados guardados no state (title, subtitle...) e depois reseta os campos ao ser clicar no botão de adicionar filme.
  callbackForCreateMovie = () => {
    const { onClick } = this.props;
    onClick(this.state);
    this.setState({
      title: '',
      subtitle: '',
      storyline: '',
      rating: 0,
      imagePath: '',
      genre: 'action',
    });
  }

  // Criando os inputs dinamicamente, necessitando apenas a chamada da função com o this e os parametros necessarios. (diminuir a quantidade de linhas pro lint não reclamar)
  makeInput = (name, value, type, onChange) => (
    <input
      name={ name }
      value={ value }
      type={ type }
      data-testid={ `${name}-input` }
      id={ `${name}-input` }
      onChange={ onChange }
    />
  );

  // Criando os textareas dinamicamente, necessitando apenas a chamada da função com o this e os parametros necessarios. (diminuir a quantidade de linhas pro lint não reclamar)
  makeTextArea = (name, value, type, onChange) => (
    <textarea
      name={ name }
      value={ value }
      type={ type }
      data-testid={ `${name}-input` }
      id={ `${name}-input` }
      onChange={ onChange }
    />
  );

  render() {
    const { title, subtitle, imagePath, storyline, rating, genre } = this.state;
    return (
      <form data-testid="add-movie-form">
        <label htmlFor="title-input" data-testid="title-input-label">
          Título
          {this.makeInput('title', title, 'text', this.handleChange)}
        </label>
        <label htmlFor="subtitle-input" data-testid="subtitle-input-label">
          Subtítulo
          {this.makeInput('subtitle', subtitle, 'text', this.handleChange)}
        </label>
        <label htmlFor="image-input" data-testid="image-input-label">
          Imagem
          {this.makeInput('image', imagePath, 'text', this.handleChange)}
        </label>
        <label htmlFor="storyline-input" data-testid="storyline-input-label">
          Sinopse
          {this.makeTextArea('storyline', storyline, 'text', this.handleChange)}
        </label>
        <label htmlFor="rating-input" data-testid="rating-input-label">
          Avaliação
          {this.makeInput('rating', rating, 'number', this.handleChange)}
        </label>
        <label htmlFor="genre" data-testid="genre-input-label">
          Gênero
          <select
            name="genre"
            value={ genre }
            type="number"
            data-testid="genre-input"
            id="genre"
            onChange={ this.handleChange }
          >
            <option value="action" data-testid="genre-option">Ação</option>
            <option value="comedy" data-testid="genre-option">Comédia</option>
            <option value="thriller" data-testid="genre-option">Suspense</option>
          </select>
          <button
            type="button"
            data-testid="send-button"
            onClick={ this.callbackForCreateMovie } // Props criada para utilizar no movie Library, para criar uma nova div com o novo filme.
          >
            Adicionar filme
          </button>
        </label>
      </form>
    );
  }
}
AddMovie.propTypes = {
  onClick: PropTypes.func.isRequired,
};
