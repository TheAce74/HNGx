import { useNavigate, useParams } from "react-router-dom";
import SideBar from "../../components/layout/SideBar";
import { useFetch } from "../../hooks/useFetch";
import { useEffect, useState } from "react";
import Swal from "sweetalert2";
import Loader from "../../components/layout/Loader";
import MovieCard from "../../components/ui/MovieCard";
import { v4 as uuidv4 } from "uuid";
import { FaCircle } from "react-icons/fa6";
import { useAppContext } from "../../context/AppContext";

function Movies() {
  const params = useParams();
  const navigate = useNavigate();
  const { get } = useFetch();
  const { genres } = useAppContext();

  const [movieState, setMovieState] = useState({
    loader: true,
    data: [],
  });

  const getTrailer = async () => {
    const response = await get(
      `https://api.themoviedb.org/3/movie/${params.id}/videos?api_key=${
        import.meta.env.VITE_API_KEY
      }`
    );
    if (response.success) {
      setMovieState((prevData) => {
        return {
          ...prevData,
          data: [...prevData.data, response.data],
        };
      });
    } else {
      Swal.fire({
        title: "Failed to Fetch Video",
        text: response.data,
        icon: "error",
        confirmButtonText: "OK",
        confirmButtonColor: "var(--clr-primary-400)",
      });
    }
  };

  const getMovieData = async () => {
    setMovieState({
      loader: true,
      data: [],
    });
    const response = await get(
      `https://api.themoviedb.org/3/movie/${params.id}?api_key=${
        import.meta.env.VITE_API_KEY
      }`
    );
    if (response.success) {
      setMovieState({
        loader: false,
        data: [response.data],
      });
      getTrailer();
    } else {
      Swal.fire({
        title: "Failed to Fetch Movie Data",
        text: response.data,
        icon: "error",
        confirmButtonText: "Discover More",
        confirmButtonColor: "var(--clr-primary-400)",
      }).then(() => {
        navigate("/movies");
      });
    }
  };

  const getMovies = async () => {
    setMovieState({
      loader: true,
      data: [],
    });
    const response = await get(
      `https://api.themoviedb.org/3/discover/movie?api_key=${
        import.meta.env.VITE_API_KEY
      }`
    );
    if (response.success) {
      setMovieState({
        loader: false,
        data: response.data.results,
      });
    } else {
      Swal.fire({
        title: "Failed to Fetch Movies",
        text: response.data,
        icon: "error",
        confirmButtonText: "Back to Home",
        confirmButtonColor: "var(--clr-primary-400)",
      }).then(() => {
        navigate("/");
      });
    }
  };

  useEffect(() => {
    if (params?.id) {
      getMovieData();
    } else {
      getMovies();
    }
  }, [params]);

  return (
    <section className="movies">
      <SideBar />
      <div className="info">
        {movieState.loader && <Loader />}
        {movieState.data.length !== 0 ? (
          !params?.id ? (
            movieState.data.map(
              ({
                id,
                poster_path,
                title,
                vote_average,
                release_date,
                genre_ids,
              }) => (
                <MovieCard
                  key={uuidv4()}
                  id={id}
                  moviePosterUrl={poster_path}
                  movieName={title}
                  movieReleaseDate={new Date(release_date)
                    .toUTCString()
                    .replace(" 00:00:00 GMT", "")}
                  imbdRating={vote_average * 10}
                  tomatoRating={
                    vote_average * 10 + Math.floor(Math.random() * 11)
                  }
                  movieCategories={genre_ids}
                  route="movies"
                />
              )
            )
          ) : (
            <div className="details">
              <iframe
                width="560"
                height="315"
                src={
                  movieState.data[1]?.results
                    ? `https://www.youtube.com/embed/${
                        movieState.data[1].results[
                          movieState.data[1].results.length - 1
                        ]?.key
                      }?si=QKsll6oypGAbVTob`
                    : ""
                }
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              ></iframe>
              <div className="details-flex">
                <div>
                  <h1 aria-label="movie title" data-testid="movie-title">
                    {movieState.data[0]?.title}
                  </h1>
                  <FaCircle />
                  <p aria-label="release date" data-testid="movie-release-date">
                    {new Date(movieState.data[0]?.release_date)
                      .toUTCString()
                      .replace(" 00:00:00 GMT", "")}
                  </p>
                  <FaCircle />
                  <span className="runtime">
                    <p aria-label="runtime" data-testid="movie-runtime">
                      {movieState.data[0]?.runtime}
                    </p>
                    <span>mins</span>
                  </span>
                </div>
                <p
                  className="overview"
                  aria-label="overview"
                  data-testid="movie-overview"
                >
                  {movieState.data[0]?.overview}
                </p>
                {movieState.data[0]?.homepage && (
                  <a
                    href={movieState.data[0].homepage}
                    target="_blank"
                    rel="noreferrer"
                  >
                    Homepage
                  </a>
                )}
                <div className="genres">
                  {movieState.data[0]?.genres?.length !== 0 ? (
                    <>
                      <h2>Genres</h2>
                      <div>
                        {movieState.data[0]?.genres?.map((genre) => (
                          <span key={uuidv4()}>{genres[genre.id]}</span>
                        ))}
                      </div>
                    </>
                  ) : null}
                </div>
              </div>
            </div>
          )
        ) : null}
      </div>
    </section>
  );
}
export default Movies;
