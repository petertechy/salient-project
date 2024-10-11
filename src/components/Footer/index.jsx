import React from 'react';
import {
  FooterContainer,
  FooterTop,
  FooterBottom,
  Column,
  FooterText,
  SocialIcons,
  BrandSection,
  FooterLogo
} from './FooterElements';
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter } from 'react-icons/fa';

const Footer = () => {
  return (
    <FooterContainer>
      {/* Top Section */}
      <FooterTop>
        {/* Brand Section */}
        <BrandSection>
          <FooterLogo>SS</FooterLogo>
          <FooterText>Let’s start working together</FooterText>
          <h2>hello@salient.com</h2>
        </BrandSection>

        {/* Contact Information */}
        <Column>
          <h4>Contact Info</h4>
          <ul>
            <li>Phone: +234 802 000 0000</li>
            <li>Email: hello@salient.com</li>
            <li>Address: 22 Office Street, Somewhere Lane, Asaba, Delta, NG</li>
          </ul>
          <SocialIcons>
            <a href="#"><FaFacebookF /></a>
            <a href="#"><FaInstagram /></a>
            <a href="#"><FaTwitter /></a>
            <a href="#"><FaLinkedinIn /></a>
          </SocialIcons>
        </Column>

        {/* Quick Links */}
        <Column>
          <h4>Quick Links</h4>
          <ul>
            <li><a href="/about">About</a></li>
            <li><a href="/team">Meet the Team</a></li>
            <li><a href="/projects">Our Projects</a></li>
            <li><a href="/career">Career</a></li>
            <li><a href="/contact">Contact</a></li>
          </ul>
        </Column>

        {/* Gallery */}
        <Column>
          <h4>Gallery</h4>
          <ul>
            <li><a href="/gallery1">Gallery 1</a></li>
            <li><a href="/gallery2">Gallery 2</a></li>
            <li><a href="/gallery3">Gallery 3</a></li>
            <li><a href="/gallery4">Gallery 4</a></li>
          </ul>
        </Column>
      </FooterTop>

      {/* Bottom Section */}
      <FooterBottom>
        <FooterText>© 2024 Salient Software Solutions. All rights reserved.</FooterText>
        <ul>
          <li><a href="/privacy-policy">Privacy Policy</a></li>
          <li><a href="/terms-of-service">Terms of Service</a></li>
        </ul>
      </FooterBottom>
    </FooterContainer>
  );
};

export default Footer;
