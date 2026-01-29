import WatchedBox from "./WatchedBox";
import ListBox from "./ListBox";

export default function Main({ movies }) {
  return (
    <>
      <main className="main">
        <ListBox movies={movies} />
        <WatchedBox />
      </main>
    </>
  );
}
