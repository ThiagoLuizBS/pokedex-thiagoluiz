import { Pokemon, Type } from "@/interfaces/Pokemon";
import {
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
} from "@chakra-ui/react";

type ModalProps = {
  isOpen: boolean;
  onClose: () => void;
  details: Pokemon;
};

export function PokemonModal(props: ModalProps) {
  const { onClose, isOpen, details } = props;

  return (
    <Modal onClose={onClose} isOpen={isOpen} isCentered>
      <ModalOverlay className="text-black" />
      <ModalContent className="text-black">
        <ModalHeader className="text-black flex items-center justify-center p-0 py-4">
          <h1 className="mx-1">{details.name}</h1>
          <div className="flex flex-col items-center ">
            <img
              src={
                details?.sprites.versions["generation-v"]["black-white"]
                  .animated.front_default
              }
              alt={details.name}
            />
          </div>
        </ModalHeader>
        <ModalBody className="text-black">
          <h1 className="font-bold">Peso: {details.weight / 10}kg</h1>
          <h1 className="font-bold">Altura: {details.height * 10}cm</h1>
          <h1 className="font-bold">
            Experiência: {details.base_experience}XP
          </h1>
          {/* tipos, stats */}
        </ModalBody>
        <ModalFooter>
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
