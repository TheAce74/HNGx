import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import Gallery from "./pages/gallery/Gallery";
import Error from "./components/layout/Error";
import Home from "./pages/home/Home";
import { AnimatePresence } from "framer-motion";
import { ScrollToTop } from "./utils/ScrollToTop";
import AppContextProvider from "./context/AppContext";

function App() {
  const router = createBrowserRouter([
    {
      element: (
        <AppContextProvider>
          <AnimatePresence>
            <Outlet />
            <ScrollToTop />
          </AnimatePresence>
        </AppContextProvider>
      ),
      errorElement: <Error />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/gallery",
          element: <Gallery />,
        },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
