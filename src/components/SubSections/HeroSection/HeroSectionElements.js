import styled from "styled-components";

// Container for the entire hero section
export const HeroContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 50px;
  background-color: #f5f5f5;
  height: 100vh;
  max-width: 100vw;
  @media (max-width: 768px) {
    flex-direction: column;
    height: auto;
  }
`;

// Left section for text content
export const LeftSection = styled.div`
  flex: 1.5;
  padding-right: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

// Right section for the images
export const RightSection = styled.div`
  flex: 2;
  display: flex;
  justify-content: center;
  align-items: center;
`;

// Main heading styles (e.g., "Think.")
export const MainHeading = styled.h1`
  font-size: 4rem;
  font-weight: bold;
  color: #000;
  margin: 0;
  line-height: 1.2;

  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
`;

// Subheading styles (e.g., "Create." and "Solution.")
export const SubHeading = styled.h2`
  font-size: 3rem;
  font-weight: ${(props) => (props.bold ? "bold" : "normal")};
  color: ${(props) => (props.bold ? "#000" : "#999")};
  margin: 10px 0;

  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

// Wrapper for the button (e.g., "Discover More")
export const StyledButton = styled.button`
  margin-top: 20px;
  padding: 10px 20px;
  background-color: #f0a500;
  color: #fff;
  border: none;
  border-radius: 25px;
  font-size: 1.2rem;
  cursor: pointer;

  &:hover {
    background-color: #d48b00;
  }
`;

// Contact information (e.g., "+234 802 000 0000")
export const ContactInfo = styled.p`
  margin-top: 20px;
  font-size: 1.1rem;
  color: #000;
`;

// Wrapper for images
export const ImageWrapper = styled.div`
  display: flex;
  flex-direction: row;
  gap: 20px;

  img:first-child {
    width: 100%; 
    max-width: 300px;
    object-fit: cover;
    border-radius: 8px;
  }

  img:last-child {
    width: 100%;
    max-width: unset; /* Allow it to stretch fully */
    object-fit: cover;
    border-radius: 8px;
    flex-grow: 1; /* Let the second image grow to the edge */
  }

  @media (max-width: 768px) {
    flex-direction: column;

    img:first-child, img:last-child {
      max-width: 100%;
    }
  }
`;
