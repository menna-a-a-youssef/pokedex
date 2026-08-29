import { useNavigate, useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { getPokemon } from "../../features/pokemon/api/pokemonApi";
import Skeleton from "../../components/Skeleton/Skeleton";
import {
  PageWrapper,
  HeaderBar,
  Content,
  LeftColumn,
  RightColumn,
  SpriteWrapper,
  MetaGrid,
  DetailsCard,
  Arrow,
  TypesRow,
  MetaItem,
  MetaTitle,
  MetaValue,
  AbilitiesContainer,
  AbilityItem,
  Experience,
} from "./PokemonDetails.styles";
import Button from "../../components/Button/Button";
import Chip from "../../components/Chip/Chip";
import { pokemonTypeColors } from "../../features/pokemon/pokemonTypeColors";
import StatBar from "../../components/StatBar/StatBar";
const PokemonDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const {
    data: pokemon,
    isLoading,
    isError,
    refetch,
  } = useQuery({
    queryKey: ["pokemon", id],
    queryFn: ({ signal }) => getPokemon(id || "", signal),
    enabled: !!id,
  });

  if (isLoading) {
    return (
      <PageWrapper>
        <Content>
          <Skeleton width="100%" height="400px" radius="12px" />
        </Content>
      </PageWrapper>
    );
  }

  if (isError || !pokemon) {
    return (
      <PageWrapper>
        <Content>
          <div style={{ padding: "24px" }}>
            <p>Failed to load Pokémon.</p>
            <button onClick={() => refetch()}>Retry</button>
          </div>
        </Content>
      </PageWrapper>
    );
  }

  const speciesId = pokemon.species?.url
    ? pokemon.species.url.split("/").filter(Boolean).pop()
    : null;

  const sprite =
    pokemon.sprites?.other?.["official-artwork"]?.front_default ||
    pokemon.sprites?.front_default ||
    (speciesId
      ? `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${speciesId}.png`
      : undefined);

  return (
    <PageWrapper>
      <Content>
        <Button size="lg" onClick={() => navigate(-1)}>
          <Arrow>➜</Arrow> Back to List
        </Button>
        <DetailsCard>
          <HeaderBar>
            <h1>
              <svg
                width="22"
                height="24"
                viewBox="0 0 26 28"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1.5 13.5L14.5 1.5L13 11H24V14.5L11 26L13 16.5H1.5V13.5Z"
                  stroke="#FFFFFF"
                  strokeWidth="3"
                  strokeLinejoin="round"
                />
              </svg>
              {pokemon.name}
            </h1>
            <div>#{String(pokemon.id).padStart(3, "0")}</div>
          </HeaderBar>

          <LeftColumn>
            <SpriteWrapper>
              <img src={sprite} alt={pokemon.name} />
            </SpriteWrapper>

            <TypesRow>
              {pokemon.types.map((t) => (
                <Chip key={t.slot} color={pokemonTypeColors[t.type.name]}>
                  {t.type.name}
                </Chip>
              ))}
            </TypesRow>

            <MetaGrid>
              <MetaItem>
                <MetaTitle>
                  <svg
                    width="15"
                    height="15"
                    viewBox="0 0 32 32"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden="true"
                  >
                    <path
                      d="M29.41,21.67 10.34,2.58a2,2 0 0 0-2.83,0L2.59,7.51a2,2 0 0 0 0,2.82l19.07,19.09a2,2 0 0 0 1.42.58 2,2 0 0 0 1.41-.58l4.92-4.93a2,2 0 0 0 0-2.82ZM23.08,28 4,8.92 8.92,4l3.79,3.79L10.46,10l1.41,1.41L14.12,9.2l4.13,4.13L16,15.58 17.42,17l2.25-2.25 4.13,4.13-2.25,2.25L23,22.54l2.25-2.25L28,23.08Z"
                      fill="currentColor"
                    />
                  </svg>
                  Height
                </MetaTitle>
                <MetaValue>{pokemon.height / 10} m</MetaValue>
              </MetaItem>
              <MetaItem>
                <MetaTitle>
                  <svg
                    width="15"
                    height="15"
                    viewBox="0 0 92 92"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden="true"
                  >
                    <path
                      d="M81.2,31.1c-0.4-4-3.8-7.1-7.9-7.1H66v-1.8C66,10.5,57.4,1,46.2,1h-0.4C34.6,1,26,10.5,26,22.2V24h-7.3
    c-4.1,0-7.4,3.1-7.9,7.1L5,86.5c-0.1,1.1,0.2,2.3,1,3.1C6.8,90.5,7.9,91,9,91h74c1.1,0,2.2-0.5,3-1.3c0.8-0.8,1.1-2,1-3.1L81.2,31.1
    z M34,22.2C34,14.9,39.1,9,45.8,9h0.4C52.9,9,58,14.9,58,22.2V24H34V22.2z M13.4,83l5.3-51h54.4l5.3,51H13.4z"
                      fill="currentColor"
                    />
                  </svg>
                  Weight
                </MetaTitle>
                <MetaValue>{pokemon.weight / 10} kg</MetaValue>
              </MetaItem>
            </MetaGrid>
          </LeftColumn>

          <RightColumn>
            <section>
              <h3>Base Stats</h3>
              {pokemon.stats.map((stat) => (
                <StatBar
                  key={stat.stat.name}
                  name={stat.stat.name}
                  value={stat.base_stat}
                />
              ))}
            </section>

            <section>
              <h3>Abilities</h3>
              <AbilitiesContainer>
                {pokemon.abilities.map((a) => (
                  <AbilityItem key={a.ability.name}>
                    <Chip variant={a.is_hidden ? "secondary" : "outlined"}>
                      {a.ability.name}
                    </Chip>
                    {a.is_hidden ? "(Hidden)" : ""}
                  </AbilityItem>
                ))}
              </AbilitiesContainer>
            </section>

            <section>
              <h3>Base Experience</h3>
              <Experience>
                {pokemon.base_experience !== null
                  ? `${pokemon.base_experience} XP`
                  : "N/A"}
              </Experience>
            </section>
          </RightColumn>
        </DetailsCard>
      </Content>
    </PageWrapper>
  );
};

export default PokemonDetails;
