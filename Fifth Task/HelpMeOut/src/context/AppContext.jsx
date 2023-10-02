import Loader from "../components/layout/Loader";
import { createContext, useContext, useState } from "react";

const AppContext = createContext({});

function AppContextProvider({ children }) {
  const [loader, setLoader] = useState(false);
  const [user, setUser] = useState({});

  const value = {
    loader,
    setLoader,
    user,
    setUser,
  };

  return (
    <AppContext.Provider value={value}>
      {children}
      {loader && <Loader />}
    </AppContext.Provider>
  );
}

export function useAppContext() {
  return useContext(AppContext);
}

export default AppContextProvider;
