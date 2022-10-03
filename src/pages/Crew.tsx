import data from "../data";
import { useNavigate, useParams } from "react-router-dom";
import { Routes } from "../routes";
import CommanderImage from "../assets/crew/image-douglas-hurley.png";
import SpecialistImage from "../assets/crew/image-mark-shuttleworth.png";
import PilotImage from "../assets/crew/image-victor-glover.png";
import EngineerImage from "../assets/crew/image-anousheh-ansari.png";
import { H6, H4, H3, P, BoldGrey, PickHeading } from "../Common.styles";
import {
  PWrapper,
  CrewTextWrapper,
  CrewMemberImg,
  ImgWrapper,
  CrewWrapper,
  CrewLine,
  CrewNavOrderWrapper,
} from "./Crew.styles";
import CrewNav from "./CrewNav";

const CREW_IMAGES = {
  commander: CommanderImage,
  specialist: SpecialistImage,
  pilot: PilotImage,
  engineer: EngineerImage,
};

function Crew() {
  const { role } = useParams<{
    role: "commander" | "specialist" | "pilot" | "engineer";
  }>();

  const navigate = useNavigate();

  const pageInfo = data.crew.find((x) => x.objRole === role);

  if (!pageInfo || !role) {
    navigate(Routes.HOME);
    return null;
  }

  return (
    <CrewWrapper>
      <PickHeading>
        <BoldGrey>02</BoldGrey>
        <H6>Meet your crew</H6>
      </PickHeading>
      <CrewTextWrapper>
        <H4>{pageInfo.role}</H4>
        <H3>{pageInfo.name}</H3>
        <PWrapper>
          <P>{pageInfo.bio}</P>
        </PWrapper>
      </CrewTextWrapper>
      <CrewNavOrderWrapper>
        <CrewNav />
      </CrewNavOrderWrapper>
      <ImgWrapper>
        <CrewMemberImg src={CREW_IMAGES[role]} alt="Crew member" />
      </ImgWrapper>
      <CrewLine />
    </CrewWrapper>
  );
}

export default Crew;
