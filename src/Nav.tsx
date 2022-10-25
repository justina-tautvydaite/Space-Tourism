import Logo from "./assets/logo.svg";
import Burger from "./assets/icon-hamburger.svg";
import Close from "./assets/icon-close.svg";
import {
  Navigation,
  NavLine,
  NavLinkWrapper,
  NavLinkWrapperMobile,
  NavAllLinksWrapper,
  ImgLogo,
  ImgBurger,
  ImgClose,
  NavMobileMenu,
  NavBoldText,
  NavLink,
  PushLine,
  PushLineMobile,
  NavLine2,
  ImgLogoIn,
} from "./Nav.styles";
import { useLocation } from "react-router-dom";
import { Routes } from "./routes";
import { useState } from "react";

function Nav() {
  const location = useLocation();
  console.log(location.pathname);

  const [menuOn, setMenuOn] = useState(false);

  const toggleMenu = () => {
    setMenuOn((prev) => !prev);
  };

  return (
    <div>
      <Navigation>
        <ImgLogo to={Routes.HOME}>
          <ImgLogoIn src={Logo} alt="Logo" />
        </ImgLogo>

        <NavLine2 />
        <NavAllLinksWrapper>
          <NavLine />
          <NavLinkWrapper>
            <NavLink to={Routes.HOME}>
              <NavBoldText>00</NavBoldText> HOME
            </NavLink>
            <PushLine isActive={location.pathname === Routes.HOME} />
          </NavLinkWrapper>
          <NavLinkWrapper>
            <NavLink to={Routes.DESTINATION_MOON}>
              <NavBoldText>01</NavBoldText> DESTINATION
            </NavLink>
            <PushLine
              isActive={
                location.pathname === Routes.DESTINATION_MOON ||
                location.pathname === Routes.DESTINATION_MARS ||
                location.pathname === Routes.DESTINATION_TITAN ||
                location.pathname === Routes.DESTINATION_EUROPA
              }
            />
          </NavLinkWrapper>
          <NavLinkWrapper>
            <NavLink to={Routes.CREW_COMMANDER}>
              <NavBoldText>02</NavBoldText> CREW
            </NavLink>
            <PushLine
              isActive={
                location.pathname === Routes.CREW_COMMANDER ||
                location.pathname === Routes.CREW_ENGINEER ||
                location.pathname === Routes.CREW_PILOT ||
                location.pathname === Routes.CREW_SPECIALIST
              }
            />
          </NavLinkWrapper>
          <NavLinkWrapper>
            <NavLink to={Routes.TECHNOLOGY_VEHICLE}>
              <NavBoldText>03</NavBoldText> TECHNOLOGY
            </NavLink>
            <PushLine
              isActive={
                location.pathname === Routes.TECHNOLOGY_VEHICLE ||
                location.pathname === Routes.TECHNOLOGY_CAPSULE ||
                location.pathname === Routes.TECHNOLOGY_SPACEPORT
              }
            />
          </NavLinkWrapper>
        </NavAllLinksWrapper>

        <ImgBurger src={Burger} onClick={toggleMenu} alt="burger" />
      </Navigation>
      <NavMobileMenu isMenuOn={menuOn}>
        <ImgClose src={Close} onClick={toggleMenu} alt="close burger" />
        <NavLinkWrapperMobile>
          <NavLink to={Routes.HOME} onClick={toggleMenu}>
            <NavBoldText>00</NavBoldText> HOME
          </NavLink>
          <PushLineMobile isActive={location.pathname === Routes.HOME} />
        </NavLinkWrapperMobile>
        <NavLinkWrapperMobile>
          <NavLink to={Routes.DESTINATION_MOON} onClick={toggleMenu}>
            <NavBoldText>01</NavBoldText> DESTINATION
          </NavLink>
          <PushLineMobile
            isActive={
              location.pathname === Routes.DESTINATION_MOON ||
              location.pathname === Routes.DESTINATION_MARS ||
              location.pathname === Routes.DESTINATION_TITAN ||
              location.pathname === Routes.DESTINATION_EUROPA
            }
          />
        </NavLinkWrapperMobile>
        <NavLinkWrapperMobile>
          <NavLink to={Routes.CREW_COMMANDER} onClick={toggleMenu}>
            <NavBoldText>02</NavBoldText> CREW
          </NavLink>
          <PushLineMobile
            isActive={
              location.pathname === Routes.CREW_COMMANDER ||
              location.pathname === Routes.CREW_ENGINEER ||
              location.pathname === Routes.CREW_PILOT ||
              location.pathname === Routes.CREW_SPECIALIST
            }
          />
        </NavLinkWrapperMobile>
        <NavLinkWrapperMobile>
          <NavLink to={Routes.TECHNOLOGY_VEHICLE} onClick={toggleMenu}>
            <NavBoldText>03</NavBoldText> TECHNOLOGY
          </NavLink>
          <PushLineMobile
            isActive={
              location.pathname === Routes.TECHNOLOGY_VEHICLE ||
              location.pathname === Routes.TECHNOLOGY_CAPSULE ||
              location.pathname === Routes.TECHNOLOGY_SPACEPORT
            }
          />
        </NavLinkWrapperMobile>
      </NavMobileMenu>
    </div>
  );
}

export default Nav;
