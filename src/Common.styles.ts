import styled from "styled-components";
import { BackgroundInterface } from "./backgrounds";

export const MyBody = styled.div<{ background: BackgroundInterface }>`
  background-image: url(${(props) => props.background.desktop});
  background-color: #0b0d17;
  background-size: cover;
  width: 100vw;
  height: 100vh;
  z-index: 0;
  @media (max-width: 1024px) {
    background-image: url(${(props) => props.background.tablet});
  }
  @media (max-width: 720px) {
    background-image: url(${(props) => props.background.mobile});
  }
`;

export const H5 = styled.h5`
  font-family: "Barlow Condensed", sans-serif;
  font-weight: 400;
  font-size: 28px;
  letter-spacing: 4.75px;
  color: #d0d6f9;
  margin-bottom: 30px;
  @media (max-width: 1024px) {
    font-size: 20px;
    letter-spacing: 3.4px;
  }
  @media (max-width: 720px) {
    font-size: 16px;
    letter-spacing: 2.7px;
    margin-bottom: 22px;
  }
`;
export const H1 = styled.h1`
  font-family: "Bellefair", sans-serif;
  font-weight: 400;
  font-size: 150px;
  color: #ffffff;
  margin-bottom: 30px;
  @media (max-width: 720px) {
    font-size: 88px;
    margin-bottom: 22px;
  }
`;
export const P = styled.p`
  font-family: "Barlow", sans-serif;
  font-weight: 400;
  font-size: 18px;
  color: #d0d6f9;
  line-height: 32px;
  z-index: 5;
  @media (max-width: 1024px) {
    font-size: 16px;
    line-height: 28px;
  }
  @media (max-width: 720px) {
    font-size: 15px;
    line-height: 25px;
    margin: 0 10px 0;
  }
`;
export const H6 = styled.h6`
  font-family: "Barlow Condensed", sans-serif;
  font-weight: 400;
  font-size: 28px;
  letter-spacing: 4.725px;
  text-transform: uppercase;
  color: #ffffff;
  z-index: 5;
  @media (max-width: 1024px) {
    font-size: 20px;
    letter-spacing: 3.375px;
  }
  @media (max-width: 720px) {
    font-size: 16px;
    letter-spacing: 2.7px;
  }
`;

export const BoldGrey = styled(H6)`
  font-weight: 700;
  opacity: 0.25;
  margin-right: 30px;
  @media (max-width: 1024px) {
    margin-right: 20px;
  }
  @media (max-width: 720px) {
    margin-right: 16px;
  }
`;
export const H2 = styled.h2`
  font-family: "Bellefair", sans-serif;
  font-weight: 400;
  font-size: 100px;
  color: #ffffff;
  text-transform: uppercase;
  margin-top: 40px;
  margin-bottom: 15px;
  @media (max-width: 1024px) {
    margin-top: 32px;
    margin-bottom: 10px;
    font-size: 80px;
  }
  @media (max-width: 720px) {
    margin-top: 20px;
    margin-bottom: 5px;
    font-size: 56px;
  }
`;
export const H7 = styled.p`
  font-family: "Barlow Condensed", sans-serif;
  font-weight: 400;
  font-size: 14px;
  letter-spacing: 2.36px;
  color: #d0d6f9;
  text-transform: uppercase;
  margin-bottom: 15px;
`;
export const H8 = styled.p`
  font-family: "Bellefair", sans-serif;
  font-weight: 400;
  font-size: 28px;
  text-transform: uppercase;
  color: #ffffff;
  white-space: nowrap;
`;
export const PickHeading = styled.div`
  display: flex;
  margin-top: 8.4vh;
  margin-left: 11.5vw;
  z-index: 5;
  @media (max-width: 1024px) {
    margin-left: 5vw;
    margin-top: 3.9vh;
  }
  @media (max-width: 720px) {
    margin: 0;
    order: 1;
    justify-content: center;
  }
`;
export const H4 = styled.h4`
  font-family: "Bellefair", sans-serif;
  font-weight: 400;
  font-size: 32px;
  text-transform: uppercase;
  color: #ffffff;
  opacity: 0.5;
  margin-bottom: 15px;
  z-index: 5;
  @media (max-width: 1024px) {
    font-size: 24px;
    margin-bottom: 8px;
  }
  @media (max-width: 720px) {
    font-size: 16px;
  }
`;
export const H3 = styled.h3`
  font-family: "Bellefair", sans-serif;
  font-weight: 400;
  font-size: 56px;
  text-transform: uppercase;
  color: #ffffff;
  margin-bottom: 30px;
  z-index: 5;
  @media (max-width: 1024px) {
    font-size: 40px;
    margin-bottom: 16px;
  }
  @media (max-width: 720px) {
    font-size: 24px;
  }
`;
export const H9 = styled.p`
  font-family: "Barlow Condensed", sans-serif;
  font-weight: 400;
  font-size: 16px;
  letter-spacing: 2.7px;
  color: #d0d6f9;
  margin-bottom: 11px;
  @media (max-width: 720px) {
    font-size: 14px;
    margin-bottom: 9px;
  }
`;
