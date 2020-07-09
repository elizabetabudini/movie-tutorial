import React from 'react';
import PropTypes from 'prop-types';


const Movie = ({movie, desc}) => (
    <div>
        <img src={movie.urlPoster} alt={movie.title}></img>
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