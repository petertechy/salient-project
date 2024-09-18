import React from "react";
import { Container, Row } from "react-bootstrap";
import {
  FooterContainer,
  Copyright,
  Logo,
  SocialIcons,
  SocialIcon,
  CompanyLinks,
  InformationLinks,
  ContactInfo,
  ContactIcon,
  Divider,
  ColWithPadding,
  Text,
} from "./FooterElements.style";
import logo from "../Images/footerLogo.png";
import {
  contactObject,
  headerObject,
  informationObject,
  ourCompanyObject,
  socialIconsObject,
} from "../../utils/contentObjects";
import { Link } from "react-router-dom"; // Directly using Link from react-router-dom

const Footer = () => {
  return (
    <FooterContainer>
      <Container>
        <Row>
          <ColWithPadding xs={12} md={3}>
            <Logo>
              <img src={logo} alt="Your Logo" />
            </Logo>
            <Text>{headerObject.mainHeader}</Text>
            <SocialIcons>
              {socialIconsObject.map((item, index) => (
                <SocialIcon key={index}>{item.icon}</SocialIcon>
              ))}
            </SocialIcons>
          </ColWithPadding>
          <ColWithPadding xs={12} md={3}>
            <CompanyLinks>
              <h5>{headerObject.ourCompany}</h5>
              {ourCompanyObject.map((item, index) => (
                <Link key={index} to={item.href}>
                  {item.header}
                </Link>
              ))}
            </CompanyLinks>
          </ColWithPadding>
          <ColWithPadding xs={12} md={3}>
            <InformationLinks>
              <h5>{headerObject.information}</h5>
              {informationObject.map((item, index) => (
                <Link key={index} to={item.href}>
                  {item.header}
                </Link>
              ))}
            </InformationLinks>
          </ColWithPadding>
          <ColWithPadding xs={12} md={3}>
            <ContactInfo>
              <h5>{headerObject.contactUs}</h5>
              {contactObject.map((item, index) => (
                <p key={index}>
                  <ContactIcon>{item.icon}</ContactIcon> {item.header}
                </p>
              ))}
            </ContactInfo>
          </ColWithPadding>
        </Row>
      </Container>
      <Divider />
      <Copyright>&copy; {headerObject.copyRight}</Copyright>
    </FooterContainer>
  );
};

export default Footer;
