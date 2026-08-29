import React from "react";
import Skeleton from "../../components/Skeleton/Skeleton";
import {
  DetailsCard,
  HeaderBar,
  LeftColumn,
  RightColumn,
  SpriteWrapper,
  TypesRow,
  MetaGrid,
  MetaItem,
  MetaTitle,
  MetaValue,
  AbilitiesContainer,
  AbilityItem,
} from "./PokemonDetails.styles";

const PokemonDetailsSkeleton: React.FC = () => {
  return (
    <DetailsCard>
      <HeaderBar>
        <div style={{ width: "40%" }}>
          <Skeleton height="28px" radius="8px" />
        </div>
        <div style={{ width: "60px" }}>
          <Skeleton height="22px" radius="8px" />
        </div>
      </HeaderBar>

      <LeftColumn>
        <SpriteWrapper>
          <Skeleton width="100%" height="100%" radius="999px" />
        </SpriteWrapper>

        <TypesRow>
          <Skeleton width="80px" height="22px" radius="999px" />
        </TypesRow>

        <MetaGrid>
          <MetaItem>
            <MetaTitle>
              <Skeleton width="80px" height="12px" radius="6px" />
            </MetaTitle>
            <MetaValue>
              <Skeleton width="48px" height="20px" radius="6px" />
            </MetaValue>
          </MetaItem>
          <MetaItem>
            <MetaTitle>
              <Skeleton width="80px" height="12px" radius="6px" />
            </MetaTitle>
            <MetaValue>
              <Skeleton width="48px" height="20px" radius="6px" />
            </MetaValue>
          </MetaItem>
        </MetaGrid>
      </LeftColumn>

      <RightColumn>
        <section>
          <h3>
            <Skeleton width="140px" height="30px" radius="6px" />
          </h3>
          {[...Array(6)].map((_, i) => (
            <Skeleton key={i} width="100%" height="20px" radius="6px" />
          ))}
        </section>

        <section>
          <h3>
            <Skeleton width="140px" height="30px" radius="6px" />
          </h3>
          <AbilitiesContainer>
            {[...Array(2)].map((_, i) => (
              <AbilityItem key={i}>
                <Skeleton width="120px" height="22px" radius="12px" />
              </AbilityItem>
            ))}
          </AbilitiesContainer>
        </section>

        <section>
          <h3>
            <Skeleton width="140px" height="30px" radius="6px" />
          </h3>
          <Skeleton width="80px" height="36px" radius="8px" />
        </section>
      </RightColumn>
    </DetailsCard>
  );
};

export default PokemonDetailsSkeleton;
