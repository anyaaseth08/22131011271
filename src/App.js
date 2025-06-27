import React from "react";
import { useRoutes } from "react-router-dom";
import ShortenerForm from "./components/ShortenerForm";
import StatsPage from "./components/StatsPage";

function App() {
  const routes = useRoutes([
    { path: "/", element: <ShortenerForm /> },
    { path: "/stats", element: <StatsPage /> },
  ]);

  return routes;
}

export default App;
