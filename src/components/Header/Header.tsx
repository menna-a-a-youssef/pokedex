import ViewNavigation from "../ViewNavigation/ViewNavigation";
import {
  Description,
  HeaderContainer,
  HeaderContent,
  Logo,
  LogoMark,
  LogoText,
} from "./Header.styles";

type HeaderProps = {
  activeView: "pagination" | "infinite";
  subtitle: string;
};

const Header = ({ activeView, subtitle }: HeaderProps) => {
  return (
    <HeaderContainer>
      <HeaderContent>
        <Logo>
          <LogoMark>
            <svg
              width="26"
              height="28"
              viewBox="0 0 26 28"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1.5 13.5L14.5 1.5L13 11H24V14.5L11 26L13 16.5H1.5V13.5Z"
                stroke="#E2C72B"
                stroke-width="3"
                stroke-linejoin="round"
              />
            </svg>
          </LogoMark>
          <LogoText>Pokédex</LogoText>
        </Logo>

        <Description>{subtitle}</Description>
        <ViewNavigation activeView={activeView} />
      </HeaderContent>
    </HeaderContainer>
  );
};

export default Header;
