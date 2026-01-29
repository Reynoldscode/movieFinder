export default function NumResult({ movies }) {
  return (
    <>
      <p className="num-result">
        Found <strong>{movies.length}</strong> results
      </p>
    </>
  );
}
