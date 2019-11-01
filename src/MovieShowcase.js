import React, { Component } from 'react';
import MovieCard from './card-components/MovieCard.js'
import movieData from './data.js'

export default class MovieShowcase extends Component {

  generateMovieCards = () => {
    // map over your movieData array and return an array of the correct JSX
    
    // return movieData.map((data, idx) => <MovieCard key={idx} {...data} />);
    return movieData.map((movie) => {
      
      // return <MovieCard key={movie.id} 
      //                   title={movie.title} 
      //                   IMDBRating={movie.IMDBRating} 
      //                   genres={movie.genres}
      //                   poster={movie.poster}
      // />
      return movieData.map((data, idx) => <MovieCard key={idx} {...data} />);
    })
  }

  

  render() {
    return (
      <div id="movie-showcase">
        {this.generateMovieCards()}
      </div>
    )
  }
}
