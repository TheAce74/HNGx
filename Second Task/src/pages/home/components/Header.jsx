import { Link } from "react-router-dom";
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
        <Button rounded={true} handleClick={() => setShowMenu(!showMenu)}>
          {showMenu ? <IoClose /> : <HiOutlineMenuAlt4 />}
        </Button>
      </div>
      <nav className={showMenu ? "nav show" : "nav"}>
        <ul role="list">
          <li>
            <Link to="/">
              <GrHomeRounded />
              <span>Home</span>
            </Link>
          </li>
          <li>
            <Link to="/movies">
              <LuVideo />
              <span>Movies</span>
            </Link>
          </li>
          <li>
            <Link to="/series">
              <MdOndemandVideo />
              <span>TV Series</span>
            </Link>
          </li>
          <li>
            <Link to="/upcoming">
              <BsCalendar3 />
              <span>Upcoming</span>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
export default Header;
