import styled from 'styled-components';
import image from '../../Images/footer.png';

export const HomePageContainer = styled.div`
  overflow: hidden;
  background-color: rgb(243, 248, 248);
`;
export const HomeContainer = styled.div`
  display: flex;
  justify-content: space-around;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;
export const TextContainer = styled.div`
  padding-top: 180px;
  margin-left: 30px;
  @media (max-width: 768px) {
    padding-top: 22px;
    margin-left: 16px;
  }
`;
export const Header = styled.h1`
  font-family: Poppins;
  font-weight: 500;
  font-size: 20px;
  line-height: 30px;
  color: #ffd21d;
  @media (max-width: 768px) {
    font-size: 14px;
  }
`;
export const Text1 = styled.p`
  text-transform: uppercase;
  font-family: Raleway;
  font-weight: 700;
  font-size: 50px;
  line-height: 58.7px;
  width: 100%;
  max-width: 703px;
  span {
    color: #8da1ff;
  }
  @media (max-width: 768px) {
    font-size: 22px;
    line-height: 25.83px;
    width: 100%;
    max-width: 320px;
  }
`;
export const Text2 = styled.p`
  font-family: Poppins;
  font-weight: 500;
  font-size: 18px;
  line-height: 27px;
  width: 100%;
  max-width: 674px;
  @media (max-width: 768px) {
    font-size: 12px;
    line-height: 18px;
    width: 100%;
    max-width: 343px;
    margin-top: 20px;
  }
`;
export const ContainerButton = styled.button`
  font-family: Poppins;
  font-size: 20px;
  font-weight: 600;
  line-height: 30px;
  color: #ffffff;
  background-color: #8da1ff;
  width: 248px;
  height: 67px;
  border-radius: 30px;
  border: none;
  @media (max-width: 768px) {
    font-size: 14px;
    line-height: 21px;
    width: 164px;
    height: 40px;
    border-radius: 20px;
  }
`;
export const Logo = styled.div`
  text-decoration: none;
`;
export const LogoImage = styled.img`
  width: 100%;
  max-width: 528px;
  @media (max-width: 768px) {
    padding: 35px;
  }
`;
export const Separator = styled.img`
  @media (max-width: 768px) {
    width: 428px;
    height: 81px;
  }
`;
export const Section = styled.div`
  text-transformation: none;
`;
export const SectionTitle = styled.h2`
  font-family: Poppins;
  font-weight: 500;
  font-size: 20px;
  line-height: 30px;
  color: #ffd21d;
  display: flex;
  justify-content: center;
`;
export const SectionHeading = styled.h2`
  font-family: Raleway;
  font-weight: 700;
  font-size: 40px;
  line-height: 47px;
  display: flex;
  justify-content: center;
  span {
    color: #8da1ff;
    margin-right: 6px;
  }
`;
export const SectionText = styled.p`
  font-family: Poppins;
  font-weight: 500;
  font-size: 18px;
  line-height: 27px;
  width: 100%;
  max-width: 880px;
  align-items: center;
  text-align: center;
  margin: 0 auto;
