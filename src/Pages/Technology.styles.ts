import styled from "styled-components";
import { Link } from "react-router-dom";
import { TechImageInterface } from "../backgrounds";

export const TechNavDot = styled(Link)<{ isActive: boolean }>`
  width: 80px;
  height: 80px;
  display: block;
  border-radius: 50%;
  border: 1px solid #383b4b;
  font-family: "Bellefair", sans-serif;
  font-weight: 400;
  font-size: 32px;
  letter-spacing: 2px;
  color: ${(props) => (props.isActive ? "#0B0D17;" : "#ffffff")};
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  margin-bottom: 32px;
  background-color: ${(props) => (props.isActive ? "#ffffff" : "#0B0D17")};
  transition: border 300ms ease-out;
  transition: background-color 300ms ease-out;
  transition: color 300ms ease-out;
  &:hover {
    border: 1px solid #ffffff;
  }
  @media (max-width: 1024px) {
    margin-bottom: 0;
    margin-right: 16px;
    width: 60px;
    height: 60px;
    font-size: 24px;
  }
`;

export const TechNavWrapper = styled.div`
  margin-top: 111px;
  min-width: 80px;
  @media (max-width: 1024px) {
    order: 3;
    margin-top: 56px;
    display: flex;
    margin-left: 16px;
  }
  @media (max-width: 720px) {
    margin-top: 34px;
  }
`;

export const TechTextWrapper = styled.div`
  margin: 111px 30px 0;
  @media (max-width: 1024px) {
    order: 4;
    margin: 44px 0 0;
  }
  @media (max-width: 720px) {
    margin: 26px 24px 0;
  }
`;

export const PWrapper = styled.div`
  max-width: 445px;
  @media (max-width: 1024px) {
    max-width: 460px;
  }
`;

export const MainWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 26px;
  margin-left: 11.5vw;
  @media (max-width: 1024px) {
    flex-direction: column;
    margin-left: 0;
    margin-top: 60px;
    align-items: center;
    text-align: center;
    margin-bottom: 30px;
  }
  @media (max-width: 720px) {
    margin-top: 32px;
  }
`;

export const TechImg = styled.div<{ img: TechImageInterface }>`
  width: 35.7vw;
  height: 527px;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: right;
  background-image: url(${(props) => props.img.desktop});
  @media (max-width: 1024px) {
    background-image: url(${(props) => props.img.tablet});
    order: 2;
    width: calc(100% + 15px);
    background-position: center;
    height: 310px;
  }
  @media (max-width: 720px) {
    height: 170px;
  }
`;
export const H3Tech = styled.h3`
  font-family: "Bellefair", sans-serif;
  font-weight: 400;
  font-size: 56px;
  text-transform: uppercase;
  color: #ffffff;
  margin-bottom: 17px;
  z-index: 5;
  @media (max-width: 1024px) {
    font-size: 40px;
    margin-bottom: 16px;
  }
  @media (max-width: 720px) {
    font-size: 24px;
  }
`;
