import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { SearchBar } from './SearchBar';
import MovieList from './MovieList';
import { AddMovie } from './AddMovie';

class MovieLibrary extends Component {
  constructor(props) {
    super(props);

    const { movies } = this.props;

    this.state = {
      searchText: '',
      bookmarkedOnly: false,
      selectedGenre: '',
      movies,
    };
  }

  changeState = ({ target }) => {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    this.setState({
      [name]: value,
    });
  }

  filterMovies = () => {
    const { searchText, bookmarkedOnly, selectedGenre, movies } = this.state;
    let filteredMovies = movies;

    if (bookmarkedOnly) {
      filteredMovies = movies.filter(({ bookmarked }) => bookmarked);
    }

    if (selectedGenre) {
      filteredMovies = movies.filter(({ genre }) => genre === selectedGenre);
    }

    if (searchText) {
      filteredMovies = movies
        .filter(({ title, subtitle, storyline }) => `${title} ${subtitle} ${storyline}`
          .includes(searchText));
    }

    return filteredMovies;
  }

  addNewMovie = (event) => {
    this.setState((previusMovies) => ({
      movies: [...previusMovies.movies, event],
    }));
  }

  render = () => {
    const { searchText, bookmarkedOnly, selectedGenre } = this.state;

    return (
      <div>
        <SearchBar
          searchText={ searchText }
          onSearchTextChange={ this.changeState }
          bookmarkedOnly={ bookmarkedOnly }
          onBookmarkedChange={ this.changeState }
          selectedGenre={ selectedGenre }
          onSelectedGenreChange={ this.changeState }
        />
        <MovieList movies={ this.filterMovies() } />
        <AddMovie onClick={ this.addNewMovie } />
      </div>
    );
  }
}

export default MovieLibrary;

MovieLibrary.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.object).isRequired,
};
