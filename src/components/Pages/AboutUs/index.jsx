import React from 'react'
import { AboutBody, AboutFirstSection, Breadcrumb, Heading, LeftFirstSection, RightFirstSection, SecondSection, ThirdLeftSection, ThirdRightSection, ThirdSection, Image, SmallContainerDot,SmallHeading, BigHeading, BoldText, LightText, SmallContainer, LeftSmallContainer, RightSmallContainer, NameText, FounderText, RoundImage } from './AboutUsElements'
import NavigationBar from '../../Navbar'
import Footer from '../../Footer'
import SlidingTextComponent from '../../SubSections/SlidingText'

const AboutUs = () => {
  return (
    <>
    <NavigationBar/>
    <AboutBody>
    <AboutFirstSection>
        <LeftFirstSection>
            <Heading>About</Heading>
            <Breadcrumb>Home.About</Breadcrumb>
        </LeftFirstSection>
        <RightFirstSection/>
    </AboutFirstSection>
    <SecondSection/>
    <ThirdSection>
      <ThirdLeftSection>
        <Image/>
      </ThirdLeftSection>
      <ThirdRightSection>
        <SmallContainerDot/>
        <SmallHeading>
        ABOUT THE AGENCY
        </SmallHeading>
        <BigHeading>
        Get to know about our agency
        </BigHeading>
        <BoldText>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus dolores delectus quam illum pariatur rem.
        </BoldText>
        <LightText>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Praesentium, blanditiis, magni architecto cum eligendi nesciunt reprehenderit atque officiis repellat, vel iste obcaecati non dolorum nulla totam dolore doloremque repudiandae. Doloribus!
        </LightText>

        <SmallContainer>
          <LeftSmallContainer>
            <RoundImage></RoundImage>
          </LeftSmallContainer>
          <RightSmallContainer>
            <NameText>
            Matthew Haven
            </NameText>
            <FounderText>
              Founder
            </FounderText>
          </RightSmallContainer>
        </SmallContainer>
      </ThirdRightSection>
    </ThirdSection>

    <SlidingTextComponent/>
    </AboutBody>
    <Footer/>
    </>
  )
}

export default AboutUs