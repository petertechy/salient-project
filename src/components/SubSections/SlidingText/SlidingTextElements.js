import styled, { keyframes } from 'styled-components';

export const slide = keyframes`
  0% {
    transform: translateX(0%); 
  }
  100% {
    transform: translateX(-50%); 
  }
`;

export const SlidingTextWrapper = styled.div`
display: flex;
align-items: center;
height: 35vh;
  overflow: hidden;
  background: white;
  border-top: 2px dotted lightgrey;
  border-bottom: 2px dotted lightgrey;
  `;
  
  export const SlidingTextContainer = styled.div`
  white-space: nowrap;
  // margin: 0 2em;
  display: flex;
  gap: 2em;
`;

export const SlidingText = styled.div`
  font-size: 9rem;
  color: #000;
  font-weight: 900;
  margin-bottom: 0; 

  & span {
    color: #f5900d; 
  }
`;

export const TextWrapper = styled.div`
  animation: ${slide} 15s infinite linear;
`;