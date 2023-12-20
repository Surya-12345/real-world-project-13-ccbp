import { useEffect, useState } from 'react';
import './App.css';
import axios from 'axios';
import MovieList from './components/MovieList';

function App() {

  const [movies, setMovies] = useState([]);
  const [page, setPage] = useState(1)

  const apiKey = "d9c25f09519311cb25281dbc2aa686c7";
  const url = 'https://api.themoviedb.org/3/discover/movie';

  useEffect(() => {
    fetchData()
    // eslint-disable-next-line
  },[page])

  const fetchData = () => {
    axios.get(`${url}?api_key=${apiKey}&page=${page}`).then((response) => {
      const result = response.data.results;
      setMovies(result)
    })
  }

  console.log(movies)
  console.log(page)

  return (
    <div className="App">
      <div className='navbar'>
        <h1 className='logo'>Movie Searcher</h1>
        <div className='input-container'>
          <input type='text' placeholder='Search Movie ...' className='input-box' />
          <button className='btn'>Search</button>
        </div>
      </div>
      {movies.map((movie) => (
        <MovieList movieItem={movie} />
      ))}
      <div className='btn-container'>
        <button className='btn1'type='button' onClick={() => {
          if (page===1){
            setPage(1)
          }
          else{
            setPage(page-1)
          }
        }}>Previous</button>
        <p className='page-number'>Page: {page}</p>
        <button className='btn2'type='button' onClick={() => setPage(page+1)}>Next</button>
      </div>
    </div>
  );
}

export default App;
