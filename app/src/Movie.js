import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Overdrive from 'react-overdrive';

const Movie = ({movie, desc}) => (
    <Link to={`/${movie.idIMDB}`}>
        <Overdrive id={movie.idIMDB}>
            <Poster src={movie.urlPoster} alt={movie.title}/>
        </Overdrive>
        
    </Link>
    
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
export const Poster = styled.img`
    box-shadow: 0 0 35px black;
`;