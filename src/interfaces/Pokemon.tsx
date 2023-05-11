export interface Pokemon {
  id: number;
  name: string;
  base_experience: number;
  height: number;
  weight: number;
  types: Type[];
  stats: Stats[];
  sprites: {
    front_default: string;
    versions: {
      "generation-v": {
        "black-white": { animated: { front_default: string } };
      };
    };
  };
}

export interface Type {
  slot: number;
  type: { name: string; url: string };
}

export interface Stats {
  base_stat: number;
  effort: number;
  stat: { name: string; url: string };
}
