import React, { Component } from 'react';
import Movie from './Movie';
import styled from 'styled-components'

class MoviesList extends Component {
  state = {
    movies: [],
  }

  async componentDidMount(){
    try {
       const res = await fetch("https://www.myapifilms.com/imdb/top?token=de22ca05-8965-497b-b36e-9bf49c579aa2&format=json&data=1");
       const movies = await res.json();
       this.setState({
         movies: movies.data.movies
       })

    } catch(e) {
      console.log(e)
    }
  }
  render(){
    return (
        <MovieGrid>
        {this.state.movies.map((movie, i)=> (
                    <Movie key={i} movie={movie} desc={movie.simplePlot}/>
                    )
                )}
        </MovieGrid>
          
    );
  }
  
}

export default MoviesList;
const MovieGrid = styled.div`
   display: grid;
   padding: 1rem;
   grid-template-columns: repeat(6, 1fr);
   grid-row-gap: 1rem;
`;
