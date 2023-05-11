import { Tr, Td, useDisclosure } from "@chakra-ui/react";
import { Pokemon, Type } from "@/interfaces/Pokemon";
import { PokemonModal } from "./PokemonModal";

export function PokemonDetails({ details }: { details: Pokemon }) {
  const typesLength = details?.types.length;

  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Tr
      className="hover:bg-slate-700 hover:text-white cursor-pointer"
      onClick={() => onOpen()}
    >
      <Td className="text-center">#{details?.id}</Td>
      <Td className="text-center w-32">
        <img src={details?.sprites.front_default} />
      </Td>
      <Td className="text-center">{details?.name}</Td>
      <Td className="text-center">
        {details?.types.map((type: Type, i: number) =>
          typesLength > i + 1 ? (
            <span key={type.type.name}>{type.type.name}, </span>
          ) : (
            <span key={type.type.name}>{type.type.name}</span>
          )
        )}
      </Td>
      <PokemonModal isOpen={isOpen} onClose={onClose} details={details} />
    </Tr>
  );
}
