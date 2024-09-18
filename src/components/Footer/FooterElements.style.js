import styled from 'styled-components';
import { Col } from 'react-bootstrap';
import { colors } from '../GlobalElements.style';

export const FooterContainer = styled.footer`
  background-color: ${colors.DarkBG};
  color: white;
  padding: 60px 0;
`;

export const Logo = styled.div`
  img {
    max-width: 100px;
  }
`;
export const Text = styled.p`
  color: #ffffff70;
`;
export const SocialIcons = styled.div`
  margin-top: 20px;
`;

export const SocialIcon = styled.span`
  font-size: 17px;
  margin-right: 20px;
  color: #ffffff;
  cursor: pointer;
  transition: color 0.3s;

  &:hover {
    color: ${colors.Lilac};
  }
`;

export const Copyright = styled.div`
  text-align: center;
  margin-top: 20px;
  color: #ffffff70;
`;
export const CompanyLinks = styled.div`
  color: #fff;

  h5 {
    font-size: 18px;
  }

  ul {
    list-style: none;
    padding: 0;
    margin: 0;
  }

  li {
    margin-bottom: 10px;
  }

  a {
    text-decoration: none;
    color: #ffffff70;
    &:hover {
      text-decoration: underline;
      color: #8da1ff;
      cursor: pointer;
    }
  }
`;

export const InformationLinks = styled.div`
  color: #ffffff;

  h5 {
    font-size: 18px;
  }

  ul {
    list-style: none;
    padding: 0;
    margin: 0;
  }

  li {
    margin-bottom: 10px;
  }

  a {
    text-decoration: none;
    color: #ffffff70;

    &:hover {
      text-decoration: underline;
      color: #8da1ff;
    }
  }
`;

export const ContactInfo = styled.div`
  color: #ffffff;

  h5 {
    font-size: 18px;
  }

  p {
    margin: 10px 0;
    display: flex;
    align-items: center;
    color: #ffffff70;

    &:hover {
      color: #8da1ff;
    }
  }
`;

export const ContactIcon = styled.span`
  font-size: 20px;
  margin-right: 10px;
  color: #ffffff70;

  &:hover {
    color: #8da1ff;
  }
`;
export const Divider = styled.hr`
  width: 87%;
  margin: 0 auto;
  border: 1px solid #ffffff70;
  margin-top: 20px;
  margin-bottom: 20px;
`;
// Media query for small screens (mobile)
const mobileMediaQuery = 'max-width: 768px';

export const ColWithPadding = styled(Col)`
  @media screen and (${mobileMediaQuery}) {
    padding: 15px;
  }
`;
