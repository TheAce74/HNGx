// import SideBar from "../../components/layout/SideBar";

// function Series() {
//   return (
//     <section className="series">
//       <SideBar />
//       <div className="info">
//         <h1>TV Series</h1>
//       </div>
//     </section>
//   );
// }
// export default Series;
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

function Series() {
  const params = useParams();
  const navigate = useNavigate();
  const { get } = useFetch();
  const { genres } = useAppContext();

  const [seriesState, setSeriesState] = useState({
    loader: true,
    data: [],
  });

  const getTrailer = async () => {
    const response = await get(
      `https://api.themoviedb.org/3/tv/${params.id}/videos?api_key=${
        import.meta.env.VITE_API_KEY
      }`
    );
    if (response.success) {
      setSeriesState((prevData) => {
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

  const getSeriesData = async () => {
    setSeriesState({
      loader: true,
      data: [],
    });
    const response = await get(
      `https://api.themoviedb.org/3/tv/${params.id}?api_key=${
        import.meta.env.VITE_API_KEY
      }`
    );
    if (response.success) {
      setSeriesState({
        loader: false,
        data: [response.data],
      });
      getTrailer();
    } else {
      Swal.fire({
        title: "Failed to Fetch Series Data",
        text: response.data,
        icon: "error",
        confirmButtonText: "Discover More",
        confirmButtonColor: "var(--clr-primary-400)",
      }).then(() => {
        navigate("/series");
      });
    }
  };

  const getSeries = async () => {
    setSeriesState({
      loader: true,
      data: [],
    });
    const response = await get(
      `https://api.themoviedb.org/3/discover/tv?api_key=${
        import.meta.env.VITE_API_KEY
      }`
    );
    if (response.success) {
      setSeriesState({
        loader: false,
        data: response.data.results,
      });
    } else {
      Swal.fire({
        title: "Failed to Fetch TV Series",
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
      getSeriesData();
    } else {
      getSeries();
    }
  }, [params]);

  return (
    <section className="series">
      <SideBar />
      <div className="info">
        {seriesState.loader && <Loader />}
        {seriesState.data.length !== 0 ? (
          !params?.id ? (
            seriesState.data.map(
              ({
                id,
                poster_path,
                name,
                vote_average,
                first_air_date,
                genre_ids,
              }) => (
                <MovieCard
                  key={uuidv4()}
                  id={id}
                  moviePosterUrl={poster_path}
                  movieName={name}
                  movieReleaseDate={new Date(first_air_date)
                    .toUTCString()
                    .replace(" 00:00:00 GMT", "")}
                  imbdRating={vote_average * 10}
                  tomatoRating={
                    vote_average * 10 + Math.floor(Math.random() * 11)
                  }
                  movieCategories={genre_ids}
                  route="series"
                />
              )
            )
          ) : (
            <div className="details">
              <iframe
                width="560"
                height="315"
                src={
                  seriesState.data[1]?.results
                    ? `https://www.youtube.com/embed/${
                        seriesState.data[1].results[
                          seriesState.data[1].results.length - 1
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
                    aria-label="tv series title"
                    data-testid="tv-series-title"
                  >
                    {seriesState.data[0]?.name}
                  </h1>
                  <FaCircle />
                  <p aria-label="aired at" data-testid="tv-series-release-date">
                    {new Date(seriesState.data[0]?.first_air_date)
                      .toUTCString()
                      .replace(" 00:00:00 GMT", "")}
                  </p>
                  <FaCircle />
                  <span className="runtime">
                    <p aria-label="episode count" data-testid="series-episodes">
                      {seriesState.data[0]?.number_of_episodes}
                    </p>
                    <span>episode(s)</span>
                  </span>
                </div>
                <p
                  className="overview"
                  aria-label="overview"
                  data-testid="movie-overview"
                >
                  {seriesState.data[0]?.overview}
                </p>
                {seriesState.data[0]?.homepage && (
                  <a
                    href={seriesState.data[0].homepage}
                    target="_blank"
                    rel="noreferrer"
                  >
                    Homepage
                  </a>
                )}
                <div className="genres">
                  {seriesState.data[0]?.genres?.length !== 0 ? (
                    <>
                      <h2>Genres</h2>
                      <div>
                        {seriesState.data[0]?.genres?.map((genre) => (
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
export default Series;
