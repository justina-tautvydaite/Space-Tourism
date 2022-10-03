import { useLocation } from "react-router-dom";
import { Routes } from "../routes";
import { TechNavWrapper, TechNavDot } from "./Technology.styles";

function TechnologyNav() {
  const location = useLocation();
  console.log(location.pathname);

  return (
    <TechNavWrapper>
      <TechNavDot
        isActive={location.pathname === Routes.TECHNOLOGY_VEHICLE}
        to={Routes.TECHNOLOGY_VEHICLE}
      >
        1
      </TechNavDot>
      <TechNavDot
        isActive={location.pathname === Routes.TECHNOLOGY_SPACEPORT}
        to={Routes.TECHNOLOGY_SPACEPORT}
      >
        2
      </TechNavDot>
      <TechNavDot
        isActive={location.pathname === Routes.TECHNOLOGY_CAPSULE}
        to={Routes.TECHNOLOGY_CAPSULE}
      >
        3
      </TechNavDot>
    </TechNavWrapper>
  );
}

export default TechnologyNav;
