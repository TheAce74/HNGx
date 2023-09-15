import { Link } from "react-router-dom";

export default function SearchResult({
  id,
  moviePosterUrl,
  movieName,
  movieReleaseDate,
}) {
  return (
    <Link to={`/movies/${id}`} className="search-result">
      <img
        src={`https://image.tmdb.org/t/p/original${moviePosterUrl}`}
        alt=""
      />
      <div>
        <h3>{movieName}</h3>
        <p>{movieReleaseDate}</p>
      </div>
    </Link>
  );
}
