import styled from "styled-components";
import { Link } from "react-router-dom";

interface BodyInterface {
  primary: boolean;
}

export const NavLink = styled(Link)`
  color: #ffffff;
  font-size: 16px;
  font-family: "Barlow Condensed", sans-serif;
  letter-spacing: 2.7px;
  text-decoration: none;
`;
export const PushLine = styled.div`
  height: 3px;
  background-color: #ffffff;
  width: 100%;
  margin-top: 35px;
`;
export const MyBody = styled.body<BodyInterface>`
  top: 0;
  position: absolute;
  width: 100%;
  height: 100%;
`;
