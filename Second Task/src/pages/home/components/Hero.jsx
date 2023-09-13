import { useState } from "react";
import Header from "./Header";
import { InView } from "react-intersection-observer";

function Hero() {
  const [headerClass, setHeaderClass] = useState("header");

  return (
    <InView
      as="section"
      className="hero"
      onChange={inView => {
        if (inView) {
          setHeaderClass("header");
        } else {
          setHeaderClass("header darken");
        }
      }}
      rootMargin="-150px"
    >
      <Header headerClass={headerClass} />
      <img
        src="https://media.istockphoto.com/id/1202746960/photo/3d-rendering-abstract-neon-background-empty-tunnel-long-corridor-path-road-performance-stage.jpg?s=2048x2048&w=is&k=20&c=iSW3g6hZT2AgH5QafzIUblMZ3VdlxwlNtXJ8C10NqMc="
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
