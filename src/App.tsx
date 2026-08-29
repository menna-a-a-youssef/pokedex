import { Navigate, Route, Routes } from 'react-router-dom';

import PokemonInfinite from './pages/PokemonInfinite/PokemonInfinite';
import PokemonPagination from './pages/PokemonPagination/PokemonPagination';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/pokemon" replace />} />
      <Route
        path="/pokemon"
        element={
          <PokemonPagination
            subtitle="Discover and explore Pokemon with page controls"
          />
        }
      />
      <Route
        path="/pokemon/infinite"
        element={
          <PokemonInfinite
            subtitle="Discover and explore Pokemon with infinite scroll"
          />
        }
      />
    </Routes>
  );
};

export default App;