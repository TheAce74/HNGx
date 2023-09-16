import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import { ScrollToTop } from "./utils/ScrollToTop";
import Error from "./components/layout/Error";
import Home from "./pages/home/Home";
import Movies from "./pages/movies/Movies";
import Series from "./pages/series/Series";
import Upcoming from "./pages/upcoming/Upcoming";
import AppContextProvider from "./context/AppContext";

function App() {
  const router = createBrowserRouter([
    {
      element: (
        <AppContextProvider>
          <Outlet />
          <ScrollToTop />
        </AppContextProvider>
      ),
      errorElement: <Error />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/movies",
          element: <Movies />,
          children: [
            {
              path: "/movies/:id",
              element: <Movies />,
            },
          ],
        },
        {
          path: "/series",
          element: <Series />,
          children: [
            {
              path: "/series/:id",
              element: <Series />,
            },
          ],
        },
        {
          path: "/upcoming",
          element: <Upcoming />,
          children: [
            {
              path: "/upcoming/:id",
              element: <Upcoming />,
            },
          ],
        },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
