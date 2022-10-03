import styled from "styled-components";
import { Link } from "react-router-dom";

export const PWrapper = styled.div`
  max-width: 445px;
  z-index: 5;
  @media (max-width: 1024px) {
    max-width: 590px;
  }
`;
export const CrewTextWrapper = styled.div`
  margin-left: 11.5vw;
  margin-top: 154px;
  height: 380px;
  z-index: 5;
  @media (max-width: 1024px) {
    margin-top: 60px;
    margin-left: 0;
    display: flex;
    flex-direction: column;
    text-align: center;
    align-items: center;
    height: 222px;
  }
  @media (max-width: 720px) {
    order: 5;
    margin: 0 10px 20px;
    height: 100%;
  }
`;

export const CrewNavDot = styled(Link)<{ isActive: boolean }>`
  width: 15px;
  height: 15px;
  background-color: white;
  display: block;
  margin-right: 24px;
  border-radius: 50%;
  opacity: ${(props) => (props.isActive ? "1" : "0.17")};
  transition: opacity 300ms ease-out;
  &:hover {
    opacity: 0.5;
  }
  @media (max-width: 1024px) {
    width: 10px;
    height: 10px;
    margin-right: 16px;
  }
`;

export const CrewNavWrapper = styled.div`
  display: flex;
  margin-top: auto;
  z-index: 5;
  @media (max-width: 1024px) {
    margin-left: 16px;
    justify-content: center;
  }
`;
export const CrewMemberImg = styled.img`
  z-index: 0;
  @media (max-width: 1024px) {
    height: 532px;
  }
  @media (max-width: 720px) {
    height: 223px;
  }
`;
export const ImgWrapper = styled.div`
  width: 57vw;
  position: absolute;
  bottom: 0;
  right: 0;
  display: flex;
  justify-content: center;
  z-index: 0;
  @media (max-width: 1024px) {
    width: 100%;
    position: static;
  }
  @media (min-height: 1024px) and (max-width: 1024px) and (min-width: 720px) {
    position: absolute;
  }
  @media (max-width: 720px) {
    order: 2;
    margin-top: 32px;
  }
`;
export const CrewWrapper = styled.div`
  display: flex;
  flex-direction: column;
  @media (max-width: 720px) {
    align-items: center;
  }
`;

export const CrewLine = styled.div`
  display: none;
  background-color: #383b4b;
  width: 90%;
  height: 1px;
  margin-bottom: 32px;
  @media (max-width: 720px) {
    display: block;
    order: 3;
  }
`;
export const CrewNavOrderWrapper = styled.div`
  margin-left: 11.5vw;
  margin-bottom: 20px;
  z-index: 5;
  @media (max-width: 1024px) {
    margin-left: 0;
    margin-bottom: 40px;
  }
  @media (max-width: 720px) {
    order: 4;
    margin-bottom: 32px;
  }
`;
