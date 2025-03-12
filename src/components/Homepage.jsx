import React, {useState, useEffect} from 'react';
import '../../public/stylesheets/Homepage.css';
//import Container from './Container';

const Homepage = () => {
/*
*/
  const [movies, setMovies] = useState(null);
  const [ userSearch, setUserSearch] = useState('');
  const handleChangeSearch = (e) =>{
    setUserSearch(e.target.value)
  }
  
  const url = `https://www.omdbapi.com/?i=tt3896198&apikey=aba15675&s=${userSearch}`;
  const fetchData = async () => {
    try {
      const response = await fetch(url);
      const json = await response.json();
      console.log(json);
      setMovies(json.Search);
    } catch (error) {
      console.log("error", error);
    }
  };
  useEffect(() => {
    //alert('h')
    //fetchData();
  }, []);
  return (
    <>
      <section className="searchBox">
        <div className="searchContainer">
          <input type="search" placeholder="Search Here..." onChange={handleChangeSearch} value={userSearch || ""}/>
          <i onClick={()=> fetchData()}>S</i>
        </div>
      </section>
      <section className="container">
      {/*movies.length > 0 ? (
        <ul>
          {movies.map((movie,index)=> (
            <li key={index}>{movie.Title}</li>
          ))}
        </ul>
        ) : (
          <h1>Movie Not Found</h1>
        )*/}
      {movies === null ? (
        <p>Loading...</p>
        ) : movies.length > 0 ? (
        <div className="movie_container">
          {movies.map((movie, index) => (
           <div className="movie_box">
              <img src={movie.Poster} />
              <p>{movie.Title || "Unknown Title"}</p>
              <p>Year : {movie.Year}</p>
           </div>
          ))}
        </div>
        ) : (
          <h1>Movie Not Found</h1>
        )}
      </section>
    </>
  );
};
export default Homepage;