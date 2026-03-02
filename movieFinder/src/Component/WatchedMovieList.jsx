// checkcode
export default function WatchedMovieList({ watched }) {
  <ul className="list">
    {watched.map((movie) => (
      <WatchedMovie momvie={movie} key={movie.imdbID} />
    ))}
  </ul>;
}

function WatchedMovie({ movie }) {
  return (
    <li>
      <img
        src={movie.poster}
        alt={`${movie.title}
       poster`}
      />

      <h3>{movie.title}</h3>
      <div>
        <p>
          <span>⭐</span>
          <span>{movie.imdbRating}</span>
        </p>
        <p>
          <span>⌛</span>
          <span>{movie.runtime}min</span>
        </p>
      </div>
    </li>
  );
}
