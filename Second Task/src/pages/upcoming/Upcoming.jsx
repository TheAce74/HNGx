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

function Upcoming() {
  const params = useParams();
  const navigate = useNavigate();
  const { get } = useFetch();
  const { genres } = useAppContext();

  const [upcomingState, setUpcomingState] = useState({
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
      setUpcomingState((prevData) => {
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

  const getUpcomingData = async () => {
    setUpcomingState({
      loader: true,
      data: [],
    });
    const response = await get(
      `https://api.themoviedb.org/3/movie/${params.id}?api_key=${
        import.meta.env.VITE_API_KEY
      }`
    );
    if (response.success) {
      setUpcomingState({
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
        navigate("/upcoming");
      });
    }
  };

  const getUpcoming = async () => {
    setUpcomingState({
      loader: true,
      data: [],
    });
    const response = await get(
      `https://api.themoviedb.org/3/movie/upcoming?api_key=${
        import.meta.env.VITE_API_KEY
      }`
    );
    if (response.success) {
      setUpcomingState({
        loader: false,
        data: response.data.results,
      });
    } else {
      Swal.fire({
        title: "Failed to Fetch Upcoming Movies",
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
      getUpcomingData();
    } else {
      getUpcoming();
    }
  }, [params]);

  return (
    <section className="upcoming">
      <SideBar />
      <div className="info">
        {upcomingState.loader && <Loader />}
        {upcomingState.data.length !== 0 ? (
          !params?.id ? (
            upcomingState.data.map(
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
                  route="upcoming"
                />
              )
            )
          ) : (
            <div className="details">
              <iframe
                width="560"
                height="315"
                src={
                  upcomingState.data[1]?.results
                    ? `https://www.youtube.com/embed/${
                        upcomingState.data[1].results[
                          upcomingState.data[1].results.length - 1
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
                  <h1
                    aria-label="upcoming movie title"
                    data-testid="upcoming-movie-title"
                  >
                    {upcomingState.data[0]?.title}
                  </h1>
                  <FaCircle />
                  <p
                    aria-label="aired at"
                    data-testid="upcoming-movie-release-date"
                  >
                    {new Date(upcomingState.data[0]?.release_date)
                      .toUTCString()
                      .replace(" 00:00:00 GMT", "")}
                  </p>
                  <FaCircle />
                  <span className="runtime">
                    <p aria-label="runtime" data-testid="movie-runtime">
                      {upcomingState.data[0]?.runtime}
                    </p>
                    <span>mins</span>
                  </span>
                </div>
                <p
                  className="overview"
                  aria-label="overview"
                  data-testid="movie-overview"
                >
                  {upcomingState.data[0]?.overview}
                </p>
                {upcomingState.data[0]?.homepage && (
                  <a
                    href={upcomingState.data[0].homepage}
                    target="_blank"
                    rel="noreferrer"
                  >
                    Homepage
                  </a>
                )}
                <div className="genres">
                  {upcomingState.data[0]?.genres?.length !== 0 ? (
                    <>
                      <h2>Genres</h2>
                      <div>
                        {upcomingState.data[0]?.genres?.map((genre) => (
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
export default Upcoming;
