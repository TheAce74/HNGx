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

function Header({ headerClass }) {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <header className={headerClass}>
      <img src={logoDark} alt="logo" />
      <div className="wrapper">
        <input type="text" placeholder="What do you want to watch?" />
        <PiMagnifyingGlassBold />
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
