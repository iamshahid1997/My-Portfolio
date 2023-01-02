import portfolio from '../assets/portfolio.png';
import portfolio1 from '../assets/portfolio1.png';
import apple from '../assets/apple.png';
import fb from '../assets/fb.png';
import chatbot from '../assets/chatbot.png';

export const data = [
  {
    id: 1,
    heading: 'SHAHID ANSARI',
    subHeading: 'I AM',
    text: 'Welcome to my website. Here you can find out everthing related to my professional life and skills.',
    swatchColor: '#E6D3C4',
    background: '#E5E5E5',
    headingColor: '#1F333E',
    buttonColor: { text: '#000', background: '#D7B172' },
  },
  {
    id: 2,
    heading: 'SOFTWARE ENGINEER',
    subHeading: 'WORKS AT CLAIMTHERAPIST AS',
    text: 'A front-end developer proficient in NextJS,GSAP and Three JS with 1.5 years of experience.',
    swatchColor: '#4F92B1',
    background: '#C1D6E3',
    headingColor: '#1F333E',
    buttonColor: { text: '#fff', background: '#2f7393' },
  },
];

export const projectData = [
  {
    id: 1,
    image: portfolio1,
    title: 'Portfolio Website using Three js and GSAP',
    description: 'Showcasing my projects and designing skills.',
    github_link: 'https://github.com/iamshahid1997/My-Portfolio',
    website: 'https://shahidportfolioo.netlify.app/',
    swatchColor: '#E6D3D9',
  },
  {
    id: 2,
    image: portfolio,
    title: 'Portfolio Website using Material UI',
    description: 'Showcase my skills and projects.',
    github_link: 'https://github.com/iamshahid1997/Portfolio-Website',
    website: 'https://shahid-ansari-portfolio.netlify.app/',
    swatchColor: '#E6D3C4',
  },
  {
    id: 3,
    image: apple,
    title: 'Apple Redesign',
    description:
      'Apple webiste redisgned using Next js, TypeScript and Sanity Studio and Stripe for making payments',
    github_link: 'https://github.com/iamshahid1997/AppleRedesign',
    website: 'https://apple-resdesign.vercel.app/',
    swatchColor: '#79716C',
  },
  {
    id: 4,
    image: fb,
    title: 'FaceBook Clone',
    description:
      'Facebook webiste using Tailwind css with timeline and profile pages.',
    github_link: 'https://github.com/iamshahid1997/Portfolio-Website',
    website: 'https://socialfbclone.netlify.app',
    swatchColor: '#4F92B1',
  },
  {
    id: 5,
    image: chatbot,
    title: 'ChatBot',
    description: 'Chatbot UI with predefined responses.',
    github_link: 'https://github.com/iamshahid1997/ChatBot',
    website: 'https://yourchatbot.netlify.app',
    swatchColor: '#4E92C2',
  },
];
