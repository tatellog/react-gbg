import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import PokemonDetails from "./pages/PokemonDetails";
import { FavoritesProvider } from "./context/FavoritesContext";
import { PokemonFilterProvider } from "./context/PokemonFilterContext";

const App: React.FC = () => {
  return (
    <FavoritesProvider>
      <PokemonFilterProvider>
        <Router>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/pokemon/:name" element={<PokemonDetails />} />
          </Routes>
        </Router>
      </PokemonFilterProvider>
    </FavoritesProvider>
  );
};

export default App;
