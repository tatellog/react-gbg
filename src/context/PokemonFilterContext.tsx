import React, { createContext, useContext, useState, ReactNode } from "react";

interface PokemonFilterContextType {
  sortBy: string;
  filterByType: string;
  setSortBy: (sortBy: string) => void;
  setFilterByType: (type: string) => void;
}

const PokemonFilterContext = createContext<
  PokemonFilterContextType | undefined
>(undefined);

export const PokemonFilterProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [sortBy, setSortBy] = useState<string>("name");
  const [filterByType, setFilterByType] = useState<string>("");

  const handleSetSortBy = (sortBy: string) => setSortBy(sortBy);
  const handleSetFilterByType = (type: string) => setFilterByType(type);

  return (
    <PokemonFilterContext.Provider
      value={{
        sortBy,
        filterByType,
        setSortBy: handleSetSortBy,
        setFilterByType: handleSetFilterByType,
      }}
    >
      {children}
    </PokemonFilterContext.Provider>
  );
};

export const usePokemonFilter = () => {
  const context = useContext(PokemonFilterContext);
  if (context === undefined) {
    throw new Error(
      "usePokemonFilter must be used within a PokemonFilterProvider"
    );
  }
  return context;
};
