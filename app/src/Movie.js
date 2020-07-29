import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Movie = ({movie, desc}) => (
    <div>
        <Link to={`/${movie.idIMDB}`}>
            <img src={movie.urlPoster} alt={movie.title}></img>
        </Link>
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