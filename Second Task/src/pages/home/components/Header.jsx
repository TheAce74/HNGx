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

/*
import { NavLink } from "react-router-dom";
import techverse from "../../assets/images/techverse.svg";
import Button from "../ui/Button";
import { IoMdClose } from "react-icons/io";
import { RiMenu3Fill } from "react-icons/ri";
import { useEffect, useState } from "react";
import ClickAwayListener from "react-click-away-listener";
import { useAppContext } from "../../context/AppContext";

function Header() {
  const [openMenu, setOpenMenu] = useState(false);
  const { user, addUser } = useAppContext();

  const handleClickAway = () => {
    setOpenMenu(false);
  };

  const randomColor = () => {
    const colors = [
      "primary-400",
      "secondary-400",
      "accent-400",
      "accent-500",
      "neutral-900",
    ];
    return colors[Math.floor(Math.random() * colors.length)];
  };

  useEffect(() => {
    addUser({
      ...user,
      color: randomColor(),
    });
  }, [user.username]);

  return (
    <ClickAwayListener onClickAway={handleClickAway}>
      <header className="header">
        <NavLink to="/" className="home-link">
          <img src={techverse} alt="Go to home" title="Go to home" />
        </NavLink>
        <button
          aria-controls="primary-menu"
          className={openMenu ? "menu-button menu-button--open" : "menu-button"}
          onClick={() => setOpenMenu(!openMenu)}
        >
          {openMenu ? <IoMdClose /> : <RiMenu3Fill />}
        </button>
        <nav
          aria-label="primary navigation"
          id="primary-menu"
          className={openMenu ? "open" : ""}
          aria-expanded={openMenu ? true : false}
        >
          <ul role="list">
            <li>
              <NavLink
                to="/about"
                className={({ isActive }) =>
                  isActive ? "nav-link nav-link--current" : "nav-link"
                }
                onClick={handleClickAway}
              >
                About Us
                <span></span>
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/speakers"
                className={({ isActive }) =>
                  isActive ? "nav-link nav-link--current" : "nav-link"
                }
                onClick={handleClickAway}
              >
                Speakers
                <span></span>
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/contact"
                className={({ isActive }) =>
                  isActive ? "nav-link nav-link--current" : "nav-link"
                }
                onClick={handleClickAway}
              >
                Contact Us
                <span></span>
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/faq"
                className={({ isActive }) =>
                  isActive ? "nav-link nav-link--current" : "nav-link"
                }
                onClick={handleClickAway}
              >
                FAQ
                <span></span>
              </NavLink>
            </li>
          </ul>
        </nav>
        {!user?.username ? (
          <NavLink to="/signup" className="register">
            <Button color="secondary">Get Ticket</Button>
          </NavLink>
        ) : (
          <NavLink to="/profile" className="user" title="Go to profile">
            <span aria-hidden="true" data-color={user.color}>
              {user.image ? (
                <img src={user.image} alt="" />
              ) : (
                <span aria-hidden="true">
                  {user.username[0]?.toUpperCase()}
                </span>
              )}
            </span>
            <p>{user.username}</p>
          </NavLink>
        )}
      </header>
    </ClickAwayListener>
  );
}
export default Header;

*/
