import { NavLink } from "react-router-dom";

import Button from "../Button/Button";
import { Navigation } from "./ViewNavigation.styles";

type ViewNavigationProps = {
  activeView: "pagination" | "infinite";
};

const ViewNavigation = ({ activeView }: ViewNavigationProps) => {
  return (
    <Navigation>
      <Button
        as={NavLink}
        to="/pokemon"
        size="lg"
        active={activeView === "pagination"}
      >
        Page Controls
      </Button>

      <Button
        as={NavLink}
        to="/pokemon/infinite"
        size="lg"
        active={activeView === "infinite"}
      >
        Infinite Scroll
      </Button>
    </Navigation>
  );
};

export default ViewNavigation;
