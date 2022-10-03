import { CrewNavDot, CrewNavWrapper } from "./Crew.styles";
import { useLocation } from "react-router-dom";
import { Routes } from "../routes";

function CrewNav() {
  const location = useLocation();
  console.log(location.pathname);

  return (
    <CrewNavWrapper>
      <CrewNavDot
        isActive={location.pathname === Routes.CREW_COMMANDER}
        to={Routes.CREW_COMMANDER}
      />
      <CrewNavDot
        isActive={location.pathname === Routes.CREW_SPECIALIST}
        to={Routes.CREW_SPECIALIST}
      />
      <CrewNavDot
        isActive={location.pathname === Routes.CREW_PILOT}
        to={Routes.CREW_PILOT}
      />
      <CrewNavDot
        isActive={location.pathname === Routes.CREW_ENGINEER}
        to={Routes.CREW_ENGINEER}
      />
    </CrewNavWrapper>
  );
}

export default CrewNav;
