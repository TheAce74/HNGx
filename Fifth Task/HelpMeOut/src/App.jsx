import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import Error from "./components/layout/Error";
import Home from "./pages/home/Home";
import { ScrollToTop } from "./utils/ScrollToTop";
import AppContextProvider from "./context/AppContext";
import Register from "./pages/register/Register";
import Profile from "./pages/profile/Profile";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";

function App() {
  const router = createBrowserRouter([
    {
      element: (
        <AppContextProvider>
          <Header />
          <Outlet />
          <Footer />
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
          path: "/register",
          element: <Register />,
        },
        {
          path: "/profile",
          element: <Profile />,
        },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
