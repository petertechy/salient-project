import styled from 'styled-components';
import { Navbar, Button } from 'react-bootstrap';

// Styled component for the Navbar
export const StyledNavbar = styled(Navbar)`
  background-color: #fff;
  padding: 1rem 2rem;
  border-bottom: 1px solid #f5f5f5;
`;

// Styled component for the unordered list containing nav items
export const NavList = styled.ul`
  display: inline-flex;
  list-style-type: disc;
  padding-left: 20px; /* Add some padding to align bullets */
  margin-bottom: 0;

  &:hover {
    cursor: pointer;
  }
`;

// Styled component for each NavLink (anchor tag)
export const StyledNavLink = styled.a`
  color: #000;
  font-weight: 600;
  font-size: 18px;
  margin-right: 30px;
  text-decoration: none; /* Remove underline */

  &:hover {
    color: #f0a500;
  }

  &:before {
    content: '• ';
    font-size: 1.2rem;
    color: #000; /* Bullet point color */
  }
`;

// Styled component for the 'Contact Us' Button
export const ContactButton = styled(Button)`
  background-color: transparent;
  border: 2px solid #f0a500;
  color: #f0a500;
  border-radius: 25px;
  padding: 0.5rem 1.5rem;
  font-weight: bold;

  &:hover {
    background-color: #f0a500;
    color: white;
    border: 2px solid #f0a500;
  }
`;

export const StyledBrand = styled(Navbar.Brand)`
  font-weight: bold;
  img {
    max-height: 40px;
    margin-right: 10px;
  }
`;
