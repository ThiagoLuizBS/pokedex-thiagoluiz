export function PokemonTypes({ type }: { type: string }) {
  if (type === "grass")
    return (
      <img
        src="/images/types/grass.png"
        className="m-1 w-16 md:w-32 "
        alt="Grass"
        title="Grass"
      />
    );
  else if (type === "normal")
    return (
      <img
        src="/images/types/normal.png"
        className="m-1 w-16 md:w-32 "
        alt="Normal"
        title="Normal"
      />
    );
  else if (type === "fighting")
    return (
      <img
        src="/images/types/fighting.png"
        className="m-1 w-16 md:w-32 "
        alt="Fighting"
        title="Fighting"
      />
    );
  else if (type === "flying")
    return (
      <img
        src="/images/types/flying.png"
        className="m-1 w-16 md:w-32 "
        alt="Flying"
        title="Flying"
      />
    );
  else if (type === "poison")
    return (
      <img
        src="/images/types/poison.png"
        className="m-1 w-16 md:w-32 "
        alt="Poison"
        title="Poison"
      />
    );
  else if (type === "ground")
    return (
      <img
        src="/images/types/ground.png"
        className="m-1 w-16 md:w-32 "
        alt="Ground"
        title="Ground"
      />
    );
  else if (type === "rock")
    return (
      <img
        src="/images/types/rock.png"
        className="m-1 w-16 md:w-32 "
        alt="Rock"
        title="Rock"
      />
    );
  else if (type === "bug")
    return (
      <img
        src="/images/types/bug.png"
        className="m-1 w-16 md:w-32 "
        alt="Bug"
        title="Bug"
      />
    );
  else if (type === "ghost")
    return (
      <img
        src="/images/types/ghost.png"
        className="m-1 w-16 md:w-32 "
        alt="Ghost"
        title="Ghost"
      />
    );
  else if (type === "steel")
    return (
      <img
        src="/images/types/steel.png"
        className="m-1 w-16 md:w-32 "
        alt="Steel"
        title="Steel"
      />
    );
  else if (type === "fire")
    return (
      <img
        src="/images/types/fire.png"
        className="m-1 w-16 md:w-32 "
        alt="Fire"
        title="Fire"
      />
    );
  else if (type === "water")
    return (
      <img
        src="/images/types/water.png"
        className="m-1 w-16 md:w-32 "
        alt="Water"
        title="Water"
      />
    );
  else if (type === "electric")
    return (
      <img
        src="/images/types/electric.png"
        className="m-1 w-16 md:w-32 "
        alt="Electric"
        title="Electric"
      />
    );
  else if (type === "psychic")
    return (
      <img
        src="/images/types/psychic.png"
        className="m-1 w-16 md:w-32 "
        alt="Psychic"
        title="Psychic"
      />
    );
  else if (type === "ice")
    return (
      <img
        src="/images/types/ice.png"
        className="m-1 w-16 md:w-32 "
        alt="Ice"
        title="Ice"
      />
    );
  else if (type === "dragon")
    return (
      <img
        src="/images/types/dragon.png"
        className="m-1 w-16 md:w-32 "
        alt="Dragon"
        title="Dragon"
      />
    );
  else if (type === "dark")
    return (
      <img
        src="/images/types/dark.png"
        className="m-1 w-16 md:w-32 "
        alt="Dark"
        title="Dark"
      />
    );
  else if (type === "fairy")
    return (
      <img
        src="/images/types/fairy.png"
        className="m-1 w-16 md:w-32 "
        alt="Fairy"
        title="Fairy"
      />
    );
  return <></>;
}
