import { v1 as uuidv1 } from "uuid";

// HEAD DATA
export const headData = {
  title: "Sharanya Soundararajan",
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
  img: "Sharanya_about.png",
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
    projpage: "https://github.com/mallocivr/mallocivr.github.io", // if no repo, the button will not show up
  },
  {
    id: uuidv1(),
    img: "sos-01.png",
    title: "Save Our Species",
    info: 'A collaborative curation of infographics illustrating the dire straits of endangered species at the hands of humans. The driver I focused on was "art".',
    info2: "",
    url: "https://sharanya204.github.io/sos/",
    projpage: "https://github.com/sharanya204/sos/", // if no repo, the button will not show up
  },
  {
    id: uuidv1(),
    img: "aa_01.png",
    title: "Avian Ambiguities",
    info: "A graphic novella about the evolution of birds.",
    info2: "",
    url: "https://issuu.com/sharanya204/docs/bookfinaled",
    projpage: "avianambiguities", // if no repo, the button will not show up
  },
  {
    id: uuidv1(),
    img: "portaledge.png",
    title: "Portaledge",
    info: "If you'd like to see more whimsy but in CLI",
    info2: "",
    url: "https://github.com/sharanya204/term-site",
    projpage: "", // if no repo, the button will not show up
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
