import styled from "styled-components";

export const Navigation = styled.div`
  height: 96px;
  margin: 40px 0 0 55px;
  display: flex;
  align-items: center;
`;

export const NavLine = styled.div`
  width: 470px;
  height: 1px;
  background-color: #979797;
  margin-left: 112px;
  position: absolute;
  z-index: 1;
`;
export const NavLinkWrapper = styled.div`
  margin-right: 50px;
  cursor: pointer;
`;
export const NavAllLinksWrapper = styled.div`
  display: flex;
  height: 100%;
  align-items: flex-end;
  background: rgba(255, 255, 255, 0.04);
  backdrop-filter: blur(40.8px);
  margin-left: 507px;
  padding-left: 124px;
  width: 100%;
`;
