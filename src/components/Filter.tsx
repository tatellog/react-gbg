import React from "react";
import { Box, FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import { usePokemonFilter } from "../context/PokemonFilterContext";

const FilterComponent: React.FC = () => {
  const { sortBy, filterByType, setSortBy, setFilterByType } =
    usePokemonFilter();

  const handleSortChange = (event: React.ChangeEvent<{ value: unknown }>) => {
    setSortBy(event.target.value as string);
  };

  const handleTypeFilterChange = (
    event: React.ChangeEvent<{ value: unknown }>
  ) => {
    setFilterByType(event.target.value as string);
  };

  return (
    <Box mb={2} display="flex" gap={2} m={3}>
      <FormControl fullWidth>
        <InputLabel>Sort By</InputLabel>
        <Select value={sortBy} onChange={() => handleSortChange}>
          <MenuItem value="name">Name</MenuItem>
          <MenuItem value="hp">HP</MenuItem>
          <MenuItem value="attack">Attack</MenuItem>
          <MenuItem value="defense">Defense</MenuItem>
          {/* Add more stats if needed */}
        </Select>
      </FormControl>

      <FormControl fullWidth>
        <InputLabel>Filter By Type</InputLabel>
        <Select value={filterByType} onChange={() => handleTypeFilterChange}>
          <MenuItem value="">All Types</MenuItem>
          <MenuItem value="fire">Fire</MenuItem>
          <MenuItem value="water">Water</MenuItem>
          <MenuItem value="grass">Grass</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
};

export default FilterComponent;
