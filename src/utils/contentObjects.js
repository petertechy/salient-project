/* eslint-disable */
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaMapMarkerAlt,
  FaEnvelope,
  FaLinkedinIn
} from 'react-icons/fa';

import Blog1 from '../components/Images/blog1.jpeg';
import Blog2 from '../components/Images/blog2.jpeg';
import Blog3 from '../components/Images/blog3.jpeg';
import Blog4 from '../components/Images/blog4.jpeg';
import msdoe from '../components/Images/mrsdoe.png';
import msjane from '../components/Images/mrsjane.png';
import mrjane from '../components/Images/mrjane.png';

export const ourCompanyObject = [
  { header: 'About', href: '/about' },
  { header: 'Our Services', href: '/services' },
  { header: 'Blog', href: '/blog' },
  { header: 'Donations', href: '/donations' },
  { header: 'Packages', href: '/packages' }
];

export const socialIconsObject = [
  { icon: <FaFacebookF />, href: '#' },
  { icon: <FaTwitter />, href: '#' },
  { icon: <FaInstagram />, href: '#' },
  { icon: <FaLinkedinIn />, href: '#' }
];

export const informationObject = [
  { header: 'Help', href: '/contact' },
  { header: 'FAQs', href: '/faqs' },
  { header: 'Terms and Conditions', href: '/terms-and-policy' },
  { header: 'Privacy Policy', href: '/privacy-policy' }
];

export const contactObject = [
  { icon: <FaMapMarkerAlt />, header: '1234 Elm Street Your City, ST 12345' },
  { icon: <FaEnvelope />, header: 'Email: contact@springhomes.com' },
  { icon: <FaMapMarkerAlt />, header: 'Phone: +1 (123) 456-7890' }
];

export const headerObject = {
  mainHeader: 'We care for your health and wellbeing as much as you do!',
  ourCompany: 'Our Company',
  information: 'Information',
  contactUs: 'Contact Us',
  copyRight: 'Copyright Sprig Home 2023, All rights reserved'
};

export const faqData = [
  {
    id: 1,
    question: 'What does Spring Homes do?',
    dateCreated: 'April 22, 2024',
    answer:
      'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deserunt odio fuga id vitae, ipsum, inventore, exercitationem numquam culpa corporis harum quidem libero nesciunt blanditiis reiciendis ut voluptatibus esse alias! Modi?'
  },
  {
    id: 2,
    question: 'What services does Spring Homes provide?',
    dateCreated: 'April 23, 2024',
    answer:
      'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deserunt odio fuga id vitae, ipsum, inventore, exercitationem numquam culpa corporis harum quidem libero nesciunt blanditiis reiciendis ut voluptatibus esse alias! Modi?'
  },
  {
    id: 3,
    question: 'How do i get started?',
    dateCreated: 'April 22, 2024',
    answer:
      'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deserunt odio fuga id vitae, ipsum, inventore, exercitationem numquam culpa corporis harum quidem libero nesciunt blanditiis reiciendis ut voluptatibus esse alias! Modi?'
  },
  {
    id: 4,
    question: 'How much do the services cost?',
    dateCreated: 'April 23, 2024',
    answer:
      'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deserunt odio fuga id vitae, ipsum, inventore, exercitationem numquam culpa corporis harum quidem libero nesciunt blanditiis reiciendis ut voluptatibus esse alias! Modi?'
  },
  {
    id: 5,
    question: 'Where is Spring Homes located?',
    dateCreated: 'April 22, 2024',
    answer:
      'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deserunt odio fuga id vitae, ipsum, inventore, exercitationem numquam culpa corporis harum quidem libero nesciunt blanditiis reiciendis ut voluptatibus esse alias! Modi?'
  },
  {
    id: 6,
    question: 'Can I change my packages if I want to?',
    dateCreated: 'April 23, 2024',
    answer:
      'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deserunt odio fuga id vitae, ipsum, inventore, exercitationem numquam culpa corporis harum quidem libero nesciunt blanditiis reiciendis ut voluptatibus esse alias! Modi?'
  },
  {
    id: 7,
    question: 'Can I create account for Dependant?',
    dateCreated: 'April 22, 2024',
    answer:
      'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deserunt odio fuga id vitae, ipsum, inventore, exercitationem numquam culpa corporis harum quidem libero nesciunt blanditiis reiciendis ut voluptatibus esse alias! Modi?'
  },
  {
    id: 8,
    question: 'How do I make payment?',
    dateCreated: 'April 23, 2024',
    answer:
      'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deserunt odio fuga id vitae, ipsum, inventore, exercitationem numquam culpa corporis harum quidem libero nesciunt blanditiis reiciendis ut voluptatibus esse alias! Modi?'
  }
];

