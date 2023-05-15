"use client";
import { useEffect, useState } from "react";
import axios from "axios";
import { Pokemon, Type } from "../interfaces/Pokemon";
import {
  Box,
  Container,
  useDisclosure,
  Button,
  Input,
  Select,
  Text,
} from "@chakra-ui/react";
import { StarIcon } from "@chakra-ui/icons";
import { PokemonModal } from "../components/PokemonModal";
import { PokemonTable } from "../components/PokemonTable";

export default function Pokedex() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [loading, setLoading] = useState<boolean>(true);

  const [pokemonsList, setPokemonsList] = useState<Pokemon[]>([]);
  const [favorites, setFavorites] = useState<string[]>([]);
  const [pokemonIdSelected, setPokemonIdSelected] = useState<number>(0);
  const [typesOptions, setTypesOptions] = useState<string[]>([]);

  const [search, setSearch] = useState<string>("");
  const [favoriteButton, setFavoriteButton] = useState<boolean>(false);
  const [typesFilter, setTypesFilter] = useState<string>("");
  const [orderFilter, setOrderFilter] = useState<string>("1");

  const filteredPokemons = favoriteButton
    ? pokemonsList.filter(
        (item) =>
          favorites.some((favorite) => parseInt(favorite) === item.id) &&
          item.types.some((type) =>
            type.type.name.includes(typesFilter.toLowerCase())
          ) &&
          item.name.includes(search.toLowerCase())
      )
    : pokemonsList.filter(
        (item) =>
          item.types.some((type) =>
            type.type.name.includes(typesFilter.toLowerCase())
          ) && item.name.includes(search.toLowerCase())
      );

  typesOptions.sort();

  filteredPokemons.sort((a, b) => {
    if (orderFilter === "1")
      if (a.id > b.id) return 1;
      else return -1;
    else if (orderFilter === "2")
      if (a.id > b.id) return -1;
      else return 1;
    else if (orderFilter === "3") return a.name.localeCompare(b.name);
    else if (orderFilter === "4") return a.name.localeCompare(b.name) * -1;
    else if (orderFilter === "5")
      if (
        a.types.length > 1 &&
        b.types.length < 2 &&
        a.types[0].type.name === b.types[0].type.name
      )
        return 1;
      else if (
        a.types.length < 2 &&
        b.types.length > 1 &&
        a.types[0].type.name === b.types[0].type.name
      )
        return -1;
      else if (
        a.types.length > 1 &&
        b.types.length > 1 &&
        a.types[0].type.name === b.types[0].type.name
      )
        return a.types[1].type.name.localeCompare(b.types[1].type.name);
      else return a.types[0].type.name.localeCompare(b.types[0].type.name);
    else if (orderFilter === "6")
      if (
        a.types.length > 1 &&
        b.types.length < 2 &&
        a.types[0].type.name === b.types[0].type.name
      )
        return 1;
      else if (
        a.types.length < 2 &&
        b.types.length > 1 &&
        a.types[0].type.name === b.types[0].type.name
      )
        return -1;
      else if (
        a.types.length > 1 &&
        b.types.length > 1 &&
        a.types[0].type.name === b.types[0].type.name
      )
        return a.types[1].type.name.localeCompare(b.types[1].type.name) * -1;
      else return a.types[0].type.name.localeCompare(b.types[0].type.name) * -1;
    return 0;
  });

  const fetchPokemonsList = () => {
    axios
      .get("https://pokeapi.co/api/v2/pokemon/?offset=0&limit=151")
      .then((response) => {
        setPokemonsList([]);
        const typesOptionsArray: string[] = [];
        const pokemonsArray = [...response.data.results];

        const promisesArray = pokemonsArray.map((item) => {
          return axios.get(item.url);
        });

        Promise.all(promisesArray).then((values) => {
          values.map((item) => {
            item.data.types.map((type: Type) => {
              if (!typesOptionsArray.some((prev) => prev === type.type.name))
                typesOptionsArray.push(type.type.name);
            });
            setPokemonsList((prev) => [...prev, item.data]);
          });
        });
        setTypesOptions(typesOptionsArray);
        setLoading(false);
      });
  };

  useEffect(() => {
    fetchPokemonsList();
  }, []);

  useEffect(() => {
    if (
      window !== undefined &&
      window?.localStorage.getItem("pokemons-favorites") !== null
    ) {
      setFavorites(
        JSON.parse(window.localStorage.getItem("pokemons-favorites") ?? "")
      );
    }
  }, []);

  useEffect(() => {
    window.localStorage.setItem(
      "pokemons-favorites",
      JSON.stringify(favorites)
    );
  }, [favorites]);

  const openModal = (id: number) => {
    setPokemonIdSelected(
      pokemonsList.findIndex((object) => {
        return object.id === id;
      })
    );
    onOpen();
  };

  const changeFavoritesButton = () => {
    if (favoriteButton) setFavoriteButton(false);
    else setFavoriteButton(true);
  };

  return (
    <Container className="min-h-screen min-w-full" maxW="1536px" centerContent>
      <Box
        className="flex flex-col xl:flex-row text-center items-center justify-center w-full md:w-4/5 xl:w-2/3"
        margin={4}
      >
        <Box className="flex flex-row text-center items-center justify-center mb-4 xl:m-0">
          <img src="/images/pokedex.png" alt="Pokedex" width={100} />
          <Text className="text-center font-bold text-4xl">Pokedex</Text>
        </Box>
        <Box className="flex flex-col sm:flex-row text-center justify-center xl:justify-end items-start sm:items-center space-y-4 sm:space-y-0 sm:space-x-4 w-2/5 sm:w-full">
          <Button
            className="text-black font-bold border border-sky-600 cursor-pointer w-fit"
            leftIcon={<StarIcon />}
            isActive={favoriteButton}
            _active={{
              bg: "#64748b",
              color: "white",
              transform: "scale(0.98)",
            }}
            onClick={() => changeFavoritesButton()}
          >
            Favoritos
          </Button>
          <Select
            className="text-black text-ellipsis font-bold border-sky-600 cursor-pointer hover:border-sky-600"
            _hover={{ backgroundColor: "#e2e8f0" }}
            placeholder="Tipos"
            iconColor="black"
            width="120px"
            onChange={(e) => setTypesFilter(e.target.value)}
          >
            {typesOptions.map((type) => {
              return (
                <option
                  value={type}
                  key={type[0].toUpperCase() + type.substring(1)}
                >
                  {type[0].toUpperCase() + type.substring(1)}
                </option>
              );
            })}
          </Select>
          <Select
            className="text-black text-ellipsis font-bold border-sky-600 cursor-pointer hover:border-sky-600"
            _hover={{ backgroundColor: "#e2e8f0" }}
            iconColor="black"
            width="160px"
            onChange={(e) => setOrderFilter(e.target.value)}
          >
            <option value="1">ID crescente</option>
            <option value="2">ID decrescente</option>
            <option value="3">Nome crescente</option>
            <option value="4">Nome decrescente</option>
            <option value="5">Tipo crescente</option>
            <option value="6">Tipo decrescente</option>
          </Select>
          <Input
            className="placeholder:text-sky-600 border-sky-600 hover:border-sky-600"
            placeholder="Buscar..."
            _hover={{ backgroundColor: "#e2e8f0" }}
            width="144px"
            colorScheme="blue"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </Box>
      </Box>
      {!loading ? (
        <>
          <PokemonTable
            data-testid="table-component-test"
            filteredPokemons={filteredPokemons}
            openModal={openModal}
            favorites={favorites}
            setFavorites={setFavorites}
            favoriteButton={favoriteButton}
            typesFilter={typesFilter}
            search={search}
          />
          <PokemonModal
            isOpen={isOpen}
            onClose={onClose}
            details={pokemonsList[pokemonIdSelected]}
          />
        </>
      ) : null}
    </Container>
  );
}
