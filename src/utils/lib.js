/* eslint-disable */
import { FaArrowRight } from 'react-icons/fa';
import { Rings } from 'react-loading-icons';

import ellipseLive from '../components/Images/Ellipse 4.svg';
import ellipseEnd from '../components/Images/Ellipse 5.svg';
import ellipseService from '../components/Images/Ellipse 6.svg';
import ellipseLearning from '../components/Images/Ellipse 1.svg';
import ellipseMaternity from '../components/Images/Ellipse 2.svg';
import ellipseDementia from '../components/Images/Ellipse 3.svg';
import { LoadingIconStyle } from '../components/GlobalElements.style';

export const FlexItem = [
  {
    image: ellipseLive,
    // title: 'Live-in Care',
    subTitle:
      'Worem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. ',
    icon: (
      <FaArrowRight
        size={60}
        style={{
          color: '#FFFFFF',
          marginTop: '5px',
          backgroundColor: '#0A102C',
          padding: '15px',
          borderRadius: '50%'
        }}
      />
    ),
    href: 'services/livein-care'
  },

  {
    image: ellipseEnd,
    // title: 'End of life Care',
    subTitle:
      'Worem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. ',
    icon: (
      <FaArrowRight
        size={60}
        style={{
          color: '#FFFFFF',
          marginTop: '5px',
          backgroundColor: '#0A102C',
          padding: '15px',
          borderRadius: '50%'
        }}
      />
    ),
    href: '/services/end-of-life-care'
  },

  {
    image: ellipseService,
    // title: 'Rehabilitation Services',
    subTitle:
      'Worem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. ',
    icon: (
      <FaArrowRight
        size={60}
        style={{
          color: '#FFFFFF',
          marginTop: '5px',
          backgroundColor: '#0A102C',
          padding: '15px',
          borderRadius: '50%'
        }}
      />
    ),
    href: '/services/rehabilitation-services'
  },

  {
    image: ellipseLearning,
    // title: 'Learning Disabilities Care',
    subTitle:
      'Worem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. ',
    icon: (
      <FaArrowRight
        size={60}
        style={{
          color: '#FFFFFF',
          marginTop: '5px',
          backgroundColor: '#0A102C',
          padding: '15px',
          borderRadius: '50%'
        }}
      />
    ),
    href: '/services/learning-disabilities-care'
  },
  {
    image: ellipseMaternity,
    // title: 'Maternity Care',
    subTitle:
      'Worem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. ',
    icon: (
      <FaArrowRight
        size={60}
        style={{
          color: '#FFFFFF',
          marginTop: '5px',
          backgroundColor: '#0A102C',
          padding: '15px',
          borderRadius: '50%'
        }}
      />
    ),
    href: '/services/maternity-care'
  },
  {
    image: ellipseDementia,
    // title: 'Dementia Care',
    subTitle:
      'Worem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. ',
    icon: (
      <FaArrowRight
        size={60}
        style={{
          color: '#FFFFFF',
          marginTop: '5px',
          backgroundColor: '#0A102C',
          padding: '15px',
          borderRadius: '50%'
        }}
      />
    ),
    href: '/services/dementia-care'
  }
];

export const loadingIcon = () => (
  <LoadingIconStyle>
    <span>{'Loading'}</span>
    <Rings stroke="#8DA1FF" strokeOpacity={1} height={40} />
    <Rings stroke="#8DA1FF" strokeOpacity={1} height={40} />
    <Rings stroke="#8DA1FF" strokeOpacity={1} height={40} />
  </LoadingIconStyle>
);
