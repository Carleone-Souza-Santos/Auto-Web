import logo from '../assets/img/logo-Aut.png';
import { HeaderContainer, Logo, Nav, StyledNavLink } from '../styles/Header';

const Header = () => {
  return (
    <HeaderContainer>
      <Logo src={logo} alt="Logo Auto Car" />
      <Nav>
        <ul>
          <li>
            <StyledNavLink exact to="/" activeClassName="active">
              Home
            </StyledNavLink>
          </li>
          <li>
            <StyledNavLink to="/carros" activeClassName="active">
              Carros
            </StyledNavLink>
          </li>
          <li>
            <StyledNavLink to="/faleconosco" activeClassName="active">
              Fale Conosco
            </StyledNavLink>
          </li>
        </ul>
      </Nav>
    </HeaderContainer>
  );
};

export default Header;
