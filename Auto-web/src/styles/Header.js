import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const HeaderContainer = styled.header`
  position: fixed;
  padding: 10px;
  width: 95vw;
  left: 50%;
  transform: translateX(-50%);
  display: grid;
  align-items: center;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 30%;
  z-index: 2;
`;

export const Logo = styled.img`
  width: 120px;
`;

export const Nav = styled.nav`
  width: 55vw;
  padding: 10px;

  ul {
    display: flex;
    justify-content: end;
    align-items: center;
    width: 40vw;
  }

  li {
    list-style: none;
    text-decoration: none;
    margin: 10px;
  }
`;

export const StyledNavLink = styled(NavLink)`
  text-decoration: none;
  color: white;
  font-size: 18px;

  &.active {
    font-weight: bold;
    border-bottom: 1px solid red;
  }

  &:hover {
    color: #eebb2b;
  }
`;
