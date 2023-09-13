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
import ClickAwayListener from "react-click-away-listener";

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
      <ClickAwayListener onClickAway={() => setShowMenu(false)}>
        <nav
          className={showMenu ? "nav show" : "nav"}
          id="primary-navigation"
          aria-label="primary navigation"
          aria-expanded={showMenu}
        >
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
      </ClickAwayListener>
    </header>
  );
}
export default Header;
