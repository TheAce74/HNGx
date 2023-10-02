import logoDark from "../../assets/logo-dark.svg";
import { HashLink } from "react-router-hash-link";

function Footer() {
  return (
    <footer className="footer">
      <img src={logoDark} alt="" />
      <ul role="list">
        <li>Menu</li>
        <li>
          <HashLink to="/#hero">Home</HashLink>
        </li>
        <li>
          <HashLink to="/#hero">Converter</HashLink>
        </li>
        <li>
          <HashLink to="/#how-it-works">How it Works</HashLink>
        </li>
      </ul>
      <ul role="list">
        <li>About Us</li>
        <li>
          <HashLink to="/#hero">About</HashLink>
        </li>
        <li>
          <HashLink to="/#hero">Contact Us</HashLink>
        </li>
        <li>
          <HashLink to="/#hero">Privacy Policy</HashLink>
        </li>
      </ul>
      <ul role="list">
        <li>Screen Record</li>
        <li>
          <HashLink to="/#hero">Browser Window</HashLink>
        </li>
        <li>
          <HashLink to="/#hero">Desktop</HashLink>
        </li>
        <li>
          <HashLink to="/#hero">Application</HashLink>
        </li>
      </ul>
    </footer>
  );
}

export default Footer;
