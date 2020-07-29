import React, { Component } from 'react';
import { Poster } from './Movie';
import styled from 'styled-components';
import Overdrive from 'react-overdrive';

class MoviesDetails extends Component {
  state = {
    movie: {},
  }

  async componentDidMount(){
    try {
       const res = await fetch(`https://www.myapifilms.com/imdb/idIMDB?idIMDB=${this.props.match.params.idIMDB}&token=de22ca05-8965-497b-b36e-9bf49c579aa2&format=json&data=1`);
       const movie = await res.json();
       this.setState({
         movie: movie.data.movies[0]
       })

    } catch(e) {
      console.log(e)
    }
  }
  render(){
      const { movie } = this.state;
    return (
        <MovieWrapper back={movie.urlPoster}>
            <MovieInfo>
            <Overdrive id={movie.idIMDB}>
                <Poster src={movie.urlPoster} alt={movie.title}/>
            </Overdrive>
                <div> 
                    <h1>{movie.title}</h1>
                    <h3>{movie.year}</h3>
                    <p>{movie.simplePlot}</p>
                </div>
            </MovieInfo>
        </MovieWrapper>
          
    );
  }
  
}

export default MoviesDetails;

const MovieWrapper = styled.div`
   position:relative;
   padding-top: 10vh;
`;
const MovieInfo = styled.div`
   background: white;
   text-align: left;
   padding: 2rem 10%;
   display: flex;
   > div{
       margin-left: 20px;
   }
   img {
       position: relative;
       top: -5rem;
   }
`;

