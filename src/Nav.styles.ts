import styled from "styled-components";
import { Link } from "react-router-dom";

export const Navigation = styled.div`
  height: 96px;
  margin: 40px 0 0 55px;
  display: flex;
  align-items: center;
  position: relative;
  z-index: 100;

  @media (max-width: 1024px) {
    margin: 0 0 0 40px;
  }
  @media (max-width: 720px) {
    margin: 0 0 0 24px;
    height: 88px;
  }
`;

export const NavLine = styled.div`
  width: 30px;
  height: 1px;
  background-color: #979797;
  position: absolute;
  left: 0;
  bottom: 47.5px;
  z-index: 3;
  @media (max-width: 1024px) {
    display: none;
  }
`;
export const NavLinkWrapper = styled.div`
  margin-right: 50px;
  &:hover > div {
    opacity: 0.5;
  }
  @media (max-width: 1024px) {
    margin-right: 35px;
  }
`;
export const NavAllLinksWrapper = styled.div`
  display: flex;
  height: 100%;
  align-items: flex-end;
  background: rgba(255, 255, 255, 0.04);
  backdrop-filter: blur(40px);
  padding-left: 123px;
  min-width: 710px;
  width: 100%;
  @media (max-width: 1024px) {
    margin-left: auto;
    padding-left: 48px;
    min-width: 450px;
    width: 450px;
  }
  @media (max-width: 720px) {
    display: none;
  }
`;

export const NavLine2 = styled.div`
  height: 1px;
  background-color: #979797;
  width: 100%;
  max-width: 440px;
  margin-left: 64px;
  @media (max-width: 1024px) {
    display: none;
  }
`;

export const ImgLogo = styled(Link)<{ image: string }>`
  background: url(${(props) => props.image});
  min-width: 48px;
  height: 48px;
  background-repeat: no-repeat;
  background-size: contain;
  @media (max-width: 720px) {
    min-width: 40px;
    height: 40px;
  }
`;
export const ImgBurger = styled.img`
  width: 24px;
  height: 21px;
  position: absolute;
  right: 24px;
  cursor: pointer;
  @media (min-width: 721px) {
    display: none;
  }
`;
export const ImgClose = styled.img`
  width: 21px;
  height: 21px;
  position: absolute;
  right: 25px;
  top: 33px;
  cursor: pointer;
  @media (min-width: 721px) {
    display: none;
  }
`;
export const NavMobileMenu = styled.div<{ isMenuOn: boolean }>`
  max-width: 254px;
  min-width: 220px;
  width: 100%;
  height: 100%;
  position: absolute;
  right: 0;
  top: 0;
  background: rgba(255, 255, 255, 0.04);
  backdrop-filter: blur(40.8px);
  padding-top: 122px;
  padding-left: 32px;
  opacity: ${(props) => (props.isMenuOn ? 1 : 0)};
  z-index: ${(props) => (props.isMenuOn ? 10000 : -1)};
  transition: all 300ms ease-in-out;
  @media (min-width: 721px) {
    display: none;
  }
`;

export const NavBoldText = styled.p`
  color: #ffffff;
  font-weight: bold;
  font-size: 16px;
  font-family: "Barlow Condensed", sans-serif;
  letter-spacing: 2.7px;
  cursor: pointer;
  margin-right: 10px;
  @media (min-width: 721px) and (max-width: 1024px) {
    display: none;
  }
`;
export const NavLink = styled(Link)`
  color: #ffffff;
  font-size: 16px;
  font-family: "Barlow Condensed", sans-serif;
  letter-spacing: 2.7px;
  text-decoration: none;
  cursor: pointer;
  display: flex;
  padding-bottom: 35px;
  @media (max-width: 1024px) and (min-width: 721px) {
    font-size: 14px;
  }
  @media (max-width: 720px) {
    padding-bottom: 0;
  }
`;
export const PushLine = styled.div<{ isActive: boolean }>`
  height: 3px;
  background-color: #ffffff;
  opacity: ${(props) => (props.isActive ? "1" : "0")};
  width: 100%;

  transition: opacity 300ms ease-out;
`;
export const PushLineMobile = styled.div<{ isActive: boolean }>`
  height: 31px;
  background-color: #ffffff;
  opacity: ${(props) => (props.isActive ? "1" : "0")};
  width: 4px;
  transition: opacity 300ms ease-out;
  position: absolute;
  right: 0;
`;
export const NavLinkWrapperMobile = styled.div`
  margin-bottom: 40px;
  display: flex;
  align-items: center;
  &:hover > div {
    opacity: 0.5;
  }
  @media (min-width: 721px) {
    display: none;
  }
`;
