import React from 'react';
import PropTypes from 'prop-types';

const Movie = ({movie, desc}) => (
    <div>
        <h3>{movie.title}</h3>
        <p>{desc}</p>
    </div>
);
export default Movie;

Movie.propTypes = {
    movie: PropTypes.shape({
        title: PropTypes.string.isRequired,
        
    }).isRequired,
    desc: PropTypes.string
}
Movie.defaultProps = {
    desc: 'Plot not available'
}