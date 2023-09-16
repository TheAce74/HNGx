import { InView } from "react-intersection-observer";

function Hero({ setHeaderClass }) {
  return (
    <InView
      as="section"
      className="hero"
      onChange={(inView) => {
        if (inView) {
          setHeaderClass("header");
        } else {
          setHeaderClass("header darken");
        }
      }}
      rootMargin="-600px 0px 0px 0px"
    >
      <img
        src="https://media.istockphoto.com/id/1224036158/photo/abstract-backgrounds-lights.jpg?s=612x612&w=0&k=20&c=uz_5ZIRS3WXXyYpCOy1Rm-_eHFpVLNFPZ_HUWcANK8I="
        alt=""
        className="bg"
      />
      <div className="splash">
        <h1>Welcome to MovieBox</h1>
        <p>
          Lights, camera, action! Step into the world of cinematic wonders with
          MovieBox, your passport to movie magic. Get ready for a thrilling ride
          through the silver screen, where stories come to life, emotions run
          deep, and heroes are born.
        </p>
      </div>
    </InView>
  );
}
export default Hero;
