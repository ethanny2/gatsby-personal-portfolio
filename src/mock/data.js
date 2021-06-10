import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'Ethan Soo Hon | JavaScript Developer', // e.g: 'Name | Developer'
  lang: 'en', // e.g: en, es, fr, jp
  description:
    'Portfolio site showing the projects and experience of Ethan Soo Hon; a full stack JavaScript developer', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: `Hi 👋 I'm `,
  name: 'Ethan Soo Hon',
  subtitle: 'Full Stack JavaScript Developer',
  cta: 'About',
};

// ABOUT DATA
export const aboutData = {
  img: 'profile-pic2.png',
  paragraphOne: `My name is Ethan Soo Hon a software engineer with a Bachelor's in Computer Science from The Thomas J. Watson School of Engineering🎓. 
  I work across the entire stack using JavaScript with a focus primarily on the front end 💻. I love learning new tools/technologies and imparting my knowledge unto others 📚.`,
  paragraphTwo: `For the past year and a half I have been working as an online tutor guiding numerous college students and over 15 bootcamp students through their web development classes/cirriculum going over topics such
    as React, Node, Express, authentication , Redux, Apollo, PostgreSQL, PHP and more👨‍🏫.`,
  paragraphThree: 'Currently seeking remote fullstack / frontend JavaScript opportunities!',
  resume: 'https://drive.google.com/file/d/1_Y0HUHPCCRNH4X_JBQaNBB_ChFfoipqS/view?usp=sharing', // if no resume, the button will not show up
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
    repo: 'https://github.com/ethanny2/photogram', // if no repo, the button will not show up,
    logos: ['react', 'tailwind', 'firebase', 'amazon-s3', 'vercel'],
    credentials: 'Email: demo@gmail.com , Password: demo1234',
  },
  {
    id: nanoid(),
    img: 'streetwares.gif',
    title: '100 Streetwares',
    info: 'Ecommerce streetwear store made using Next.js, TypeScript, Tailwind CSS, Framer motion and headless Shopify via the storefront API.',
    info2:
      'The goal of this project was to gain insight on how to connect an ecommerce storefront with a CMS backend that could easily be handed off to a client. I eventually chose Next.js for its strong ecommerce facing templates and ended up using headless Shopify as the backend (as opposed to Sanity CMS or Bigcommerce).',
    url: 'https://100streetwares.vercel.app/',
    repo: 'https://github.com/ethanny2/streetwares-v2', // if no repo, the button will not show up
    logos: ['react', 'tailwind', 'next-js', 'typescript', 'vercel', 'shopify'],
    credentials: '',
  },
  {
    id: nanoid(),
    img: 'gamerandomizer.gif',
    title: 'Video Game Randomizer',
    info: 'Video game site made using Webpack 5, SCSS, and the LAMP stack. REST API made with PHP Silex. The concept for this site was to give video game players/fans the ability to programatically search/filter through a comprehensive game database.',
    info2:
      'The mysql database powering the site was built by compiling information through multiple video game data APIs (Giant Bomb , IGBD) and web scraping (How long to beat, MetaCritic). In addition, unlike similar sites/ APIs this includes nearly all released video games from around 1980 - 2015.',
    url: 'https://game-randomizer.netlify.app/',
    repo: 'https://github.com/ethanny2/video-game-randomizer', // if no repo, the button will not show up
    logos: ['javascript', 'sass', 'php', 'mysql', 'jquery', 'webpack', 'xampp', 'heroku'],
    credentials: '',
  },
  {
    id: nanoid(),
    img: 'threejsboilerplate.gif',
    title: 'Threejs Webpack Boilerplate',
    info: 'A starter repo for using Threejs with webpack 4 featuring extensive documentation. Configured for best practices such as code splitting, cache bursting, 3D model draco optimization and more.',
    info2:
      'This project was created to provide a good starting point for learners who are new to webpack, JavaScript bundlers, and three.js. I wanted to create an optimal development and production environment that was simple to understand and hassle-free to set up for experts and novices alike.',
    url: 'https://threejs-webpack-boilerplate.netlify.app/',
    repo: 'https://github.com/ethanny2/threejs-es6-webpack-barebones-boilerplate', // if no repo, the button will not show up
    logos: ['javascript', 'sass', 'webpack', 'netlify'],
    credentials: '',
  },
  {
    id: nanoid(),
    img: 'elseif.gif',
    title: 'Else If Clothing',
    info: 'An ecommerce store made entirely client side with Stripe checkout, webpack 5 optimizations, SCSS and Threejs.',
    info2:
      'The original concept for the site was to sell clothing for my short-lived clothing brand "else-if" clothing. The site was originally hosted on Big Cartel and was made using their custom platform which abstracted the product backend and gave developers a nice interface to interact with the backend through templating and ruby + Coffeescript.',
    url: 'https://elseifclothing.netlify.app/',
    repo: 'https://github.com/ethanny2/cyberpunk-ecommerce-frontend', // if no repo, the button will not show up
    logos: ['javascript', 'sass', 'stripe', 'jquery', 'webpack', 'netlify'],
    credentials:
      'Test Card Number: 4242 4242 4242 4242 , any CVC , any region , any expiration , any email',
  },
  {
    id: nanoid(),
    img: 'fansite.gif',
    title: 'Fansite for Artist (Unofficial Playboi Carti)',
    info: 'An informational fansite made with PHP scraping, Soundcloud & Youtube iframes, Bootstrap, SCSS, Masonry.js , and webpack 5 for optimizations.',
    info2: `The original concept for the site, as instructed by a client, was to make a site for them to promote their music. Later that agreement fell through but since I had already made the site I just replaced the subject matter with a trending artist at the time.
            This site is meant to have an old-school grungy aesthetic with the use of a non-traditional background , animated transparent gifs and other florishes. Similar to the website style of the popular fasion brand AWGE.`,
    url: 'https://unofficial-playboicarti.netlify.app/',
    repo: 'https://github.com/ethanny2/retro-fansite-update', // if no repo, the button will not show up
    logos: ['javascript', 'soundcloud', 'sass', 'php', 'jquery', 'webpack', 'heroku', 'netlify'],
    credentials: '',
  },
  {
    id: nanoid(),
    img: 'scrabble.gif',
    title: 'JAM Stack Scrabble Lite Game',
    info: 'A JAM Stack application made using Netlify serverless functions, SCSS + CSS custom properties, and webpack 4.',
    info2: `The original concept for this app was created for the November 2020 Thanksgiving week Codepen Challenge; the task was to create a Codepen celebrating the game of Scrabble.
    To challenge myself and gain a deeper understanding of CSS Custom Properties and JavaScript animation events I decided create this app using 0 dependencies or animation libraries.
    Since the "back-end" portion of the application is just a single route/function verifying the word is real I opted to use Netlify serverless functions to make it a JAM stack application.`,
    url: 'https://word-scramble.netlify.app/',
    repo: 'https://github.com/ethanny2/codePenScrabbleChallenge', // if no repo, the button will not show up
    logos: ['javascript', 'sass', 'webpack', 'netlify', 'nodejs'],
    credentials: '',
  },
];

// CONTACT DATA
export const contactData = {
  cta: 'Want to work with me?',
  btn: `Let's chat`,
  email: 'ethanny2@gmail.com',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'twitter',
      url: 'https://twitter.com/ArrayLikeObj',
    },
    {
      id: nanoid(),
      name: 'codepen',
      url: 'https://codepen.io/ethanny2',
    },
    {
      id: nanoid(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/ethansoohon/',
    },
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/ethanny2',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: false, // set to false to disable the GitHub stars/fork buttons
};
