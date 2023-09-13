import { Link } from "react-router-dom";
import { FaAngleRight } from "react-icons/fa6";

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
    </section>
  );
}
export default Featured;
