import Featured from "./components/Featured";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import { useState } from "react";
import { useFetch } from "../../hooks/useFetch";
import { useEffect } from "react";
import { useAppContext } from "../../context/AppContext";
import Swal from "sweetalert2";

function Home() {
  const [headerClass, setHeaderClass] = useState("header");
  const { get } = useFetch();
  const { data, setData } = useAppContext();

  const getMovies = async () => {
    const response = await get(
      `https://api.themoviedb.org/3/movie/top_rated?api_key=${
        import.meta.env.VITE_API_KEY
      }`
    );
    if (response.success) {
      setData({
        ...data,
        top_movies: response.data.results,
      });
    } else {
      Swal.fire({
        title: "Failed to Fetch Featured Movies",
        text: response.data,
        icon: "error",
        confirmButtonText: "Retry",
        confirmButtonColor: "var(--clr-primary-400)",
      }).then(() => {
        getMovies();
      });
    }
  };

  useEffect(() => {
    getMovies();
  }, []);

  return (
    <main className="home">
      <Header headerClass={headerClass} />
      <Hero setHeaderClass={setHeaderClass} />
      <Featured />
      <Footer />
    </main>
  );
}
export default Home;
