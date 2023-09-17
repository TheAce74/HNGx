import { Link } from "react-router-dom";
import { FaAngleRight } from "react-icons/fa6";
import MovieCard from "../../../components/ui/MovieCard";
import { useEffect, useState } from "react";
import Loader from "../../../components/layout/Loader";
import { useAppContext } from "../../../context/AppContext";
import { v4 as uuidv4 } from "uuid";

function Featured() {
  const [loader, setLoader] = useState(true);
  const { data } = useAppContext();

  useEffect(() => {
    if (data.top_movies.length !== 0) {
      setLoader(false);
    } else {
      setLoader(true);
    }
  }, [data]);

  return (
    <section className="featured">
      <div className="head">
        <h2>Featured Movies</h2>
        <Link to="/movies">
          <span>See more</span>
          <FaAngleRight />
        </Link>
      </div>
      <div className="body">
        {loader ? (
          <Loader />
        ) : (
          data?.top_movies
            ?.slice(0, 12)
            .map(
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
                  // movieReleaseDate={new Date(release_date)
                  //   .toUTCString()
                  //   .replace(" 00:00:00 GMT", "")}
                  movieReleaseDate={release_date}
                  imbdRating={vote_average * 10}
                  tomatoRating={
                    vote_average * 10 + Math.floor(Math.random() * 11)
                  }
                  movieCategories={genre_ids}
                  route="movies"
                />
              )
            )
        )}
      </div>
    </section>
  );
}
export default Featured;
