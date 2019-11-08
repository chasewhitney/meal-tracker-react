import styled from "styled-components";
import { Link } from "react-router-dom";

export const NavContainer = styled.div`
  margin: 0;
  background-color: #28b485;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 5.2rem;
  padding: 1rem;
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
