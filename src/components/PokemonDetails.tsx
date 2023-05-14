import { Dispatch, SetStateAction } from "react";
import { Pokemon, Type } from "@/interfaces/Pokemon";
import { Box, Td } from "@chakra-ui/react";
import { StarIcon } from "@chakra-ui/icons";
import { PokemonTypes } from "./PokemonTypes";

interface PokemonDetailsProps {
  details: Pokemon;
  favorites: string[];
  setFavorites: Dispatch<SetStateAction<string[]>>;
}

export function PokemonDetails({
  details,
  favorites,
  setFavorites,
}: PokemonDetailsProps) {
  const isFavorite = (id: number) =>
    favorites?.some((item) => parseInt(item) === id);

  const addFavorite = (id: number) =>
    setFavorites((prev) => [...prev, id.toString()]);

  const removeFavorite = (id: number) => {
    setFavorites(favorites.filter((item) => parseInt(item) !== id));
  };

  return (
    <>
      <Td className="text-center w-32 p-0">#{details?.id}</Td>
      <Td className="text-center w-32 p-0">
        <img
          className="px-4"
          src={details?.sprites.front_default}
          alt={details?.name}
        />
      </Td>
      <Td className="text-left font-bold text-xl w-80 p-0">
        {details?.name[0].toUpperCase() + details?.name.substring(1)}
      </Td>
      <Td className="text-center p-0">
        <Box className="flex flex-col items-center justify-center">
          {details?.types.map((type: Type) => (
            <PokemonTypes type={type.type.name} key={type.type.name} />
          ))}
        </Box>
      </Td>
      <Td className="text-center w-32 p-0">
        <StarIcon
          width="18px"
          height="18px"
          className={isFavorite(details.id) ? "text-yellow-500" : ""}
          onClick={(e) => {
            e.stopPropagation();
            if (isFavorite(details.id)) removeFavorite(details.id);
            else addFavorite(details.id);
          }}
        />
      </Td>
    </>
  );
}
