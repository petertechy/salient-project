import React from "react";
import logo from "../Images/Salient Logo icon 1.svg";
import {
  StyledBrand,
  StyledNavLink,
  StyledNavbar,
  ContactButton,
  NavList, // Import the styled ul component
} from "./NavbarElements";
import { Navbar, Container } from "react-bootstrap";

const NavigationBar = () => {
  return (
    <StyledNavbar expand="lg">
      <Container>
        <StyledBrand href="/">
          <img src={logo} alt="SS Logo" />
        </StyledBrand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <NavList className="mx-auto">
            <StyledNavLink href="/">Home</StyledNavLink>
            <StyledNavLink href="/services">Services</StyledNavLink>
            <StyledNavLink href="/portfolio">Portfolio</StyledNavLink>
            <StyledNavLink href="/products">Products</StyledNavLink>
            <StyledNavLink href="/team">Team</StyledNavLink>
            <StyledNavLink href="/join-us">Join Us</StyledNavLink>
          </NavList>
          <ContactButton href="/contact">Contact us</ContactButton>
        </Navbar.Collapse>
      </Container>
    </StyledNavbar>
  );
};

export default NavigationBar;
