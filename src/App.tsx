import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./views/home";
import Pokemons from "./views/pokemons";
import Regions from "./views/regions";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path:"/pokemons",
      element: <Pokemons />
    },
    {
      path: "/regions",
      element: <Regions />,
    },
  ]);

  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
