import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import { ScrollToTop } from "./utils/ScrollToTop";
import Error from "./components/layout/Error";
import Home from "./pages/home/Home";
import Movies from "./pages/movies/Movies";
import Series from "./pages/series/Series";
import Upcoming from "./pages/upcoming/Upcoming";

function App() {
  const router = createBrowserRouter([
    {
      element: (
        <>
          <Outlet />
          <ScrollToTop />
        </>
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
        },
        {
          path: "/series",
          element: <Series />,
        },
        {
          path: "/upcoming",
          element: <Upcoming />,
        },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
