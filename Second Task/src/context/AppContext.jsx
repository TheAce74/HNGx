import { createContext, useContext, useState } from "react";

const AppContext = createContext(null);

function AppContextProvider({ children }) {
  const [data, setData] = useState({
    top_movies: [],
  });
  const genres = {
    28: "Action",
    12: "Adventure",
    16: "Animation",
    35: "Comedy",
    80: "Crime",
    99: "Documentary",
    18: "Drama",
    10751: "Family",
    14: "Fantasy",
    36: "History",
    27: "Horror",
    10402: "Music",
    9648: "Mystery",
    10749: "Romance",
    878: "Science Fiction",
    10770: "TV Movie",
    53: "Thriller",
    10752: "War",
    37: "Western",
    10763: "News",
    10766: "Soap",
    10767: "Talk",
  };
  const value = {
    data,
    setData,
    genres,
  };
  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}

export function useAppContext() {
  return useContext(AppContext);
}

export default AppContextProvider;
