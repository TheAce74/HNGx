import { Link, NavLink } from "react-router-dom";
import logoDark from "../../../assets/logoDark.svg";
import { PiMagnifyingGlassBold } from "react-icons/pi";
import { HiOutlineMenuAlt4 } from "react-icons/hi";
import { GrHomeRounded } from "react-icons/gr";
import { LuVideo } from "react-icons/lu";
import { MdOndemandVideo } from "react-icons/md";
import { BsCalendar3 } from "react-icons/bs";
import { IoClose } from "react-icons/io5";
import Button from "../../../components/ui/Button";
import { useState } from "react";
import Search from "./Search";
import { useFetch } from "../../../hooks/useFetch";
import Swal from "sweetalert2";

function Header({ headerClass }) {
  const [showMenu, setShowMenu] = useState(false);
  const [search, setSearch] = useState({
    show: false,
    loading: true,
  });
  const [data, setData] = useState({});
  const { get } = useFetch();

  const searchMovie = async query => {
    setSearch(prevSearch => {
      return {
        ...prevSearch,
        loading: true,
      };
    });
    const response = await get(
      `https://api.themoviedb.org/3/search/movie?query=${query
        .split(" ")
        .join("+")}&api_key=${import.meta.env.VITE_API_KEY}`
    );
    if (response.success) {
      setSearch(prevSearch => {
        return {
          ...prevSearch,
          loading: false,
        };
      });
      setData(response.data);
    } else {
      Swal.fire({
        title: "Search Error!",
        text: response.data,
        icon: "error",
        confirmButtonText: "Retry",
        confirmButtonColor: "var(--clr-primary-400)",
      });
    }
  };

  const handleChange = e => {
    setData([]);
    if (e.target.value !== "") {
      setSearch(prevSearch => {
        return {
          ...prevSearch,
          show: true,
        };
      });
      searchMovie(e.target.value);
    } else {
      setSearch(prevSearch => {
        return {
          ...prevSearch,
          show: false,
        };
      });
    }
  };

  return (
    <header className={headerClass}>
      <img src={logoDark} alt="logo" />
      <div className="wrapper">
        <input
          type="text"
          placeholder="What do you want to watch?"
          onChange={handleChange}
        />
        <PiMagnifyingGlassBold />
        <Search loading={search.loading} show={search.show} data={data} />
      </div>
      <div className="header-flex">
        <Link to="/">Sign in</Link>
        <Button
          rounded={true}
          handleClick={() => setShowMenu(!showMenu)}
          ariaLabel="menu button"
          ariaControls="primary-navigation"
        >
          {showMenu ? <IoClose /> : <HiOutlineMenuAlt4 />}
        </Button>
      </div>
      <nav
        className={showMenu ? "nav show" : "nav"}
        id="primary-navigation"
        aria-label="primary navigation"
        aria-expanded={showMenu}
      >
        <ul role="list">
          <li>
            <NavLink
              to="/"
              className={({ isActive }) => (isActive ? "current" : "")}
            >
              <GrHomeRounded />
              <span>Home</span>
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/movies"
              className={({ isActive }) => (isActive ? "current" : "")}
            >
              <LuVideo />
              <span>Movies</span>
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/series"
              className={({ isActive }) => (isActive ? "current" : "")}
            >
              <MdOndemandVideo />
              <span>TV Series</span>
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/upcoming"
              className={({ isActive }) => (isActive ? "current" : "")}
            >
              <BsCalendar3 />
              <span>Upcoming</span>
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}
export default Header;
