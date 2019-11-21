import styled from "styled-components";
import { Link } from "react-router-dom";

export const HeaderContainer = styled.div`
  width: 100%;
  /* margin: 0; */
  background-color: #006f46;
  color: white;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  /* align-items: center; */
  align-items: stretch;
  min-height: 5rem;
  /* padding: 0.3rem 1rem; */
  border-bottom: 0.2rem solid #00a266;
  box-shadow: 0 0.1rem 3rem #363636;
`;

export const Logo = styled(Link)`
  text-decoration: none;
  font-size: 2.5rem;
  color: white;
  align-self: center;
  padding: 0 1rem;
`;

export const NavContainer = styled.div`
  font-size: 2rem;
  display: flex;
  align-items: center;
`;

export const NavItem = styled.div`
  padding: 0 1rem;
  align-self: stretch;
  display: flex;
  align-items: center;
  cursor: pointer;

  a,
  a:visited,
  a:active {
    text-decoration: none;
    color: #eee;
  }

  &:hover {
    background-color: #55c57a;
  }
`;

export const NavLinkItem = styled(Link)`
  text-decoration: none;
  padding: 0 1rem;
  align-self: stretch;
  display: flex;
  align-items: center;
  cursor: pointer;

  &,
  &:visited,
  &:active {
    text-decoration: none;
    color: #eee;
  }

  &:hover {
    background-color: #55c57a;
  }
`;
