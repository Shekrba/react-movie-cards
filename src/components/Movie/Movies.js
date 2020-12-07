import React, { Component } from 'react';

import MovieList from './MovieList';
import MovieService from '../../services/MovieService';
import { Link } from 'react-router-dom';
import AddMovie from './AddMovie';

export default class Movies extends Component {
  state = {
    movies: [],
  };

  componentDidMount() {
    this.setState(() => ({
      movies: MovieService.getMovies(),
    }));
  }

  handleAdd = (movie) => {
    const movieList = [...this.state.movies];

    movie = {
      ...movie,
      id:movieList[movieList.length-1].id + 100
    };

    movieList.push(movie);

    this.setState({
      movies: movieList
    })
  }

  handleDelete = (movie) => {
    const movieList = this.state.movies.filter(m => (m.id !== movie.id));

    this.setState({
      movies: movieList
    })
  }

  handleRate = (id,rating) => {
    const movieList = [...this.state.movies];
    for(let m of movieList){
      if(m.id === id){
        m.numberOfRatings = m.numberOfRatings + 1;
        m.ratingSum = m.ratingSum + rating
        const notRoundRating = (m.ratingSum)/m.numberOfRatings;
        m.rating = Math.round(notRoundRating * 10) / 10
        break;
      }
    }

    this.setState({
      movies: movieList
    })
  }

  render() {
    return (
      <div className="container-fluid" style={{ marginLeft: '-15px' }}>
        <div className="d-flex flex-row">
          <div className="col-sm-12">
            <AddMovie onAdd={this.handleAdd}/>
          </div>
        </div>
        <div className="d-flex flex-row mt-5">
          <div className="col-sm-12">
            <MovieList onRate={this.handleRate} onDelete={this.handleDelete} movies={this.state.movies} />
          </div>
        </div>
      </div>
    );
  }
}
