import MoonImage from "../assets/destination/image-moon.png";
import MarsImage from "../assets/destination/image-mars.png";
import TitanImage from "../assets/destination/image-titan.png";
import EuropaImage from "../assets/destination/image-europa.png";
import { H2, P, H6, H7, H8, BoldGrey, PickHeading } from "../Common.styles";
import data from "../data";
import DestinationNav from "./DestinationNav";
import {
  DestinationTextWrapper,
  DestinationWrapper,
  DestinationLine,
  DestinationStatsWrapper,
  DestinationAllStatsWrapper,
  PlanetImg,
} from "./Destination.styles";
import { useNavigate, useParams } from "react-router-dom";
import { Routes } from "../routes";

const PLANET_IMAGES = {
  mars: MarsImage,
  moon: MoonImage,
  titan: TitanImage,
  europa: EuropaImage,
};

function Destination() {
  const { planet } = useParams<{
    planet: "mars" | "moon" | "titan" | "europa";
  }>();

  const navigate = useNavigate();

  const pageInfo = data.destinations.find(
    (x) => x.name.toLowerCase() === planet
  );

  if (!pageInfo || !planet) {
    navigate(Routes.HOME);
    return null;
  }

  return (
    <div>
      <PickHeading>
        <BoldGrey>01</BoldGrey>
        <H6>Pick your destination</H6>
      </PickHeading>
      <DestinationWrapper>
        <PlanetImg src={PLANET_IMAGES[planet]} alt="Planet" />
        <DestinationTextWrapper>
          <DestinationNav />
          <H2>{pageInfo.name}</H2>
          <P>{pageInfo.description}</P>
          <DestinationLine />
          <DestinationAllStatsWrapper>
            <DestinationStatsWrapper>
              <H7>Avg. distance </H7>
              <H8>{pageInfo.distance}</H8>
            </DestinationStatsWrapper>
            <DestinationStatsWrapper>
              <H7>Est. travel time</H7>
              <H8>{pageInfo.travel}</H8>
            </DestinationStatsWrapper>
          </DestinationAllStatsWrapper>
        </DestinationTextWrapper>
      </DestinationWrapper>
    </div>
  );
}

export default Destination;
