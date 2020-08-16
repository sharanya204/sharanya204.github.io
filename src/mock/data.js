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
    "I have a background in visual communication and user experience design, and I'm passionate about engineering engaging experiences using a variety of media, frequently combining art and code. \n I currently work as an engineer focusing on developer experience at Autodesk.",
  cta: 'About me',
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
    img: 'project.jpg',
    title: 'Malloci',
    info: '',
    info2: '',
    url: 'https://mallocivr.github.io',
    repo: 'https://github.com/mallocivr/mallocivr.github.io', // if no repo, the button will not show up
  },
  {
    id: uuidv1(),
    img: 'project.jpg',
    title: 'Save Our Species',
    info: '',
    info2: '',
    url: '',
    repo: 'https://github.com/cobidev/react-simplefolio', // if no repo, the button will not show up
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
