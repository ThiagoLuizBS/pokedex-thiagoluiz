import { Pokemon, Type } from "../interfaces/Pokemon";
import {
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Text,
  Box,
  Progress,
} from "@chakra-ui/react";
import { useEffect } from "react";
import { PokemonTypes } from "./PokemonTypes";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  details: Pokemon;
}

export function PokemonModal({ onClose, isOpen, details }: ModalProps) {
  useEffect(() => {
    if (isOpen)
      document.title = `${
        details?.name[0].toUpperCase() + details?.name.substring(1)
      } - Pokedex`;
    else document.title = `Pokedex`;
  }, [isOpen]);

  return (
    <Modal onClose={onClose} isOpen={isOpen} isCentered>
      <ModalOverlay className="text-black" />
      <ModalContent className="text-black">
        <ModalHeader className="text-black flex items-center justify-center p-0 py-4">
          <Text className="text-2xl">
            {details?.name[0].toUpperCase() + details?.name.substring(1)}
          </Text>
          <Box className="flex flex-col items-center justify-center h-24 w-32">
            <img
              src={
                details?.sprites.versions["generation-v"]["black-white"]
                  .animated.front_default
              }
              alt={details?.name}
            />
          </Box>
          <Box className="flex flex-col items-center">
            {details?.types.map((type: Type) => (
              <PokemonTypes type={type.type.name} key={type.type.name} />
            ))}
          </Box>
        </ModalHeader>
        <Box className="flex flex-row text-black font-bold text-lg text-center px-6 gap-1">
          <Text className="w-32">Infos</Text>
          <Text className="grow">Status</Text>
        </Box>
        <ModalBody className="text-black grid grid-rows-3 grid-flow-col gap-1">
          <Box className="flex flex-col items-center gap-1">
            <Text className="font-bold text-sky-500">Peso</Text>
            <Text className="font-bold">{details?.weight / 10} kg</Text>
          </Box>
          <Box className="flex flex-col items-center gap-1">
            <Text className="font-bold text-sky-500">Altura</Text>
            <Text className="font-bold">{details?.height * 10} cm</Text>
          </Box>
          <Box className="flex flex-col items-center gap-1">
            <Text className="font-bold text-sky-500">Experiência</Text>
            <Text className="font-bold">{details?.base_experience} XP</Text>
          </Box>
          <Box className="flex flex-col items-left gap-1">
            <Box className="flex flex-row justify-center items-center">
              <Text className="font-bold text-lime-500 w-14">HP</Text>
              <Text className="font-bold w-12">
                {details?.stats[0].base_stat}
              </Text>
              <Progress
                className="w-36 rounded-lg"
                colorScheme="cyan"
                value={details?.stats[0].base_stat / 2}
              />
            </Box>
            <Box className="flex flex-row justify-center items-center">
              <Text className="font-bold text-red-500 w-14">ATK</Text>
              <Text className="font-bold w-12">
                {details?.stats[1].base_stat}
              </Text>
              <Progress
                className="w-36 rounded-lg"
                colorScheme="cyan"
                value={details?.stats[1].base_stat / 2}
              />
            </Box>
          </Box>
          <Box className="flex flex-col items-left gap-1">
            <Box className="flex flex-row justify-center items-center">
              <Text className="font-bold text-teal-500 w-14">DEF</Text>
              <Text className="font-bold w-12">
                {details?.stats[2].base_stat}
              </Text>
              <Progress
                className="w-36 rounded-lg"
                colorScheme="cyan"
                value={details?.stats[2].base_stat / 2}
              />
            </Box>
            <Box className="flex flex-row justify-center items-center">
              <Text className="font-bold text-yellow-500 w-14">VEL</Text>
              <Text className="font-bold w-12">
                {details?.stats[5].base_stat}
              </Text>
              <Progress
                className="w-36 rounded-lg"
                colorScheme="cyan"
                value={details?.stats[5].base_stat / 2}
              />
            </Box>
          </Box>
          <Box className="flex flex-col items-left gap-1">
            <Box className="flex flex-row justify-center items-center">
              <Text className="font-bold text-red-700 w-14">ATKS</Text>
              <Text className="font-bold w-12">
                {details?.stats[3].base_stat}
              </Text>
              <Progress
                className="w-36 rounded-lg"
                colorScheme="cyan"
                value={details?.stats[3].base_stat / 2}
              />
            </Box>
            <Box className="flex flex-row justify-center items-center">
              <Text className="font-bold text-teal-700 w-14">DEFS</Text>
              <Text className="font-bold w-12">
                {details?.stats[4].base_stat}
              </Text>
              <Progress
                className="w-36 rounded-lg"
                colorScheme="cyan"
                value={details?.stats[4].base_stat / 2}
              />
            </Box>
          </Box>
        </ModalBody>
        <ModalFooter className="flex flex-col items-center">
          <Button
            className="text-white bg-slate-700"
            colorScheme="blue"
            onClick={onClose}
          >
            Voltar
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}
