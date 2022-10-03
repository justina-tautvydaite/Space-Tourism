import {
  DestinationNavText,
  DestinationPushLine,
  DestinationLinkWrapper,
  DestinationAllLinksWrapper,
} from "./Destination.styles";
import { Routes } from "../routes";
import { useLocation } from "react-router-dom";

function DestinationNav() {
  const location = useLocation();
  console.log(location.pathname);

  return (
    <DestinationAllLinksWrapper>
      <DestinationLinkWrapper>
        <DestinationNavText
          isActive={location.pathname === Routes.DESTINATION_MOON}
          to={Routes.DESTINATION_MOON}
        >
          Moon
        </DestinationNavText>
        <DestinationPushLine
          isActive={location.pathname === Routes.DESTINATION_MOON}
        />
      </DestinationLinkWrapper>
      <DestinationLinkWrapper>
        <DestinationNavText
          isActive={location.pathname === Routes.DESTINATION_MARS}
          to={Routes.DESTINATION_MARS}
        >
          Mars
        </DestinationNavText>
        <DestinationPushLine
          isActive={location.pathname === Routes.DESTINATION_MARS}
        />
      </DestinationLinkWrapper>
      <DestinationLinkWrapper>
        <DestinationNavText
          isActive={location.pathname === Routes.DESTINATION_EUROPA}
          to={Routes.DESTINATION_EUROPA}
        >
          Europa
        </DestinationNavText>
        <DestinationPushLine
          isActive={location.pathname === Routes.DESTINATION_EUROPA}
        />
      </DestinationLinkWrapper>
      <DestinationLinkWrapper>
        <DestinationNavText
          isActive={location.pathname === Routes.DESTINATION_TITAN}
          to={Routes.DESTINATION_TITAN}
        >
          Titan
        </DestinationNavText>
        <DestinationPushLine
          isActive={location.pathname === Routes.DESTINATION_TITAN}
        />
      </DestinationLinkWrapper>
    </DestinationAllLinksWrapper>
  );
}
export default DestinationNav;
