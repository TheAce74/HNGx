import image from "../../../assets/image.png";
import { v4 as uuidv4 } from "uuid";

function HowItWorks() {
  const works = [
    {
      title: "Record Screen",
      text: 'Click the "Start Recording" button in our extension.  choose which part of your screen to capture and who you want to send it to.',
    },
    {
      title: "Share Your Recording",
      text: "We generate a shareable link for your video. Simply send it to your audience via email or copy the link to send via any platform.",
    },
    {
      title: "Learn Effortlessly",
      text: "Recipients can access your video effortlessly through the provided link, with our user-friendly interface suitable for everyone.",
    },
  ];
  return (
    <section className="how-it-works" id="how-it-works">
      <h2>How it works</h2>
      <div className="steps">
        {works.map(({ title, text }, index) => (
          <div key={uuidv4()}>
            <span>
              <span>{index + 1}</span>
            </span>
            <h3>{title}</h3>
            <p>{text}</p>
            <img src={image} alt="" />
          </div>
        ))}
      </div>
    </section>
  );
}

export default HowItWorks;
