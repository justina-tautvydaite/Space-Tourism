import { H5, H1, P } from "../Common.styles";
import { Routes } from "../routes";
import {
  Button,
  HomeTextWrapper,
  HomeWrapper,
  ButtonHover,
  BtnWrapper,
} from "./Home.styles";

function Home() {
  return (
    <HomeWrapper>
      <HomeTextWrapper>
        <H5>SO, YOU WANT TO TRAVEL TO</H5>
        <H1>SPACE</H1>
        <P>
          Let's face it; if you want to go to space, you might as well genuinely
          go to outer space and not hover kind of on the edge of it. Well sit
          back, and relax because we'll give you a truly out of this world
          experience!
        </P>
      </HomeTextWrapper>
      <BtnWrapper>
        <ButtonHover />
        <Button to={Routes.DESTINATION_MOON}>EXPLORE</Button>
      </BtnWrapper>
    </HomeWrapper>
  );
}

export default Home;
