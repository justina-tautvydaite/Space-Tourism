import styled from "styled-components";
import { Link } from "react-router-dom";

export const DestinationNavText = styled(Link)<{ isActive: boolean }>`
  font-family: "Barlow Condensed", sans-serif;
  font-weight: 400;
  font-size: 16px;
  letter-spacing: 2.7px;
  color: ${(props) => (props.isActive ? "#ffffff" : "#d0d6f9")};
  text-transform: uppercase;
  text-decoration: none;
  padding-bottom: 15px;
  display: flex;
  @media (max-width: 720px) {
    font-size: 14px;
    letter-spacing: 2.3px;
  }
`;

export const DestinationPushLine = styled.div<{ isActive: boolean }>`
  height: 3px;
  background-color: #ffffff;
  opacity: ${(props) => (props.isActive ? "1" : "0")};
  width: 100%;
  transition: opacity 300ms ease-out;
`;
export const DestinationLinkWrapper = styled.div`
  margin-right: 36px;
  &:hover > div {
    opacity: 0.5;
  }
  @media (max-width: 720px) {
    margin-right: 7.2vw;
  }
`;
export const DestinationAllLinksWrapper = styled.div`
  display: flex;
  @media (max-width: 1024px) {
    margin-left: 36px;
  }
  @media (max-width: 720px) {
    margin-left: 7.2vw;
  }
`;

export const DestinationTextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 445px;
  margin-top: 7.1vh;

  @media (max-width: 1024px) {
    align-items: center;
    margin-top: 5.3vh;
    max-width: 575px;
    text-align: center;
    margin-bottom: 0;
  }
  @media (max-width: 720px) {
    margin-top: 26px;
    max-width: 330px;
  }
`;
export const DestinationWrapper = styled.div`
  display: flex;
  justify-content: space-evenly;
  @media (max-width: 1024px) {
    flex-direction: column;
    align-items: center;
  }
`;
export const DestinationLine = styled.div`
  width: 100%;
  background: #383b4b;
  height: 1px;
  margin-top: 6.1vh;
  margin-bottom: 3.3vh;
  @media (max-width: 1024px) {
    margin-top: 4.8vh;
    margin-bottom: 2.9vh;
  }
  @media (max-width: 1024px) {
    margin-top: 32px;
    margin-bottom: 32px;
  }
`;
export const DestinationStatsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-right: 75px;
  @media (max-width: 1024px) {
    margin-right: 0;
    margin-bottom: 62px;
  }
  @media (max-width: 720px) {
    margin-bottom: 32px;
  }
`;
export const DestinationAllStatsWrapper = styled.div`
  display: flex;
  @media (max-width: 1024px) {
    justify-content: space-evenly;
    width: 100%;
  }
  @media (max-width: 720px) {
    flex-direction: column;
  }
`;
export const PlanetImg = styled.img`
  margin-top: 97px;
  width: 445px;
  height: 445px;
  @media (max-width: 1024px) {
    margin-top: 5.6vh;
    width: 300px;
    height: 300px;
  }
  @media (max-width: 720px) {
    margin-top: 32px;
    width: 170px;
    height: 170px;
  }
`;
