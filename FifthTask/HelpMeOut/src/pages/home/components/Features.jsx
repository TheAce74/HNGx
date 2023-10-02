import featuresOne from "../../../assets/features-1.svg";
import featuresTwo from "../../../assets/features-2.svg";
import featuresThree from "../../../assets/features-3.svg";
import snapshot from "../../../assets/snapshot.png";
import { v4 as uuidv4 } from "uuid";

function Features() {
  const features = [
    {
      image: featuresOne,
      title: "Simple Screen Recording",
      text: "Effortless screen recording for everyone. Record with ease, no tech expertise required.",
    },
    {
      image: featuresTwo,
      title: "Easy-to-Share URL",
      text: "Share your recordings instantly with a single link. No attachments, no downloads.",
    },
    {
      image: featuresThree,
      title: "Revisit Recordings",
      text: "Access and review your past content effortlessly. Your recordings, always at your fingertips.",
    },
  ];

  return (
    <section className="features" id="features">
      <h2>Features</h2>
      <p>Key Highlights of Our Extension</p>
      <div>
        <div className="left">
          {features.map(({ image, title, text }) => (
            <div key={uuidv4()}>
              <img src={image} alt="" />
              <div>
                <h3>{title}</h3>
                <p>{text}</p>
              </div>
            </div>
          ))}
        </div>
        <img src={snapshot} alt="" />
      </div>
    </section>
  );
}

export default Features;
