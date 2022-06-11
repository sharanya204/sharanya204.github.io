import { v1 as uuidv1 } from "uuid";

// HEAD DATA
export const headData = {
  title: "Sharanya Soundararajan  |  Portfolio",
  lang: "en",
  description: "Sharanya's corner of the web",
};

// HERO DATA
export const heroData = {
  title: "Hiya, I'm Sharanya --",
  name: "Sharanya Soundararajan",
  subtitle: "UX engineer  |  Builder of things",
  intro:
    "I have a background in visual communication and user experience design, and I'm passionate about engineering engaging experiences using a variety of media, frequently combining art and code. \n I'm currently part of a team working on developer experience at Autodesk.",
};

export const aboutData = {
  img: "Sharanya_mugshot.jpg",
  paragraphOne: "",
  paragraphTwo: "",
  paragraphThree: "",
  resume: "", // if no resume, the button will not show up
};

export const projectsData = [
  {
    id: uuidv1(),
    img: "01-malloci.png",
    title: "Malloci",
    info: "Grad school capstone project focussing on facilitating the creation of platform agnostic VR by using markdown files of text and images -- and no code whatsoever.",
    info2: "",
    url: "https://mallocivr.github.io",
    projpage: "malloci", // if no repo, the button will not show up
  },
  {
    id: uuidv1(),
    img: "02-sos.png",
    title: "Save Our Species",
    info: 'A collaborative curation of infographics illustrating the dire straits of endangered species at the hands of humans. The driver I focused on was "art".',
    info2: "",
    url: "https://sharanya204.github.io/sos/",
    projpage: "https://github.com/sharanya204/sos/", // if no repo, the button will not show up
  },
  {
    id: uuidv1(),
    img: "02-sos.png",
    title: "Avian Ambiguities",
    info: "A graphic novella",
    info2: "",
    url: "https://sharanya204.github.io/sos/",
    projpage: "https://github.com/sharanya204/sos/", // if no repo, the button will not show up
  },
  {
    id: uuidv1(),
    img: "02-sos.png",
    title: "The Art of Fine Dying",
    info: 'A collaborative curation of infographics illustrating the dire straits of endangered species at the hands of humans. The driver I focused on was "art".',
    info2: "",
    url: "https://sharanya204.github.io/sos/",
    projpage: "https://github.com/sharanya204/sos/", // if no repo, the button will not show up
  },
  {
    id: uuidv1(),
    img: "02-sos.png",
    title: "Tangible User Interfaces",
    info: 'A collaborative curation of infographics illustrating the dire straits of endangered species at the hands of humans. The driver I focused on was "art".',
    info2: "",
    url: "https://sharanya204.github.io/sos/",
    projpage: "https://github.com/sharanya204/sos/", // if no repo, the button will not show up
  },
];

export const githubButtons = {
  isEnabled: false, // set to false to disable the GitHub stars/fork buttons
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: uuidv1(),
      name: "codepen",
      url: "https://codepen.io/sharanya204-the-flexboxer",
    },
    {
      id: uuidv1(),
      name: "linkedin",
      url: "https://www.linkedin/com/in/sharanya-sound",
    },
    {
      id: uuidv1(),
      name: "github",
      url: "https://github.com/sharanya204",
    },
  ],
};
