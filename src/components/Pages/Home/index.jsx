import React from "react";
import NavigationBar from "../../Navbar";
import Footer from "../../Footer";
import doctorlogo from "../../Images/rectangle.png";
import shape from "../../Images/Rectangle8.png";
import wave from "../../Images/Rectangle 22.png";
import facility1 from "../../Images/Facility1.png";
import facility2 from "../../Images/facility2.png";
import facility3 from "../../Images/facility3.png";
import maillogo from "../../Images/Email.png";
import { ReactComponent as Plane } from "../../Images/paper-plane.svg";
import {
  AboutContainer,
  AboutHeading,
  AboutText,
  ContainerButton,
  Facility,
  FacilityContainer,
  FacilityHeading,
  FacilityText,
  FooterButton,
  FooterSection,
  FooterText,
  Header,
  HomeContainer,
  HomePageContainer,
  Logo,
  LogoImage,
  MailButton,
  Section,
  SectionHeading,
  SectionText,
  SectionTitle,
  SendIcon,
  Separator,
  Text1,
  Text2,
  TextContainer,
  SubButton,
} from "./HomeElement.style";
import HeroSection from "../../SubSections/HeroSection";

const Home = () => {
  return (
    <>
      <HomePageContainer>
        <NavigationBar />
        <HeroSection/>
        <HomeContainer>
          <TextContainer>
            <Header>Looking for a healthy life?</Header>
            <Text1>
              we will help you to lead a <span>healthy life</span>
            </Text1>
            <Text2>
              Welcome to Spring Homes, where exceptional physical and medical
              care meets compassionate expertise
            </Text2>
            <ContainerButton>Get Started</ContainerButton>
          </TextContainer>
          <Logo>
            <LogoImage src={doctorlogo} alt="" />
          </Logo>
        </HomeContainer>
        <Separator src={shape} alt="/" />
        <Section>
          <SectionTitle>Our Services</SectionTitle>
          <SectionHeading>
            <span>Services</span> We Provide
          </SectionHeading>
          <SectionText>
            We provide top-notch services that will give pleasant and
            satisfactory experiences to patients. Spring Homes provides services
            that will better help all physical and health challenges brought to
            us.
          </SectionText>

          <img src={wave} alt="/" />
          <AboutContainer>
            <AboutHeading>About the company</AboutHeading>
            <AboutText>
              <span>Everything we do </span> positively transform peoples life
            </AboutText>
          </AboutContainer>
        </Section>
        <Facility>
          <FacilityHeading>
            <span>Our </span> Facilities
          </FacilityHeading>
          <FacilityText>
            Spring Homes is fully with the best facilities needed by patients to
            meet their health and physical needs.
          </FacilityText>

          <FacilityContainer>
            <img src={facility1} alt="" />
            <img src={facility2} alt="" />
            <img src={facility3} alt="" />
          </FacilityContainer>

          <FooterSection>
            <SendIcon>
              <Plane />
            </SendIcon>
            <FooterText>
              Subscribe to get information, notifications, reminders and updates
              from Spring Home
            </FooterText>
            <FooterButton>
              <MailButton>
                <img src={maillogo} alt="" />
                <span>Your email</span>
              </MailButton>
              <SubButton>Subscribe</SubButton>
            </FooterButton>
          </FooterSection>
        </Facility>
        <Footer />
      </HomePageContainer>
    </>
  );
};
export default Home;
