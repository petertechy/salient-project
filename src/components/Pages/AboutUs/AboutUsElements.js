import styled from "styled-components";
import AboutImage from "../../Images/Rectangle 197.svg";
import LeftImage from "../../Images/Frame 157.svg";
import RightImage from "../../Images/Ellipse 53.svg";

export const AboutBody = styled.div`
  background: #d9d9d9;
`;

export const AboutFirstSection = styled.div`
  display: flex;
  height: 30vh;
  width: 100%; /* Ensure full width */
  position: relative; /* Allow positioning */
  background: #f0f0f0; /* Set the background color */
`;

export const LeftFirstSection = styled.div`
  width: 70%;
  background-color: #e0e0e0; /* Light grey background for the left section */
  clip-path: polygon(0% 0%, 75% 0%, 100% 50%, 75% 100%, 0% 100%);
  z-index: 1; /* Ensures this section stays on top */
`;

export const RightFirstSection = styled.div`
  width: 30%;
  background-color: #dcdcdc; /* Slightly darker grey for the right section */
  z-index: 0; /* Ensures the right section is underneath the left section's shape */
`;

export const Heading = styled.h1`
  font-size: 2rem;
  font-weight: bold;
  color: black;
`;

export const Breadcrumb = styled.p`
  font-size: 1rem;
  color: gray;
`;

export const SecondSection = styled.div`
  width: 80%;
  height: 50vh;
  background: url("${AboutImage}");
  background-size: cover;
  margin: auto;
`;

export const ThirdSection = styled.div`
  width: 100%;
  height: 100vh;
  background: white;
  padding: 70px 60px;
  display: flex;
`;

export const ThirdLeftSection = styled.div`
  width: 50%;
  background-size: cover;
  margin: auto;
`;

export const Image = styled.div`
  background: url("${LeftImage}");
  width: 500px;
  height: 500px;
  background-position: center;
  background-size: cover;
`;

export const ThirdRightSection = styled.div`
  width: 50%;
`;

export const SmallHeading = styled.p`
  font-size: 1rem;
  font-weight: thin;
  color: black;
`;

export const BigHeading = styled.h1`
  font-size: 2rem;
  font-weight: bold;
  color: black;
`;

export const BoldText = styled.p`
  font-size: 1rem;
  font-weight: bold;
  color: #f5900d;
`;

export const LightText = styled.p`
  font-size: 1rem;
  font-weight: thin;
  color: black;
`;

export const SmallContainer = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
`;

export const SmallContainerDot = styled.div`
  display: flex;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background: #f5900d;
`;

export const LeftSmallContainer = styled.div`
  width: 130px;
`;

export const RoundImage = styled.div`
  border: 2px solid;
  border-radius: 50%;
  background: url("${RightImage}");
  width: 100px;
  height: 100px;
  background-position: center;
  background-size: cover;
  color: #f5900d;
`;

export const RightSmallContainer = styled.div``;

export const NameText = styled.p`
  font-family: 'Montez', cursive;
  font-size: 42.82px;
  font-weight: 400;
  color: #f5900d;
  margin: 0;
  padding: 0;
`;

export const FounderText = styled.p`
  padding: 0;
  margin-top: -10px;
  font-family: 'Inter', sans-serif;
  font-size: 16.3px;
  font-weight: 300;
  color: #00000080;
`;
