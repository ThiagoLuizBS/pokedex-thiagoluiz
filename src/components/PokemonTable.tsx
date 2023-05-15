import { Pokemon } from "@/interfaces/Pokemon";
import {
  Table,
  Thead,
  Tr,
  Th,
  Tbody,
  Td,
  Center,
  SkeletonText,
  SkeletonCircle,
  Skeleton,
  Box,
} from "@chakra-ui/react";
import { PokemonDetails } from "./PokemonDetails";
import { Dispatch, SetStateAction } from "react";

interface PokemonTableProps {
  filteredPokemons: Pokemon[];
  openModal: (id: number) => void;
  favorites: string[];
  setFavorites: Dispatch<SetStateAction<string[]>>;
  favoriteButton: boolean;
  typesFilter: string;
  search: string;
}

export function PokemonTable({
  filteredPokemons,
  openModal,
  favorites,
  setFavorites,
  favoriteButton,
  typesFilter,
  search,
}: PokemonTableProps) {
  return (
    <Box className="w-full md:w-4/5 lg:w-2/3 xl:w-7/12" margin={4}>
      <Table data-testid="table-test" maxWidth="100%" colorScheme="blue">
        <Thead>
          <Tr>
            <Th className="text-center text-black font-bold text-lg md:text-2xl px-0">
              ID
            </Th>
            <Th className="px-0"></Th>
            <Th className="text-left text-black font-bold text-lg md:text-2xl px-0">
              Nome
            </Th>
            <Th className="text-center text-black font-bold text-lg md:text-2xl px-0">
              Tipos
            </Th>
            <Th className="px-0"></Th>
          </Tr>
        </Thead>
        <Tbody>
          {filteredPokemons.length > 0 ? (
            filteredPokemons?.map((pokemon: Pokemon) => (
              <Tr
                key={pokemon.id}
                data-testid="tr-test"
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
              <Td className="text-center w-6 md:w-32 xl:w-40 p-0"></Td>
              <Td className="text-center w-16 md:w-32 p-0"></Td>
              <Td className="text-left font-bold text-base w-16 md:w-fit p-0">
                Nenhum pokemon foi encontrado!
              </Td>
              <Td className="text-center w-16 xl:w-60 2xl:w-80 p-0"></Td>
              <Td className="text-center w-6 md:w-32 xl:w-40 p-0"></Td>
            </Tr>
          ) : (
            <Tr className="h-24 text-center p-0 hover:bg-slate-500 hover:text-white">
              <Td className="text-center w-6 md:w-32 xl:w-40 p-0">
                <Center>
                  <SkeletonText noOfLines={1} skeletonHeight="6" width="50%" />
                </Center>
              </Td>
              <Td className="text-center w-16 md:w-32 p-0 items-center">
                <Center>
                  <SkeletonCircle size="16" />
                </Center>
              </Td>
              <Td className="text-left w-16 md:w-fit p-0">
                <SkeletonText noOfLines={1} skeletonHeight="6" width="50%" />
              </Td>
              <Td className="text-center w-16 xl:w-60 2xl:w-80 p-0">
                <Center>
                  <Skeleton
                    width="120px"
                    height="40px"
                    className="rounded-2xl"
                  />
                </Center>
              </Td>
              <Td className="text-center w-6 md:w-32 xl:w-40 p-0"></Td>
            </Tr>
          )}
        </Tbody>
      </Table>
    </Box>
  );
}
