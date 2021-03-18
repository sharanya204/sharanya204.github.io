import uuidv1 from 'uuid/v1';

// HEAD DATA
export const headData = {
  title: 'Sharanya Soundararajan  |  Portfolio',
  lang: 'en', // e.g: en, es, fr, jp
  description: "Sharanya's corner of the web",
};

// HERO DATA
export const heroData = {
  title: "Hiya, I'm Sharanya --",
  name: 'Sharanya Soundararajan',
  subtitle: 'UX engineer  |  Builder of things',
  intro:
    "I have a background in visual communication and user experience design, and I'm passionate about engineering engaging experiences using a variety of media, frequently combining art and code. \n I'm currently part of a team working on developer experience at Autodesk.",
};

// ABOUT DATA
export const aboutData = {
  img: 'Sharanya_mugshot.jpg',
  paragraphOne: '',
  paragraphTwo: '',
  paragraphThree: '',
  resume: '', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: uuidv1(),
    img: '01-malloci.png',
    title: 'Malloci',
    info: 'Capstone project for grad school increasing the accessibility of VR',
    info2: '',
    url: 'https://mallocivr.github.io',
    repo: 'https://github.com/mallocivr/mallocivr.github.io', // if no repo, the button will not show up
  },
  {
    id: uuidv1(),
    img: '02-sos.png',
    title: 'Save Our Species',
    info:
      'A collaborative curation of infographics illustrating the dire straits of endangered species at the hands of humans',
    info2: '',
    url: 'https://sharanya204.github.io/sos/',
    repo: 'https://github.com/sharanya204/sos/', // if no repo, the button will not show up
  },
  {
    id: uuidv1(),
    img: 'project.jpg',
    title: 'AR Memory',
    info: '',
    info2: '',
    url: '',
    repo: 'https://github.com/cobidev/react-simplefolio', // if no repo, the button will not show up
  },
  {
    id: uuidv1(),
    img: 'project.jpg',
    title: 'Android Auto',
    info: '',
    info2: '',
    url: '',
    repo: 'https://github.com/cobidev/react-simplefolio', // if no repo, the button will not show up
  },
  {
    id: uuidv1(),
    img: 'project.jpg',
    title: 'Geodesic Dome',
    info: '',
    info2: '',
    url: '',
    repo: 'https://github.com/cobidev/react-simplefolio', // if no repo, the button will not show up
  },
];

// WORK EXP DATA
export const workexData = [
  {
    id: uuidv1(),
    img: 'project.jpg',
    title: 'Autodesk',
    info: '',
    info2: '',
    url: '',
    repo: 'https://github.com/cobidev/react-simplefolio', // if no repo, the button will not show up
  },
  {
    id: uuidv1(),
    img: 'project.jpg',
    title: 'Tata Elxsi',
    info: '',
    info2: '',
    url: '',
    repo: 'https://github.com/cobidev/react-simplefolio', // if no repo, the button will not show up
  },
  {
    id: uuidv1(),
    img: 'project.jpg',
    title: 'Mercedes Benz',
    info: '',
    info2: '',
    url: '',
    repo: 'https://github.com/cobidev/react-simplefolio', // if no repo, the button will not show up
  },
];

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: uuidv1(),
      name: 'codepen',
      url: '',
    },
    {
      id: uuidv1(),
      name: 'linkedin',
      url: '',
    },
    {
      id: uuidv1(),
      name: 'github',
      url: '',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: false, // set to false to disable the GitHub stars/fork buttons
};
