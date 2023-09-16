import { Link } from "react-router-dom";
import imdb from "../../assets/imdb.svg";
import tomato from "../../assets/tomato.svg";
import FavButton from "./FavButton";
import Button from "./Button";
import { useAppContext } from "../../context/AppContext";

export default function MovieCard({
  moviePosterUrl,
  movieReleaseDate,
  movieName,
  imbdRating,
  tomatoRating,
  id,
  movieCategories,
  route,
}) {
  const { genres } = useAppContext();

  return (
    <div className="movie-card" tabIndex={0} data-testid="movie-card">
      <span className="movie-type">
        {route === "movies"
          ? "Movie"
          : route === "series"
          ? "TV Series"
          : "Film"}
      </span>
      <FavButton />
      <div>
        <img
          src={`https://image.tmdb.org/t/p/original${moviePosterUrl}`}
          alt="movie poster"
          className="movie-poster"
          data-testid="movie-poster"
        />
        <span className="overlay"></span>
      </div>
      <div className="padding-inline">
        <p
          className="movie-airtime"
          aria-label="aired at"
          data-testid="movie-release-date"
        >
          {movieReleaseDate}
        </p>
        <h3 className="movie-title" data-testid="movie-title">
          {movieName}
        </h3>
        <div className="rating">
          <div>
            <img src={imdb} alt="" />
            <span aria-label="imdb rating">{imbdRating}/100</span>
          </div>
          <div>
            <img src={tomato} alt="" />
            <span aria-label="rotten tomatoes rating">{tomatoRating}%</span>
          </div>
        </div>
        <div className="movie-categories">
          {movieCategories
            ?.map((id) => genres[id])
            .sort()
            .join(", ")
            .trim()[
            movieCategories
              ?.map((id) => genres[id])
              .sort()
              .join(", ")
              .trim().length - 1
          ] === ","
            ? movieCategories
                ?.map((id) => genres[id])
                .sort()
                .join(", ")
                .trim()
                .slice(
                  0,
                  movieCategories
                    ?.map((id) => genres[id])
                    .sort()
                    .join(", ")
                    .trim().length - 1
                )
            : movieCategories
                ?.map((id) => genres[id])
                .sort()
                .join(", ")
                .trim()}
        </div>
      </div>
      <Link to={`/${route}/${id}`}>
        <Button>
          {route === "movies"
            ? "View Movie"
            : route === "series"
            ? "View Series"
            : "View"}
        </Button>
      </Link>
    </div>
  );
}
