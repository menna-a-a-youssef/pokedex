import { Navigate, Route, Routes } from "react-router-dom";

import PokemonInfinite from "./pages/PokemonInfinite/PokemonInfinite";
import PokemonPagination from "./pages/PokemonPagination/PokemonPagination";
import PokemonDetails from "./pages/PokemonDetails/PokemonDetails";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/pokemon" replace />} />
      <Route
        path="/pokemon"
        element={
          <PokemonPagination subtitle="Discover and explore Pokemon with page controls" />
        }
      />
      <Route
        path="/pokemon/infinite"
        element={
          <PokemonInfinite subtitle="Discover and explore Pokemon with infinite scroll" />
        }
      />
      <Route path="/pokemon/:id" element={<PokemonDetails />} />
    </Routes>
  );
};

export default App;