`;
export const ServicesContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  @media (max-width: 768px) {
    display: none;
  }
`;
export const Services = styled.div`
  width: 328px;
  height: 350px;
  text-align: center;
  border-radius: 10px;
  margin: 12px 30px;
  background-color: #ffffff;
  padding: 30px;
  box-shadow: 0px 3px 0px 0px #d7dcf5;
  cursor: pointer;
  &:hover {
    background-color: #8da1ff;
    color: #ffffff;
  }
`;
export const ServicesHeading = styled.h2`
  font-size: 22px;
  font-weight: 700;
  font-family: Raleway;
  line-height: 26px;
  margin-top: 20px;
`;
export const ServicesText = styled.p`
  font-family: poppins;
  font-weight: 500;
  font-size: 12px;
  line-height: 18px;
`;
export const ServicesButton = styled.button`
  background-color: #0a102c;
  border-radius: 50px;
  width: 70px;
  height: 70px;
`;
export const ServicesMobile = styled.div`
  display: none;
  @media (max-width: 768px) {
    display: block;
  }
`;
export const AboutContainer = styled.div`
  text-decoration: none;
`;
export const AboutHeading = styled.h1`
  font-family: poppins;
  font-weight: 700;
  font-size: 20px;
  line-height: 30px;
  text-transform: uppercase;
  color: #a7a5a5;
  display: flex;
  justify-content: center;
`;
export const AboutText = styled.p`
  font-family: Raleway;
  font-weight: 700;
  font-size: 40px;
  line-height: 50px;
  width: 100%;
  max-width: 848px;
  align-items: center;
  text-align: center;
  margin: 31px auto;
  span {
    color: #ffd21d;
  }
`;
export const AboutGallery = styled.div`
  display: flex;
  justify-content: space-around;
  @media (max-width: 768px) {
    display: none;
  }
`;
export const AboutMobile = styled.div`
  display: none;
  @media (max-width: 768px) {
    display: block;
  }
`;
export const About = styled.div`
  width: 410px;
  height: 603px;
  text-align: center;
  border-radius: 20px;
  background-color: #ffffff;
  padding: 30px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;
export const AboutBox = styled.div`
display: flex;
flex-direction: column;
gap: 27px;
}
`;
export const AboutHeading2 = styled.h1`
  font-size: 28px;
  font-weight: 700;
  font-family: Raleway;
  line-height: 33px;
`;
export const AboutText2 = styled.p`
  font-family: poppins;
  font-weight: 500;
  font-size: 18px;
  line-height: 27px;
`;
export const AboutButton = styled.button`
  width: 314px;
  height: 66px;
  border: 1px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  span {
    color: #8da1ff;
    font-weight: 600;
    font-family: Poppins;
    font-size: 23px;
    line-height: 34.5px;
  }
`;
export const Facility = styled.div`
  text-decoration: none;
`;
export const FacilityHeading = styled.h2`
  font-family: Raleway;
  font-weight: 700;
  font-size: 40px;
  line-height: 50px;
  display: flex;
  justify-content: center;
  margin-top: 153px;
  span {
    color: #8da1ff;
    margin-right: 6px;
  }
`;
export const FacilityText = styled.p`
  font-family: Poppins;
  font-weight: 500;
  font-size: 18px;
  line-height: 27px;
  width: 100%;
  max-width: 880px;
  align-items: center;
  text-align: center;
  margin: 0 auto;
`;
export const FacilityContainer = styled.div`
  margin-top: 30px;
  display: flex;
  justify-content: space-around;
  img {
    width: 400px;
    height: 466px;
  }
`;
export const FooterSection = styled.div`
  background-image: url(${image});
  width: 1158px;
  height: 529px;
  margin: 100px 0 30px 90px;
  position: relative;
`;
export const SendIcon = styled.div`
  position: absolute;
  right: 0;
  background-color: #0a102c;
  border-radius: 100%;
`;
export const FooterText = styled.p`
font-family: Raleway;
font-weight: 700;
font-size: 44px;
line-height: 62px;
color: #8DA1FF;
width: 100%;
max-width: 992px;
align-items: center;
text-align: center;
margin: 0 auto;
position: relative;
top: 110px;
}
`;
export const FooterButton = styled.div`
  display: flex;
  justify-content: space-around;
`;
export const MailButton = styled.button`
  width: 646px;
  height: 86px;
  border-radius: 20px;
  position: relative;
  top: 190px;
  left: 50px;
  background-color: #ffffff;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  text-align: center;
  border: 1px;
  img {
    margin: 0 20px;
  }
  span {
    color: #000000;
    font-weight: 600;
    font-size: 20px;
  }
`;
export const SubButton = styled.button`
  width: 210px;
  height: 86px;
  border-radius: 20px;
  position: relative;
  top: 190px;
  background-color: #8da1ff;
  border: 1px;
  color: #ffffff;
  font-size: 20px;
  font-family: Poppins;
  font-weight: 600;
`;
