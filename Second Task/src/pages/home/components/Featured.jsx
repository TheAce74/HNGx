import { Link } from "react-router-dom";
import { FaAngleRight, FaRegHeart } from "react-icons/fa6";
import imdb from "../../../assets/imdb.svg";
import tomato from "../../../assets/tomato.svg";

function Featured() {
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
        <div className="card">
          <span className="movie-type" aria-label="movie type">
            TV series
          </span>
          <button className="heart" aria-label="add to favorites">
            <FaRegHeart />
          </button>
          <img
            src="https://media.istockphoto.com/id/1202746960/photo/3d-rendering-abstract-neon-background-empty-tunnel-long-corridor-path-road-performance-stage.jpg?s=2048x2048&w=is&k=20&c=iSW3g6hZT2AgH5QafzIUblMZ3VdlxwlNtXJ8C10NqMc="
            alt=""
          />
          <p className="movie-location" aria-label="filmed at">
            USA 2016 - Current
          </p>
          <h3 className="movie-title">Stranger Things</h3>
          <div className="rating">
            <div>
              <img src={imdb} alt="" />
              <span aria-label="imdb rating">86.0/100</span>
            </div>
            <div>
              <img src={tomato} alt="" />
              <span aria-label="rotten tomatoes rating">97%</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
export default Featured;
