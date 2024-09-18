import styled, { createGlobalStyle } from 'styled-components';

export const colors = {
  primary: '#FFFFFF',
  DarkBG: '#0A102C',
  OffWhite: '#FFFFFF70',
  Grey: '#D9D9D942',
  Black: '#000000',
  Lilac: '#8DA1FF',
  Orange: '#FFD21D'
};

export const GlobalStyle = createGlobalStyle`
  body {
    font-family: 'Poppins', sans-serif; 
  }
`;

export const LoadingIconStyle = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
`;
