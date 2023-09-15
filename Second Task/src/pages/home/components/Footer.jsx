import {
  FaSquareFacebook,
  FaInstagram,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa6";

function Footer() {
  return (
    <footer className="footer">
      <ul role="list">
        <li>
          <a
            href="https://facebook.com/chisom.udonsi"
            aria-label="facebook"
            target="_blank"
            rel="noreferrer"
          >
            <FaSquareFacebook />
          </a>
        </li>
        <li>
          <a
            href="https://www.instagram.com/chisomudonsi "
            target="_blank"
            rel="noreferrer"
            aria-label="instagram"
          >
            <FaInstagram />
          </a>
        </li>
        <li>
          <a
            href="https://twitter.com/TheAce74"
            aria-label="twitter"
            target="_blank"
            rel="noreferrer"
          >
            <FaTwitter />
          </a>
        </li>
        <li>
          <a
            href="https://www.youtube.com/@acecoding4647"
            aria-label="youtube"
            target="_blank"
            rel="noreferrer"
          >
            <FaYoutube />
          </a>
        </li>
      </ul>
      <div className="footer-flex">
        <p>Conditions of Use</p>
        <p>Privacy &amp; Policy</p>
        <p>Press Room</p>
      </div>
      <p>&copy; MovieBox by Chisom Raphael Udonsi</p>
    </footer>
  );
}
export default Footer;
