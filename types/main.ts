 type FormData = {
  name: string;
  firstName: string;
  email: string;
  company: string;
  phone: string;
  jobTitle: string;
  localisation: string;
  otherInfo: string;
  cv: File | null;
};

type CandidateData = {
  name: string;
  firstName: string;
  email: string;
  company: string;
  phone: string;
  jobTitle: string;
  localisation: string;
  otherInfo: string;
  cv: string;
};

type Skill = {
  name: string;
  image: string;
  category: string;
};

type Project = {
  name: string;
  image: string;
  techstack: string;
  category: string;
  links: {
    visit: string;
    code: string;
    video: string;
  };
};

type Experience = {
  company: string;
  position: string;
  startDate: string;
  endDate: string;
  desc: string[];
};

type Education = {
  institute: string;
  degree: string;
  startDate: string;
  endDate: string;
};

type Main = {
  name: string;
  titles: string[];
  heroImage: string;
  shortDesc: string;
  techStackImages: string[];
};

type About = {
  aboutImage: string;
  aboutImageCaption: string;
  title: string;
  about: string;
  resumeUrl: string;
  callUrl: string;
};

type Social = {
  name: string;
  icon: string;
  link: string;
};

type Data = {
  main: Main;
  about: About;
  skills: Skill[];
  projects: Project[];
  experiences: Experience[];
  educations: Education[];
  socials: Social[];
  formData: FormData; // Ajoute ce champ pour les données du formulaire
};
type Job = {
  _id: string; // MongoDB utilise des _id de type string (ObjectId)
  title: string;
  contrat?: string;
  company: string;
  location: string;
  salary: string;
  teletravail: string;
  summary: string;
  details: string;
};

export type {
  Data,
  Main,
  About,
  Skill,
  Project,
  Experience,
  Education,
  Social,
  Job,
  CandidateData,
  FormData,
};
