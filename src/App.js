import React, { Component } from 'react';
import axios from "axios";
import Movie from './Movie';

class App extends Component {
 state = {
  isLoading : true,
  movies: []
 }
 getMovies = async () => {
  const {
    data: { 
      data :{movies}
    }
  } = await axios.get("https://yts.mx/api/v2/list_movies.json?sort_by=rating");
  // console.log(movies);
  // this.setState({movies:movies}); // movies : setState의 movies와 axios에서 온 movies > but 아래처럼 생략가능
  this.setState({movies, isLoading: false});


 }
 componentDidMount(){
  this.getMovies();
 }
  render() {
    const { isLoading, movies } = this.state;
    return <div>{isLoading ? "Loading..." 
      : 
      movies.map(movie => (
    
    <Movie 
    key={movie.id}
      id={movie.id} 
      year={movie.year} 
      summary={movie.summary} 
      title={movie.title} 
      poster={movie.medium_cover_image} 
    /> 
  ))}
  </div>
  }
}

export default App;
