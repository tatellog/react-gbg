import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import FilterComponent from "../components/Filter";
import { PokemonFilterProvider } from "../context/PokemonFilterContext";

const Wrapper: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <PokemonFilterProvider>{children}</PokemonFilterProvider>
);

test("renders filter component and interacts with it", () => {
  render(<FilterComponent />, { wrapper: Wrapper });

  const sortBySelect = screen.getByLabelText(/Sort By/i) as HTMLSelectElement;
  fireEvent.change(sortBySelect, { target: { value: "hp" } });
  expect(sortBySelect.value).toBe("hp");

  const typeFilterSelect = screen.getByLabelText(
    /Filter By Type/i
  ) as HTMLSelectElement;
  fireEvent.change(typeFilterSelect, { target: { value: "water" } });
  expect(typeFilterSelect.value).toBe("water");
});
