import { Link } from "react-router-dom";
import logo from "../../assets/logo.svg";
import { HashLink } from "react-router-hash-link";
import { CgMenu, CgClose } from "react-icons/cg";
import Button from "../ui/Button";
import { useState } from "react";

function Header() {
  const [openMenu, setOpenMenu] = useState(false);

  return (
    <header className="header">
      <HashLink to="/#hero">
        <img src={logo} alt="" />
      </HashLink>
      <nav className={openMenu ? "open" : ""}>
        <ul role="list">
          <li>
            <HashLink to="/#features" onClick={() => setOpenMenu(!openMenu)}>
              Features
            </HashLink>
          </li>
          <li>
            <HashLink
              to="/#how-it-works"
              onClick={() => setOpenMenu(!openMenu)}
            >
              How It Works
            </HashLink>
          </li>
        </ul>
      </nav>
      <div className="extra">
        <Link to="/register" onClick={() => setOpenMenu(!openMenu)}>
          Get Started
        </Link>
        <Button handleClick={() => setOpenMenu(!openMenu)}>
          {!openMenu ? <CgMenu /> : <CgClose />}
        </Button>
      </div>
    </header>
  );
}

export default Header;
