import Features from "./components/Features";
import Hero from "./components/Hero";
import HowItWorks from "./components/HowItWorks";
import Separator from "./components/Separator";

function Home() {
  return (
    <section>
      <Hero />
      <Separator />
      <Features />
      <Separator />
      <HowItWorks />
    </section>
  );
}

export default Home;
