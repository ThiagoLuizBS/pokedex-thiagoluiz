import { render } from "@testing-library/react";
import Pokedex from "./page";
import { PokemonTypes } from "../components/PokemonTypes";
import { PokemonTable } from "../components/PokemonTable";

describe("Pokedex page", () => {
  it("should render app title", () => {
    const { getByText, getByAltText, getByPlaceholderText } = render(
      <Pokedex />
    );

    expect(getByText("Pokedex")).toBeInTheDocument();
    expect(getByAltText("Pokedex")).toBeInTheDocument();
    expect(getByText("Nome decrescente")).toBeInTheDocument();
    expect(getByPlaceholderText("Buscar...")).toBeInTheDocument();
  });

  it("not show the Table instantly", () => {
    const { queryByTestId } = render(<Pokedex />);

    expect(queryByTestId("table-component-test")).not.toBeInTheDocument();
  });
});

describe("PokemonTypes component", () => {
  it("should render the correct type", () => {
    const { getByAltText } = render(<PokemonTypes type="fighting" />);

    expect(getByAltText("Fighting")).toBeInTheDocument();
  });
});

describe("PokemonTable component", () => {
  const favorites = ["1", "2"];
  const favoriteButton = false;
  const typesFilter = "";
  const search = "";
  const setFavorites = () => {
    favorites.push("3");
  };
  const openModal = (id: number) => {};

  it("should render pokemonTable", () => {
    const { getByText, getByTestId } = render(
      <PokemonTable
        favorites={favorites}
        favoriteButton={favoriteButton}
        typesFilter={typesFilter}
        search={search}
        setFavorites={setFavorites}
        openModal={openModal}
        filteredPokemons={[
          {
            id: 1,
            name: "bulbasaur",
            base_experience: 64,
            height: 7,
            weight: 69,
            types: [],
            stats: [
              {
                base_stat: 45,
                effort: 0,
                stat: { name: "hp", url: "https://pokeapi.co/api/v2/stat/1/" },
              },
              {
                base_stat: 45,
                effort: 0,
                stat: { name: "hp", url: "https://pokeapi.co/api/v2/stat/1/" },
              },
              {
                base_stat: 45,
                effort: 0,
                stat: { name: "hp", url: "https://pokeapi.co/api/v2/stat/1/" },
              },
              {
                base_stat: 45,
                effort: 0,
                stat: { name: "hp", url: "https://pokeapi.co/api/v2/stat/1/" },
              },
              {
                base_stat: 45,
                effort: 0,
                stat: { name: "hp", url: "https://pokeapi.co/api/v2/stat/1/" },
              },
              {
                base_stat: 45,
                effort: 0,
                stat: { name: "hp", url: "https://pokeapi.co/api/v2/stat/1/" },
              },
            ],
            sprites: {
              front_default: "",
              versions: {
                "generation-v": {
                  "black-white": { animated: { front_default: "" } },
                },
              },
            },
          },
        ]}
      />
    );

    expect(getByTestId("table-test")).toBeInTheDocument();
    expect(getByText("Bulbasaur")).toBeInTheDocument();
  });
});
