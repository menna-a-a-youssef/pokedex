import type { Pokemon, PokemonListItem } from "./types";

export type PokemonCardData = {
  id: number;
  name: string;
  image: string;
};

export const getPokemonIdFromUrl = (url: string): number => {
  const parts = url.split("/").filter(Boolean);
  return Number(parts[parts.length - 1]);
};

const POKEMON_SPRITE_BASE_URL =
  "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork";

export const getPokemonSpriteUrl = (id: number): string => {
  return `${POKEMON_SPRITE_BASE_URL}/${id}.png`;
};

export const mapPokemonListItem = (
  pokemon: PokemonListItem,
): PokemonCardData => {
  const id = getPokemonIdFromUrl(pokemon.url);

  return {
    id,
    name: pokemon.name,
    image: getPokemonSpriteUrl(id),
  };
};

export const getPokemonSprite = (pokemon: Pokemon): string | undefined => {
  const speciesId = pokemon.species?.url
    ? getPokemonIdFromUrl(pokemon.species.url)
    : null;

  return (
    pokemon.sprites?.other?.["official-artwork"]?.front_default ||
    pokemon.sprites?.front_default ||
    (speciesId ? getPokemonSpriteUrl(speciesId) : undefined)
  );
};
