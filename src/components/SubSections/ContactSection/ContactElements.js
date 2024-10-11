// ContactElements.js
import styled from 'styled-components';
import { FaArrowRight } from 'react-icons/fa';

export const SectionContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 40px 0;
`;

export const CirclesContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
`;

export const GreyCircle = styled.div`
  width: 80px;
  height: 80px;
  border-radius: 50%;
  background-color: #d8d8d8;
  position: absolute;
  left: -20px;
  z-index: 1;
`;

export const OrangeCircle = styled.div`
  width: 80px;
  height: 80px;
  border-radius: 50%;
  background-color: #f0a500;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 2;
  position: relative;
`;

export const ArrowIcon = styled(FaArrowRight)`
  color: #fff;
  font-size: 24px;
`;

export const TextContainer = styled.div`
  margin-top: 20px;
  text-align: center;

  h3 {
    font-size: 20px;
    font-weight: bold;
    color: #333;
  }

  p {
    font-size: 16px;
    color: #333;
    margin: 0;
  }
`;
