<<<<<<< HEAD
import React from "react";
import { useRoutes } from "react-router-dom";
import ShortenerForm from "./components/ShortenerForm";
import StatsPage from "./components/StatsPage";

function App() {
  const routes = useRoutes([
    { path: "/", element: <ShortenerForm /> },
=======
// src/App.js
import React from "react";
import { useRoutes } from "react-router-dom";
import ShortenerForm from "./components/ShortenerForm";
import RedirectHandler from "./components/RedirectHandler";
import StatsPage from "./components/StatsPage";

const App = () => {
  const routes = useRoutes([
    { path: "/", element: <ShortenerForm /> },
    { path: "/:shortcode", element: <RedirectHandler /> }, // dynamic route
>>>>>>> 3094463 ( Initial Commit)
    { path: "/stats", element: <StatsPage /> },
  ]);

  return routes;
<<<<<<< HEAD
}
=======
};
>>>>>>> 3094463 ( Initial Commit)

export default App;
