import React from 'react';
import PropTypes from 'prop-types';

import StarRating from '../StarRating';

const MovieCard = ({ movie, onDelete, onRate}) => (
  <div className="movie-card">

    <div className="movie-card card">
      <img className="card-img-top" src={movie.imageUrl} alt="" />
      <div className="card-body">
        <h4 className="card-title">{movie.title}</h4>
        <h6 className="card-subtitle mb-2 text-muted">{movie.subtitle}</h6>
        <p className="text-justify" style={{ fontSize: '14px' }}>
          {movie.description}
        </p>
      </div>
      <div className="card-footer">
        <div className="clearfix">
          <div className="float-left mt-1">
            <StarRating onRate={onRate} id={movie.id} rating={movie.rating} />
          </div>
            <button onClick={() => onDelete(movie)} className="btn btn-danger float-right ml-2">Delete</button>
            <div data-toggle="tooltip" data-placement="top" title={`${movie.numberOfRatings} people rated this movie`} className="card-footer-badge badge float-right badge-primary  mt-1 badge-pill">{movie.rating}</div>
        </div>
      </div>
    </div>
  </div>
);

MovieCard.defaultProps = {
  movie: {},
  onDelete: () => {},
  onRate: () => {}
};

MovieCard.propTypes = {
  movie: PropTypes.object,
  onDelete: PropTypes.func,
  onRate: PropTypes.func
};

export default MovieCard;
