"use client";
import { useEffect, useState } from "react";
import axios from "axios";
import { Pokemon } from "@/interfaces/Pokemon";
import {
  TableContainer,
  Table,
  Thead,
  Tr,
  Th,
  Tbody,
  Box,
  Container,
  Skeleton,
} from "@chakra-ui/react";
import { PokemonDetails } from "@/components/PokemonDetails";

export default function Pokedex() {
  const [pokemonsList, setPokemonsList] = useState<Pokemon[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  const fetchPokemonsList = () => {
    axios
      .get("https://pokeapi.co/api/v2/pokemon/?offset=0&limit=151")
      .then((response) => {
        const pokemonsArray = [...response.data.results];

        const promisesArray = pokemonsArray.map((item) => {
          return axios.get(item.url);
        });

        Promise.all(promisesArray).then((values) => {
          values.map((item) => {
            setPokemonsList((prev) => [...prev, item.data]);
          });
        });
        setLoading(false);
      });
  };

  useEffect(() => {
    fetchPokemonsList();
  }, []);

  return (
    <Container className="container flex flex-col items-center">
      <Box
        w={100}
        margin={4}
        className="flex flex-row text-center items-center justify-center"
      >
        <img src="/pokedex.png" alt="pokedex" />
        <span className="grow text-center font-bold">Olá mundo</span>
      </Box>
      {loading ? (
        <Skeleton height="20px" />
      ) : (
        <TableContainer className="container mx-auto flex flex-col items-center font-sans">
          <Table colorScheme="blue" maxWidth="70%" variant="simple">
            <Thead>
              <Tr>
                <Th className="text-center text-black font-bold">ID</Th>
                <Th></Th>
                <Th className="text-center text-black font-bold">Name</Th>
                <Th className="text-center text-black font-bold">Types</Th>
              </Tr>
            </Thead>
            <Tbody>
              {pokemonsList.map((pokemon: Pokemon) => (
                <PokemonDetails key={pokemon.name} details={pokemon} />
              ))}
            </Tbody>
          </Table>
        </TableContainer>
      )}
    </Container>
  );
}
