import Loader from "../../../components/layout/Loader";
import { v4 as uuidv4 } from "uuid";
import SearchResult from "./SearchResult";

export default function Search({ show, loading, data }) {
  return (
    <div className={show ? "search show" : "search"}>
      {loading && <Loader />}
      {data?.results?.length === 0 ? (
        <p>Nothing Found</p>
      ) : (
        data?.results?.map(({ id, poster_path, title, release_date }) => (
          <SearchResult
            key={uuidv4()}
            id={id}
            moviePosterUrl={poster_path}
            movieName={title}
            movieReleaseDate={new Date(release_date)
              .toUTCString()
              .replace(" 00:00:00 GMT", "")}
          />
        ))
      )}
    </div>
  );
}
