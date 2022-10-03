import styled from "styled-components";
import { Link } from "react-router-dom";

export const ButtonHover = styled.div`
  opacity: 0;
  background: #ffffff;
  width: 450px;
  height: 450px;
  border-radius: 50%;
  transition: opacity 300ms ease-out;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  @media (max-width: 1024px) {
    width: 400px;
    height: 400px;
  }
  @media (max-width: 720px) {
    width: 245px;
    height: 245px;
  }
`;
export const BtnWrapper = styled.div`
  position: relative;
  width: 450px;
  height: 450px;
  &:hover > div {
    opacity: 0.3;
  }
  @media (max-width: 1024px) {
    margin-top: 77px;
    width: 400px;
    height: 400px;
  }
  @media (max-width: 720px) {
    width: 245px;
    height: 245px;
    margin-top: 33px;
  }
`;
export const Button = styled(Link)`
  width: 274px;
  height: 274px;
  background: #ffffff;
  font-family: "Bellefair", sans-serif;
  font-weight: 400;
  font-size: 32px;
  letter-spacing: 2px;
  color: #0b0d17;
  cursor: pointer;
  border-radius: 50%;
  border: none;
  margin: 88px 0 0 88px;
  text-decoration: none;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  @media (max-width: 1024px) {
    width: 242px;
    height: 242px;
    margin: 79px 0 0 79px;
  }
  @media (max-width: 720px) {
    width: 150px;
    height: 150px;
    font-size: 20px;
    margin: 47.5px 0 0 47.5px;
  }
`;

export const HomeTextWrapper = styled.div`
  min-width: 450px;
  max-width: 450px;
  margin-left: 50px;
  @media (max-width: 1024px) {
    margin-left: 0;
  }
  @media (max-width: 720px) {
    min-width: 260px;
    max-width: 327px;
    margin: 0 10px 0;
  }
`;
export const HomeWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  margin: 24vh 0 4vh;
  @media (max-width: 1024px) {
    flex-direction: column;
    align-items: center;
    text-align: center;
    margin: 106px 0 18px;
    @media (max-width: 720px) {
      margin: 24px 0 18px;
    }
  }
`;
