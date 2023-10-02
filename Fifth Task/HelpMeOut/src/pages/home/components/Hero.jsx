import Button from "../../../components/ui/Button";
import { HiOutlineArrowLongRight } from "react-icons/hi2";
import gridStuffOne from "../../../assets/grid-stuff.svg";
import gridStuffTwo from "../../../assets/grid-stuff-2.svg";
import pic1 from "../../../assets/pic1.png";
import pic2 from "../../../assets/pic2.png";
import pic3 from "../../../assets/pic3.png";

function Hero() {
  return (
    <section className="hero" id="hero">
      <div className="left">
        <h1>Show Them Don&apos;t Just Tell</h1>
        <p>
          Help your friends and loved ones by creating and sending videos on how
          to get things done on a website.
        </p>
        {/* this should be an external link */}
        <Button>
          <span>Install HelpMeOut</span>
          <HiOutlineArrowLongRight />
        </Button>
      </div>
      <div className="right">
        <span></span>
        <img src={gridStuffOne} alt="" />
        <img src={gridStuffTwo} alt="" />
        <div className="inner-grid">
          <div>
            <img src={pic1} alt="" />
            <img src={pic2} alt="" />
          </div>
          <img src={pic3} alt="" />
        </div>
      </div>
    </section>
  );
}

export default Hero;
