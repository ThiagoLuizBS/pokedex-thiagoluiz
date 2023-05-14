"use client";
import { useEffect, useState } from "react";
import axios from "axios";
import { Pokemon, Type } from "@/interfaces/Pokemon";
import {
  Table,
  Thead,
  Tr,
  Th,
  Tbody,
  Box,
  Container,
  Skeleton,
  useDisclosure,
  Button,
  Input,
  Select,
  Td,
  SkeletonCircle,
  SkeletonText,
  Center,
  Text,
} from "@chakra-ui/react";
import { PokemonDetails } from "@/components/PokemonDetails";
import { PokemonModal } from "@/components/PokemonModal";
import { StarIcon } from "@chakra-ui/icons";

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
      return a.types[0].type.name.localeCompare(b.types[0].type.name) * -1;
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
    <Container maxW="1536px" centerContent className="min-h-screen">
      <Box
        w="70%"
        margin={4}
        className="flex flex-row text-center items-center justify-center space-x-4"
      >
        <Box className="flex flex-row text-center items-center justify-center">
          <img src="/images/pokedex.png" alt="Pokedex" width={100} />
          <Text className="text-center font-bold text-4xl">Pokedex</Text>
        </Box>
        <Text className="grow"></Text>
        <Button
          className="text-black font-bold border border-sky-600 cursor-pointer"
          width="12%"
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
          width="12%"
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
          width="14%"
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
          width="14%"
          colorScheme="blue"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </Box>
      {loading ? null : (
        <Box w="70%" margin={4}>
          <Table maxWidth="100%" colorScheme="blue">
            <Thead>
              <Tr>
                <Th className="text-center text-black font-bold text-2xl">
                  ID
                </Th>
                <Th></Th>
                <Th className="text-left text-black font-bold text-2xl px-0">
                  Name
                </Th>
                <Th className="text-center text-black font-bold text-2xl">
                  Types
                </Th>
                <Th></Th>
              </Tr>
            </Thead>
            <Tbody>
              {filteredPokemons.length > 0 ? (
                filteredPokemons?.map((pokemon: Pokemon) => (
                  <Tr
                    key={pokemon.id}
                    className="h-24 hover:bg-slate-500 hover:text-white cursor-pointer"
                    onClick={() => openModal(pokemon.id)}
                  >
                    <PokemonDetails
                      details={pokemon}
                      favorites={favorites}
                      setFavorites={setFavorites}
                    />
                  </Tr>
                ))
              ) : favoriteButton || typesFilter !== "" || search !== "" ? (
                <Tr className="h-24 text-center p-0 hover:bg-slate-500 hover:text-white">
                  <Td className="text-center w-32 p-0"></Td>
                  <Td className="text-center w-32 p-0"></Td>
                  <Td className="text-left font-bold text-lg w-80 p-0">
                    Nenhum pokemon foi encontrado!
                  </Td>
                  <Td className="text-center p-0"></Td>
                  <Td className="text-center w-32 p-0"></Td>
                </Tr>
              ) : (
                <Tr className="h-24 text-center p-0 hover:bg-slate-500 hover:text-white">
                  <Td className="text-center w-32 p-0">
                    <Center>
                      <SkeletonText
                        noOfLines={1}
                        skeletonHeight="6"
                        width="50%"
                      />
                    </Center>
                  </Td>
                  <Td className="text-center w-32 p-0 items-center">
                    <Center>
                      <SkeletonCircle size="16" />
                    </Center>
                  </Td>
                  <Td className="text-left w-80 p-0">
                    <SkeletonText
                      noOfLines={1}
                      skeletonHeight="6"
                      width="50%"
                    />
                  </Td>
                  <Td className="text-center p-0">
                    <Center>
                      <Skeleton
                        width="120px"
                        height="40px"
                        className="rounded-2xl"
                      />
                    </Center>
                  </Td>
                  <Td className="text-center w-32 p-0"></Td>
                </Tr>
              )}
            </Tbody>
          </Table>
          <PokemonModal
            isOpen={isOpen}
            onClose={onClose}
            details={pokemonsList[pokemonIdSelected]}
          />
        </Box>
      )}
    </Container>
  );
}
