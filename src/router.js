import Home from "./Pages/home"
import Html from "./Pages/html"
import Css from "./Pages/css"
import JavaScript from "./Pages/javascript"
import { createBrowserRouter } from "react-router-dom";

export  const router= createBrowserRouter([
  {
    path: "/",
    element:<Home/>,
    errorElement: <h1>Sorry.........</h1>
  },
  {
    path: "/html",
    element:<Html/>,
  },
  {
    path: "/css",
    element:<Css/>,
  },
  {
    path: "/javascript",
    element:<JavaScript/>,
  },
])