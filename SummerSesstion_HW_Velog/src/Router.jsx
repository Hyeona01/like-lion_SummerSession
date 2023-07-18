import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Home from "./Home";
import Detail from "./Detail";

const Router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "/detail",
        element: <Detail />,
      },
    ],
  },
]);
export default Router;