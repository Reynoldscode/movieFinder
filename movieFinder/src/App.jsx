import { useState } from "react";
import { tempMovieData, tempWatchedData } from "./data";
import NavBar from "./Component/NavBar";
import Main from "./Component/Main";
import Search from "../src/Component/Search";
import WatchedMovieList from "./Component/WatchedMovieList";
import Box from "./Component/Box";
import MovieList from "./Component/MovieList";
import WatchedSummary from "./Component/WatchedBox";
import Numresult from "../src/Component/NumResult";
import StarRating from "./Component/StarRating";

function Test() {
  const [movieRating, setMovieRating] = useState(0);

  return (
    <div>
      <StarRating color="green" maxRating={10} onSetRating={setMovieRating} />
      <p>This movie was rated {movieRating} stars</p>
    </div>
  );
}

export default function App() {
  const [movies, setMovies] = useState(tempMovieData);
  const [watched, setWatched] = useState(tempWatchedData);
  return (
    <>
      <NavBar>
        <Search />
        <Numresult movies={movies} />
      </NavBar>

      <Main>
        <Box>
          <MovieList movies={movies} />
        </Box>
        <Box>
          <WatchedSummary watched={watched} />
          <WatchedMovieList watched={watched} />
          <StarRating
            maxRating={5}
            messages={["Terible", "Bad", "Okay", "Good", "Amazing"]}
          />
          <StarRating
            size={24}
            color="red"
            className="test"
            defaultRating={3}
          />
          <Test />
        </Box>
      </Main>
    </>
  );
}

// Good for routing using element prop(alternative way without using the children prop)
{
  /* <Box element={<MovieList movies={movies} />} />
        <Box
          element={
            <>
              <WatchedSummary watched={watched} />
              <WatchedMovieList watched={watched} />
            </>
          }
        /> */
}
