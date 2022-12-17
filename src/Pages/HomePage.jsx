import { useEffect, useState } from "react";
import MovieBox from "../Components/MovieBox";
import "../Styles/Pages/HomePage.css";
function HomePage() {
  const [search, setSearch] = useState(null);
  const [movies, setMovies] = useState(null);
  const fetchMovies = async () => {
    const response = await fetch(
      `https://api.themoviedb.org/3/movie/popular?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&page=1`
    );
    const Movies = await response.json();
    setMovies(Object.values(Movies));
  };
  const searchFetch = async (e) => {
    if (e.key == "Enter" && e.target.value !== "") {
      const response = await fetch(
        `https://api.themoviedb.org/3/search/movie?api_key=${process.env.REACT_APP_API_KEY}&l&language=en-US&query=${e.target.value}&page=1&include_adult=false`
      );
      const Movies = await response.json();
      setSearch(e.target.value);
      setMovies(Object.values(Movies));
    } else if (e.key == "Enter" && e.target.value === "") {
      fetchMovies();
      setSearch(null);
    }
  };
  useEffect(() => {
    fetchMovies();
  }, []);
  //console.log(movies);
  return (
    <div>
      <div className="searchSection">
        <div>
          <img src="Images/Logo.png" alt="" />
        </div>
        <div className="searchBox">
          <input
            type="text"
            placeholder=" 🔍 search Movie"
            onKeyDown={searchFetch}
          />
        </div>
      </div>
      <div className="line"></div>

      <div className="movieSection">
        <h1>{search ? `Search result for ${search}` : "Most Recent Movie"}</h1>
        <div className="gridContainer">
          {movies &&
            movies[1].map((movie) => {
              //console.log(movie);
              return (
                <div className="gridItem">
                  <MovieBox movieDetail={movie} />
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
}

export default HomePage;
