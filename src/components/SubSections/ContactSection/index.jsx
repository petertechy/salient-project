// Contact.jsx
import React from 'react';
import {
  SectionContainer,
  CirclesContainer,
  GreyCircle,
  OrangeCircle,
  ArrowIcon,
  TextContainer
} from './ContactElements';

const Contact = () => {
  return (
    <SectionContainer>
      <CirclesContainer>
        <GreyCircle />
        <OrangeCircle>
          <ArrowIcon />
        </OrangeCircle>
      </CirclesContainer>
      <TextContainer>
        <h3>Have any projects in mind?</h3>
        <p>Get in touch with us!</p>
      </TextContainer>
    </SectionContainer>
  );
};

export default Contact;
