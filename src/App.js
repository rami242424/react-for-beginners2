import { useEffect, useState } from "react";

function App(){
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);
  const getMovies = async() => {
    // 번외 방법1
    // const response = await fetch(
    //   `https://yts.mx/api/v2/list_movies.json?minimum_rating=9&sort_by=year`
    // );
    // const json  = await response.json();
  //   setMovies(json.data.movies);
  //   setLoading(false);
  // };

    //번외 방법2
    const json = await (
      await fetch(
        `https://yts.mx/api/v2/list_movies.json?minimum_rating=9&sort_by=year`
      )
    ).json();  
    setMovies(json.data.movies);
    setLoading(false);
  };

  useEffect(() => {
    // 방법1 fetch와 .then 사용하기
    // fetch(
    //   "https://yts.mx/api/v2/list_movies.json?minimum_rating=9&sort_by=year"
    // ).then((response) => response.json()
    // ).then((json) => {
    //   setMovies(json.data.movies)
    //   setLoading(false);
    // });

    // 방법2 async-await 사용하기
    getMovies()

    }, []);
    
  // console.log(movies);
  return (
    <div>
      {loading ? <h1>Loading...</h1> : <div>{movies.map((movie) => (
        <div key={movie.id}>
          <img src={movie.medium_cover_image} />
          <h2>{movie.title}</h2>
          <p>{movie.summary}</p>
          <ul>
            {movie.genres.map(g => (
            <li key={g}>{g}</li>
            )
            )}
          </ul>
        </div>
      ))}
      </div>
      }
    </div>
  );
}

export default App;