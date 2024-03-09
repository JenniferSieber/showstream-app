import { createBrowserRouter } from "react-router-dom";
import Error from "@/pages/error"
import Login from "@/pages/login"
import Signup from "@/pages/signup"
import Home from "@/pages/home"
import Movies from "@/pages/movies"
import TvSeries from "@/pages/tv-series"
import Watchlist from "@/pages/watchlist"

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
    errorElement: <Error />
  },
  {
    path: "/signup",
    element: <Signup />,
    errorElement: <Error />
  },
  {
    path: "/home",
    element: <Home />,
    errorElement: <Error />
  },
  {
    path: "/movies",
    element: <Movies />,
    errorElement: <Error />
  },
  {
    path: "/tv-series",
    element: <TvSeries />,
    errorElement: <Error />
  },
  {
    path: "/watchlist",
    element: <Watchlist />,
    errorElement: <Error />
  },
  {
    path: "/error",
    element: <Error />,
    errorElement: <Error />
  },
]);

