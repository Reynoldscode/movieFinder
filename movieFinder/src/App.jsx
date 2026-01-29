import { useState } from "react";
import { tempMovieData } from "./data";
import NavBar from "./Component/NavBar";
import Main from "./Component/Main";
export default function App() {
  const [movies, setMovies] = useState(tempMovieData);
  return (
    <>
      <NavBar movies={movies} />
      <Main movies={movies} />
    </>
  );
}
