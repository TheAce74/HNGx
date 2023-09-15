import logoLight from "../../assets/logoLight.svg";
import { Link, NavLink } from "react-router-dom";
import { GrHomeRounded } from "react-icons/gr";
import { LuVideo } from "react-icons/lu";
import { MdOndemandVideo } from "react-icons/md";
import { BsCalendar3 } from "react-icons/bs";
import { BiLogOut } from "react-icons/bi";

export default function SideBar() {
  return (
    <aside className="sidebar">
      <img src={logoLight} alt="logo" />
      <nav>
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
      <div className="extra">
        <h4>Play movie quizzes and earn free tickets</h4>
        <p>50k people are playing now</p>
        <span>Start playing</span>
      </div>
      <Link to="/">
        <BiLogOut />
        <span>Log out</span>
      </Link>
    </aside>
  );
}
