import Search from "../Component/Search";
import Logo from "../Component/Logo";
import Numresult from "../Component/NumResult";

export default function NavBar({ movies }) {
  return (
    <>
      <nav className="nav-bar">
        <Logo />
        <Search />
        <Numresult movies={movies} />
      </nav>
    </>
  );
}
