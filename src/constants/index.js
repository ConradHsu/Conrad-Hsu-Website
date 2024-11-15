import project1 from "../assets/projects/project-1.jpg";
import project2 from "../assets/projects/project-2.jpg";
import project3 from "../assets/projects/project-3.jpg";
import project4 from "../assets/projects/project-4.jpg";

export const HERO_CONTENT = `I am a passionate full stack developer with a knack for crafting robust and scalable web applications. With 5 years of hands-on experience, I have honed my skills in front-end technologies like React and Next.js, as well as back-end technologies like Node.js, MySQL, PostgreSQL, and MongoDB. My goal is to leverage my expertise to create innovative solutions that drive business growth and deliver exceptional user experiences.`;

export const ABOUT_TEXT_1 = `Hi! I am currently a freshman at Tufts University studying computer science and mathematics in the School of Engineering. My interests and experience lie in full-stack engineering and generative AI, specifically making generative music models. I have previously worked as an AI researcher at UCSB, using XAI techniques such as SHAP and GRAD-CAM to provide better insight into a CNN’s decision-making for malaria classification. I’ve also worked with a Phd mentor at UCSD on musical jazz improvisational models, presenting our work at IEEE ISM.`;

export const ABOUT_TEXT_2 = 'Currently, I am a part of JumboCode where I am developing a scheduling web application for a local non-profit organization to streamline volunteer sign-ups for events. Outside of class, I am part of Tufts Club tennis where we compete and play other schools in the New England area.';
export const EXPERIENCES = [
  {
    year: "2024 - Present",
    role: "Full Stack Developer",
    company: "Tufts JumboCode",
    description: `Developing a scheduling web application for Bread & Roses, a local non-profit organization, to streamline
    volunteer sign-ups for events and enable efficient mass communication with volunteers`,
    technologies: ["Tailwind CSS", "React.js", "TypeScript", "Next.js", "mongoDB"],
  },
  {
    year: "2022 - 2024",
    role: "Machine Learning Researcher",
    company: "UC San Diego EECS",
    description: `Developed novel musical evaluation metrics, including groove pattern similarity, pitch class histogram entropy, chord tone emphasis, and weighted swing deviation, to assess generative jazz music models (Markov
    model and RNN)`,
    technologies: ["Python", "Keras", "TensorFlow"],
  },
  {
    year: "2023-2023",
    role: "Diagnostic AI Researcher",
    company: "UCSB SRA",
    description: `Adapted the state-of-the-art FixMatch semi-supervised learning model, achieving 96% accuracy using only
    25% labeled data (4000 samples); Presented work at UCSB’s research symposium`,
    technologies: ["Python", "Keras", "Tensorflow", "Grad-CAM", "SHAP"],
  },
  {
    year: "2021 - 2023",
    role: "Mathematics Lead Instructor",
    company: "Mathnasium",
    description: `Tutored up to 5 kids at a time; help oversee general operations by updating progress reports, keeping in touch with concerns of parents,
    and restocking needed supplies`,
    technologies: [],
  },
];

export const PROJECTS = [
  {
    title: "Bridging Subjectivity and Objectivity in Evaluation of Machine-Generated Jazz Music: A Multimetric Approach",

    description:
      "Conrad Hsu and Ross Greer",
    technologies: ["IEEE International Symposium on Multimedia 2023"]
  },
  {
    title: "A Comparative Analysis of Supervised and Semi-Supervised Learning Models for Malaria Classification Using Explainable AI Techniques",
    description:
      "Aryan Agrawal, Conrad Hsu, Stephen Tan",
    technologies: ["International Journal of Scientific Research and Engineering Development 2023 "],
  },
  {
    title: "Comparative Assessment of Markov Models and Recurrent Neural Networks for Jazz Music Generation",
    description:
      "Conrad Hsu and Ross Greer",
    technologies: ["arXiv preprint arXiv:2309.08027 "],
  },
];

export const CONTACT = {
  email: "conrad.hsu@tufts.edu",
};
