import styled from 'styled-components';

export const FooterContainer = styled.footer`
  background-color: #f8f9fa;
  padding: 40px 0;
`;

export const FooterTop = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 20px 0;
`;

export const FooterBottom = styled.div`
  background-color: #000;
  color: #fff;
  text-align: center;
  padding: 20px 0;
  font-size: 14px;

  p {
    margin: 0;
  }

  ul {
    display: inline-block;
    padding: 0;
    margin: 10px 0 0;
    list-style-type: none;

    li {
      display: inline;
      margin: 0 15px;
      a {
        color: #f0a500;
        text-decoration: none;
        &:hover {
          color: #fff;
        }
      }
    }
  }
`;

export const Column = styled.div`
  flex: 1;
  margin: 0 20px;

  h4 {
    color: #000;
    font-weight: bold;
    margin-bottom: 10px;
  }

  ul {
    list-style: none;
    padding: 0;
  }

  li {
    margin-bottom: 8px;
    color: #333;
  }

  a {
    color: #333;
    text-decoration: none;
    &:hover {
      color: #f0a500;
    }
  }
`;

export const FooterText = styled.p`
  color: #333;
  font-size: 16px;
  margin-bottom: 15px;
  a {
    text-decoration: none;
    color: #f0a500;
    font-weight: bold;
    &:hover {
      color: #333;
    }
  }
`;

export const SocialIcons = styled.div`
  display: flex;
  gap: 15px;
  margin-top: 15px;
  a {
    color: #333;
    font-size: 20px;
    &:hover {
      color: #f0a500;
    }
  }
`;

// Brand Section
export const BrandSection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding-right: 50px;
`;

export const FooterLogo = styled.h1`
  font-size: 48px;
  color: #333;
  margin-bottom: 15px;
  font-weight: bold;
`;
