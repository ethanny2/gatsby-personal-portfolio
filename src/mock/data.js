import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: ' Ethan Soo Hon | JavaScript Developer', // e.g: 'Name | Developer'
  lang: 'en', // e.g: en, es, fr, jp
  description:
    'Portfolio site showing the projects and experience of Ethan Soo Hon; a full stack JavaScript developer', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: `Hi 👋 I'm `,
  name: 'Ethan Soo Hon',
  subtitle: 'Full stack JavaScript software engineer',
  cta: 'About',
};

// ABOUT DATA
export const aboutData = {
  img: 'profile-pic2.png',
  paragraphOne: `My name is Ethan Soo Hon a software engineer with a Bachelor's in Computer Science from Binghamton University 🎓. 
  I work across the entire stack using JavaScript with a focus primarily on the front end 💻. I love learning new tools/technologies and imparting my knowledge unto others 📚.`,
  paragraphTwo: `For the past year and a half I have been working as an online tutor guiding numerous college students and over 15 bootcamp students through their web development classes/cirriculum going over topics such
    as React, Node, Express, authentication , Redux, Apollo, PostgreSQL, PHP and more👨‍🏫.`,
  paragraphThree: 'Currently seeking remote fullstack / frontend JavaScript opportunities!',
  resume: 'https://github.com/ethanny2', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'photogram.gif',
    title: 'Photogram',
    info: 'Instagram clone made with React, Tailwind CSS, Firebase/Firestore, Amazon S3 Bucket and tested with React Testing Library + Jest and Cypress.',
    info2:
      'The concept for this project was to go beyond the usual React demo applications that recreate the web app of some popular service such as Netflix, Airbnb, and Instagram etc... But without having any real functionality. Photogram aims to replicate most features found in the official Instagram web application while supplementing it with features/improvements that could be incorporated into the offical Instagram web application.',
    url: 'https://photogram.vercel.app',
    repo: 'https://github.com/ethanny2/photogram', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'project.jpg',
    title: '',
    info: '',
    info2: '',
    url: '',
    repo: 'https://github.com/cobidev/react-simplefolio', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'project.jpg',
    title: '',
    info: '',
    info2: '',
    url: '',
    repo: 'https://github.com/cobidev/react-simplefolio', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: '',
  btn: '',
  email: '',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'twitter',
      url: '',
    },
    {
      id: nanoid(),
      name: 'codepen',
      url: '',
    },
    {
      id: nanoid(),
      name: 'linkedin',
      url: '',
    },
    {
      id: nanoid(),
      name: 'github',
      url: '',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: true, // set to false to disable the GitHub stars/fork buttons
};
