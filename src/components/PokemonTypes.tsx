export function PokemonTypes({ type }: { type: string }) {
  if (type === "grass")
    return (
      <img
        src="https://archives.bulbagarden.net/media/upload/7/7b/GrassIC_SV.png"
        width="120px"
        className="m-1"
        alt="grass"
        title="grass"
      />
    );
  else if (type === "normal")
    return (
      <img
        src="https://archives.bulbagarden.net/media/upload/0/08/NormalIC_SV.png"
        width="120px"
        className="m-1"
        alt="normal"
        title="normal"
      />
    );
  else if (type === "fighting")
    return (
      <img
        src="https://archives.bulbagarden.net/media/upload/0/0f/FightingIC_SV.png"
        width="120px"
        className="m-1"
        alt="fighting"
        title="fighting"
      />
    );
  else if (type === "flying")
    return (
      <img
        src="https://archives.bulbagarden.net/media/upload/d/d7/FlyingIC_SV.png"
        width="120px"
        className="m-1"
        alt="flying"
        title="flying"
      />
    );
  else if (type === "poison")
    return (
      <img
        src="https://archives.bulbagarden.net/media/upload/9/9d/PoisonIC_SV.png"
        width="120px"
        className="m-1"
        alt="poison"
        title="poison"
      />
    );
  else if (type === "ground")
    return (
      <img
        src="https://archives.bulbagarden.net/media/upload/f/f8/GroundIC_SV.png"
        width="120px"
        className="m-1"
        alt="ground"
        title="ground"
      />
    );
  else if (type === "rock")
    return (
      <img
        src="https://archives.bulbagarden.net/media/upload/3/32/RockIC_SV.png"
        width="120px"
        className="m-1"
        alt="rock"
        title="rock"
      />
    );
  else if (type === "bug")
    return (
      <img
        src="https://archives.bulbagarden.net/media/upload/d/d1/BugIC_SV.png"
        width="120px"
        className="m-1"
        alt="bug"
        title="bug"
      />
    );
  else if (type === "ghost")
    return (
      <img
        src="https://archives.bulbagarden.net/media/upload/2/2c/GhostIC_SV.png"
        width="120px"
        className="m-1"
        alt="ghost"
        title="ghost"
      />
    );
  else if (type === "steel")
    return (
      <img
        src="https://archives.bulbagarden.net/media/upload/b/b8/SteelIC_SV.png"
        width="120px"
        className="m-1"
        alt="steel"
        title="steel"
      />
    );
  else if (type === "fire")
    return (
      <img
        src="https://archives.bulbagarden.net/media/upload/a/a2/FireIC_SV.png"
        width="120px"
        className="m-1"
        alt="fire"
        title="fire"
      />
    );
  else if (type === "water")
    return (
      <img
        src="https://archives.bulbagarden.net/media/upload/d/de/WaterIC_SV.png"
        width="120px"
        className="m-1"
        alt="water"
        title="water"
      />
    );
  else if (type === "electric")
    return (
      <img
        src="https://archives.bulbagarden.net/media/upload/7/77/ElectricIC_SV.png"
        width="120px"
        className="m-1"
        alt="electric"
        title="electric"
      />
    );
  else if (type === "psychic")
    return (
      <img
        src="https://archives.bulbagarden.net/media/upload/9/96/PsychicIC_SV.png"
        width="120px"
        className="m-1"
        alt="psychic"
        title="psychic"
      />
    );
  else if (type === "ice")
    return (
      <img
        src="https://archives.bulbagarden.net/media/upload/1/13/IceIC_SV.png"
        width="120px"
        className="m-1"
        alt="ice"
        title="ice"
      />
    );
  else if (type === "dragon")
    return (
      <img
        src="https://archives.bulbagarden.net/media/upload/7/7f/DragonIC_SV.png"
        width="120px"
        className="m-1"
        alt="dragon"
        title="dragon"
      />
    );
  else if (type === "dark")
    return (
      <img
        src="https://archives.bulbagarden.net/media/upload/3/30/DarkIC_SV.png"
        width="120px"
        className="m-1"
        alt="dark"
        title="dark"
      />
    );
  else if (type === "fairy")
    return (
      <img
        src="https://archives.bulbagarden.net/media/upload/c/c6/FairyIC_SV.png"
        width="120px"
        className="m-1"
        alt="fairy"
        title="fairy"
      />
    );
  return <></>;
}
