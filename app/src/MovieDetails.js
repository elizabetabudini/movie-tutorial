import React, { Component } from 'react';

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
        <div>
        <img src={movie.urlPoster} alt={movie.title}></img>
        <h1>{movie.title}</h1>
        <h3>{movie.year}</h3>
        <p>{movie.simplePlot}</p>
        </div>
          
    );
  }
  
}

export default MoviesDetails;
