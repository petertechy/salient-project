import React from "react";
import {
  HeroContainer,
  LeftSection,
  RightSection,
  MainHeading,
  SubHeading,
  ImageWrapper,
  StyledButton,
  ContactInfo,
} from "./HeroSectionElements";
import firstImage from "../../Images/small-image.svg"; // Replace with actual image path
import secondImage from "../../Images/big-image.svg"; // Replace with actual image path

const HeroSection = () => {
  return (
    <HeroContainer>
      <LeftSection>
        <MainHeading>Think.</MainHeading>
        <SubHeading>Create.</SubHeading>
        <SubHeading bold>Solution.</SubHeading>
        <StyledButton>Discover More About Salient</StyledButton>
        <ContactInfo>+234 802 000 0000</ContactInfo>
      </LeftSection>

      <RightSection>
        <ImageWrapper>
          <img src={firstImage} alt="First" />
          <img src={secondImage} alt="Second" />
        </ImageWrapper>
      </RightSection>
    </HeroContainer>
  );
};

export default HeroSection;
