import React from 'react';
import PropTypes from 'prop-types';

class SearchBar extends React.Component {
  render() {
    const { searchText, onSearchTextChange, bookmarkedOnly, onBookmarkedChange,
      selectedGenre, onSelectedGenreChange } = this.props;
    return (
      <form data-testid="search-bar-form">
        <label data-testid="text-input-label">
          Inclui o texto:
          <input
            type="text"
            name="text-input"
            value={ searchText }
            onChange={ onSearchTextChange }
            data-testid="text-input"
          />
        </label>
        <label data-testid="checkbox-input-label">
          Mostrar somente favoritos
          <input
            type="checkbox"
            name="checkbox-input"
            checked={ bookmarkedOnly }
            onChange={ onBookmarkedChange }
            data-testid="checkbox-input"
          />
        </label>
        <label data-testid="select-input-label">
          Filtrar por gênero
          <select
            data-testid="select-input"
            onChange={ onSelectedGenreChange }
            value={ selectedGenre }
          >
            <option data-testid="select-option" value=""> Todos </option>
            <option data-testid="select-option" value="action"> Ação </option>
            <option data-testid="select-option" value="comedy"> Comédia </option>
            <option data-testid="select-option" value="thriller"> Suspense </option>
          </select>
        </label>
      </form>
    );
  }
}

// FAZER O PROPTYPES NA DECLARACAO DAS CALLBACKS
// https://reactjs.org/docs/typechecking-with-proptypes.html

export default SearchBar;
