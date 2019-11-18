import styled from "styled-components";
import { Link } from "react-router-dom";

export const NavContainer = styled.div`
  width: 100%;
  margin: 0;
  background-color: #006f46;
  display: flex;
  justify-content: space-between;
  align-items: center;
  min-height: 5rem;
  padding: 0.3rem 1rem;
  border-bottom: 0.2rem solid #00a266;
  box-shadow: 0 0.1rem 3rem #363636;
`;

export const Logo = styled(Link)`
  text-decoration: none;
  font-size: 2.5rem;
  color: white;
`;

export const NavItem = styled.div`
  padding: 0;
  margin: 0;
  font-size: 2rem;
  list-style: none;
  padding: 1rem;
  height: 100%;
  display: flex;
  align-items: center;

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
