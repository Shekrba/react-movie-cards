import React from 'react';
import PropTypes from 'prop-types';

const width = 110;

const styles = {
  starsInner: {
    width: `${width}px`,
  },
  starsEmptyInner: {
    position: 'absolute',
    width: `${width}px`,
  },
  starsOuter: {
    overflow: 'hidden',
  },
  star: {
    padding: '1px',
  },
};

const cropWidth = rating => {
  return Math.floor((rating * width) / 5);
};

const StarRating = ({ rating, onRate, id }) => {
  const containerStyle = { width: `${cropWidth(rating)}px` };

  return (
    <div>
      <div style={styles.starsOuter}>
        <div style={containerStyle}>
          <div style={styles.starsEmptyInner}>
            <i onClick={() => onRate(id,1)} className="fa fa-star-o fa-lg" style={styles.star}></i>
            <i onClick={() => onRate(id,2)} className="fa fa-star-o fa-lg" style={styles.star}></i>
            <i onClick={() => onRate(id,3)} className="fa fa-star-o fa-lg" style={styles.star}></i>
            <i onClick={() => onRate(id,4)} className="fa fa-star-o fa-lg" style={styles.star}></i>
            <i onClick={() => onRate(id,5)} className="fa fa-star-o fa-lg" style={styles.star}></i>
          </div>
          <div style={styles.starsInner}>
            <i onClick={() => onRate(id,1)} className="fa fa-star fa-lg" style={styles.star}></i>
            <i onClick={() => onRate(id,2)} className="fa fa-star fa-lg" style={styles.star}></i>
            <i onClick={() => onRate(id,3)} className="fa fa-star fa-lg" style={styles.star}></i>
            <i onClick={() => onRate(id,4)} className="fa fa-star fa-lg" style={styles.star}></i>
            <i onClick={() => onRate(id,5)} className="fa fa-star fa-lg" style={styles.star}></i>
          </div>
        </div>
      </div>
    </div>
  );
};

StarRating.defaultProps = {
  rating: 0,
  onRate: () => {},
  id:0
};

StarRating.propTypes = {
  rating: PropTypes.number,
  onRate: PropTypes.func,
  id: PropTypes.number
};

export default StarRating;
