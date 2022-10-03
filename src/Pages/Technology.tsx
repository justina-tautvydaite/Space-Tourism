import data from "../data";
import { useNavigate, useParams } from "react-router-dom";
import { Routes } from "../routes";
import { H6, H9, P, BoldGrey, PickHeading } from "../Common.styles";
import TechnologyNav from "./TechnologyNav";
import {
  TechTextWrapper,
  PWrapper,
  MainWrapper,
  TechImg,
  H3Tech,
} from "./Technology.styles";
import { useLocation } from "react-router-dom";
import { getTechImgByRoute } from "../backgrounds";

function Technology() {
  const { pathname } = useLocation();
  const img = getTechImgByRoute(pathname);

  const { technology } = useParams<{
    technology: "vehicle" | "capsule" | "spaceport";
  }>();

  const navigate = useNavigate();

  const pageInfo = data.technology.find((x) => x.objTechnology === technology);

  if (!pageInfo || !technology) {
    navigate(Routes.HOME);
    return null;
  }

  return (
    <div>
      <PickHeading>
        <BoldGrey>03</BoldGrey>
        <H6>SPACE LAUNCH 101</H6>
      </PickHeading>
      <MainWrapper>
        <TechnologyNav />
        <TechTextWrapper>
          <H9>THE TERMINOLOGY…</H9>
          <H3Tech>{pageInfo.name}</H3Tech>
          <PWrapper>
            <P>{pageInfo.description}</P>
          </PWrapper>
        </TechTextWrapper>
        <TechImg img={img} />
      </MainWrapper>
    </div>
  );
}

export default Technology;