export const JobData = [
  {
    dateOpened: '2024-04-01',
    jobType: 'Full-time',
    jobTitle: 'Software Engineer',
    city: 'New York',
    salary: '$14.00 Per hour'
  },
  {
    dateOpened: '2024-04-02',
    jobType: 'Part-time',
    jobTitle: 'Graphic Designer',
    city: 'Los Angeles',
    salary: '$15.00 Per hour'
  },
  {
    dateOpened: '2024-04-03',
    jobType: 'Full-time',
    jobTitle: 'Marketing Manager',
    city: 'Chicago',
    salary: '$22.00 Per hour'
  },
  {
    dateOpened: '2024-04-04',
    jobType: 'Internship',
    jobTitle: 'Data Analyst',
    city: 'San Francisco',
    salary: '$60.00 Per hour'
  },
  {
    dateOpened: '2024-04-05',
    jobType: 'Contract',
    jobTitle: 'Web Developer',
    city: 'Seattle',
    salary: '$30.00 Per hour'
  },
  {
    dateOpened: '2024-04-06',
    jobType: 'Full-time',
    jobTitle: 'Accountant',
    city: 'Boston',
    salary: '$70.00 Per hour'
  },
  {
    dateOpened: '2024-04-07',
    jobType: 'Part-time',
    jobTitle: 'Customer Service Representative',
    city: 'Dallas',
    salary: '$37.00 Per hour'
  },
  {
    dateOpened: '2024-04-08',
    jobType: 'Full-time',
    jobTitle: 'HR Manager',
    city: 'Atlanta',
    salary: '$20.00 Per hour'
  },
  {
    dateOpened: '2024-04-09',
    jobType: 'Internship',
    jobTitle: 'Business Analyst',
    city: 'Houston',
    salary: '$44.00 Per hour'
  },
  {
    dateOpened: '2024-04-10',
    jobType: 'Contract',
    jobTitle: 'UI/UX Designer',
    city: 'Miami',
    salary: '$34.00 Per hour'
  }
];
export const formGroupObject = [
  {
    className: 'form-label pt-4',
    label: 'Enter Email',
    placeholder: 'email',
    type: 'email',
    id: 'email',
    name: 'email'
  },
  {
    className: 'form-label pt-3',
    label: 'Enter Password',
    placeholder: 'password',
    type: 'password',
    id: 'password',
    name: 'password'
  }
];

export const blogPosts = [
  {
    id: 1,
    title: '5 ways to treat high blood pressure at home',
    date: '20-19-2024',
    content:
      'Horem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.',
    image: Blog1
  },
  {
    id: 2,
    title: 'The benefits of regular exercise',
    date: '21-19-2024',
    content:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum auctor dui vitae tellus dapibus, nec vestibulum quam sollicitudin. Vivamus elementum magna in facilisis gravida.',
    image: Blog2
  },
  {
    id: 3,
    title: 'The benefits of regular exercise',
    date: '21-19-2024',
    content:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum auctor dui vitae tellus dapibus, nec vestibulum quam sollicitudin. Vivamus elementum magna in facilisis gravida.',
    image: Blog3
  },
  {
    id: 4,
    title: 'Healthy eating habits for a better life',
    date: '22-19-2024',
    content:
      'Nulla facilisi. Duis et erat fermentum, fermentum libero sed, suscipit nunc. Quisque varius sapien quis dui ultrices, nec varius dui blandit. Sed mattis est nec velit convallis, et posuere purus faucibus.',
    image: Blog4
  }
];

export const navMenu = [
  { label: 'Home', link: '/' },
  { label: 'About', link: '/about' },
  { label: 'Our Services', link: '/services' },
  { label: 'Donation', link: '/donation' },
  { label: 'Jobs and Careers', link: '/careers' },
  { label: 'Contact', link: '/contact' }
];


export const profileOverview = [
  { label: 'Gender', name: 'gender', indentfier: true, type: 'text' },
  { label: 'Date of Birth', name: 'dateOfBirth', indentfier: true, type: 'date' },
  { label: 'Next of Kin', name: 'nextOfKinName', type: 'text' },
  { label: 'Next of Kin Email', name: 'nextOfKinEmail', type: 'email' },
  { label: 'Next of Kin Number', name: 'nextOfKinNumber', type: 'number' },
  { label: 'Relationship', name: 'relationship', type: 'text' }
  // { label: 'Previous Visit', name: 'previousVisit' },
  // { label: 'Next Visit', name: 'nextVisit' }
];

export const patientDetails = [
  { gender: 'Female', name: 'Jane Doe', image: msjane },
  { gender: 'Female', name: 'Dolly Bill', image: msdoe },
  { gender: 'Male', name: 'Jack Bob', image: mrjane }
];

export const changePasswordDefinition = [
  { placeholder: 'Enter Code', name: 'code', type: 'text' },
  { placeholder: 'Enter new password', name: 'password', type: 'password' },
  { placeholder: 'Confirm new password', name: 'confirmPassword', type: 'password' }
];
