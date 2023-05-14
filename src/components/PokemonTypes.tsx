export function PokemonTypes({ type }: { type: string }) {
  if (type === "grass")
    return (
      <img
        src="/images/types/grass.png"
        width="120px"
        className="m-1"
        alt="Grass"
        title="Grass"
      />
    );
  else if (type === "normal")
    return (
      <img
        src="/images/types/normal.png"
        width="120px"
        className="m-1"
        alt="Normal"
        title="Normal"
      />
    );
  else if (type === "fighting")
    return (
      <img
        src="/images/types/fighting.png"
        width="120px"
        className="m-1"
        alt="Fighting"
        title="Fighting"
      />
    );
  else if (type === "flying")
    return (
      <img
        src="/images/types/flying.png"
        width="120px"
        className="m-1"
        alt="Flying"
        title="Flying"
      />
    );
  else if (type === "poison")
    return (
      <img
        src="/images/types/poison.png"
        width="120px"
        className="m-1"
        alt="Poison"
        title="Poison"
      />
    );
  else if (type === "ground")
    return (
      <img
        src="/images/types/ground.png"
        width="120px"
        className="m-1"
        alt="Ground"
        title="Ground"
      />
    );
  else if (type === "rock")
    return (
      <img
        src="/images/types/rock.png"
        width="120px"
        className="m-1"
        alt="Rock"
        title="Rock"
      />
    );
  else if (type === "bug")
    return (
      <img
        src="/images/types/bug.png"
        width="120px"
        className="m-1"
        alt="Bug"
        title="Bug"
      />
    );
  else if (type === "ghost")
    return (
      <img
        src="/images/types/ghost.png"
        width="120px"
        className="m-1"
        alt="Ghost"
        title="Ghost"
      />
    );
  else if (type === "steel")
    return (
      <img
        src="/images/types/steel.png"
        width="120px"
        className="m-1"
        alt="Steel"
        title="Steel"
      />
    );
  else if (type === "fire")
    return (
      <img
        src="/images/types/fire.png"
        width="120px"
        className="m-1"
        alt="Fire"
        title="Fire"
      />
    );
  else if (type === "water")
    return (
      <img
        src="/images/types/water.png"
        width="120px"
        className="m-1"
        alt="Water"
        title="Water"
      />
    );
  else if (type === "electric")
    return (
      <img
        src="/images/types/electric.png"
        width="120px"
        className="m-1"
        alt="Electric"
        title="Electric"
      />
    );
  else if (type === "psychic")
    return (
      <img
        src="/images/types/psychic.png"
        width="120px"
        className="m-1"
        alt="Psychic"
        title="Psychic"
      />
    );
  else if (type === "ice")
    return (
      <img
        src="/images/types/ice.png"
        width="120px"
        className="m-1"
        alt="Ice"
        title="Ice"
      />
    );
  else if (type === "dragon")
    return (
      <img
        src="/images/types/dragon.png"
        width="120px"
        className="m-1"
        alt="Dragon"
        title="Dragon"
      />
    );
  else if (type === "dark")
    return (
      <img
        src="/images/types/dark.png"
        width="120px"
        className="m-1"
        alt="Dark"
        title="Dark"
      />
    );
  else if (type === "fairy")
    return (
      <img
        src="/images/types/fairy.png"
        width="120px"
        className="m-1"
        alt="Fairy"
        title="Fairy"
      />
    );
  return <></>;
}
