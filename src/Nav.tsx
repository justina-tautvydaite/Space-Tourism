import Logo from "./Assets/logo.svg";
import {
  Navigation,
  NavLine,
  NavLinkWrapper,
  NavAllLinksWrapper,
} from "./Nav.styles";
import { NavLink, PushLine } from "./Common.styles";

function Nav() {
  return (
    <Navigation>
      <img src={Logo} alt="Logo" />
      <NavLine />
      <NavAllLinksWrapper>
        <NavLinkWrapper>
          <NavLink to="/Home">
            <b>00</b> HOME
          </NavLink>
          <PushLine />
        </NavLinkWrapper>
        <NavLinkWrapper>
          <NavLink to="/Destination-Moon">
            <b>01</b> DESTINATION
          </NavLink>
          <PushLine />
        </NavLinkWrapper>
        <NavLinkWrapper>
          <NavLink to="/Crew-Commander">
            <b>02</b> CREW
          </NavLink>
          <PushLine />
        </NavLinkWrapper>
        <NavLinkWrapper>
          <NavLink to="/Technology-Launch-Vehicle">
            <b>03</b> TECHNOLOGY
          </NavLink>
          <PushLine />
        </NavLinkWrapper>
      </NavAllLinksWrapper>
    </Navigation>
  );
}

export default Nav;
