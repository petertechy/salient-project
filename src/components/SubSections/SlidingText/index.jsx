import React from 'react';
import { SlidingText, SlidingTextWrapper, SlidingTextContainer,TextWrapper } from './SlidingTextElements';

const SlidingTextComponent = () => {
    return (
      <SlidingTextWrapper>
        <SlidingTextContainer>
          <TextWrapper>
            <SlidingText>Our satisfied <span>&</span> happy clients</SlidingText>
          </TextWrapper>
          <TextWrapper>
            <SlidingText>Our satisfied <span>&</span> happy clients</SlidingText>
          </TextWrapper>
        </SlidingTextContainer>
      </SlidingTextWrapper>
    );
  };
  
  export default SlidingTextComponent;
