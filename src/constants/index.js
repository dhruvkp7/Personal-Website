import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  Cplus,
  Github,
  tailwind,
  Ruby,
  nodejs,
  mongodb,
  python,
  java,
  mysql,
  git,
  encova,
  Knack,
  Ohio,
  proximus,
  Hackathon,
  Database,
  Graph,
  zealApp,
  rollWeb,
  rollApp,
  linkedIn,
  github,
} from "../assets";

const navigationPaths = {
  home: "/",
  about: "about",
  work: "work",
  contact: "contact",
};

export const navLinks = [
  {
    id: navigationPaths.about,
    title: "About",
  },
  {
    id: navigationPaths.work,
    title: "Work",
  },
  {
    id: navigationPaths.contact,
    title: "Contact",
  },
];

const services = [
  {
    title: "React Developer",
    icon: web,
  },
  {
    title: "Java Developer",
    icon: java,
  },
  {
    title: "Python Developer",
    icon: python,
  },
  {
    title: "Javascript Developer",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "Python",
    icon: python,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "C++",
    icon: Cplus,
  },
  {
    name: "Github",
    icon: Github,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Ruby",
    icon: Ruby,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Java",
    icon: java,
  },
  {
    name: "MySQL",
    icon: mysql,
  },
  {
    name: "Git",
    icon: git,
  },
];

const experiences = [
  {
    title: "Cybersecurity Internship",
    company_name: "Encova Insurance",
    company_website: "https://www.encova.com",
    icon: encova,
    iconBg: "#E6DEDD",
    date: "May 2024- August 2024",
    points: [
      " Assisted in the process of granting and revoking user access in CyberArk, ensuring that permissions were correctly managed according to company policies.",
      "Supported users with Single Sign-On (SSO) issues in Okta, providing troubleshooting assistance and ensuring seamless access to necessary systems and applications.",
     ,
    ],
  },
  {
    title: "Peer Tutor",
    company_name: "Knack Tutoring",
    company_website: "https://www.joinknack.com/",
    icon: Knack,
    iconBg: "#E6DEDD",
    date: "Aug 2023 - Present",
    points: [
      "Mentor students individually, leading to an average improvement of 20% in their exam scores",
      "Designed personalized study plans that helped 90% of students reach their target grade or higher",
     
    ],
  },
  {
    title: "Mathamatics Tutor",
    company_name: "The Ohio State University",
    company_website: "https://mslc.osu.edu/",
    icon: Ohio,
    iconBg: "#E6DEDD",
    date: "Sep 2021 - May 2022",
    points: [
      "Facilitated one-on-one and group sessions to explain concepts, respond to questions, course concepts, respond to questions, and observe study skills.",
      "Recommended academic resources that led to a 25% increase in students’ independent study time and retention rates.",
    ],
  },
  
];

const projects = [
  {
    name: "Indoor Navigation System HACK/IO",
    description:
      "At the HACK/IO hackathon sponsored by Honda, I developed a mobile application aimed at enhancing indoor navigation for complex college campuses. The app was built using React Native and integrated with the Google Maps API to provide real-time navigation. This project improved route calculation and user experience, showcasing my skills in mobile development, API integration, and the use of modern development tools like Visual Studio Code and GitHub for collaboration and code management.",
    tags: [
      {
        name: "reactjs",
        color: "blue-text-gradient",
      },
      {
        name: "javascript",
        color: "green-text-gradient",
      },
      {
        name: "python",
        color: "pink-text-gradient",
      },
    ],
    image: Hackathon,
    hosted_link: "https://github.com/dhruvkp7/HACK-IO-2023",
  },
  {
    name: "Company Management System",
    description:
      "A full-stack web application called Company Management System to manage employee and department data, featuring intuitive interfaces and automated data integrity maintenance. Packaged the system for seamless installation, utilizing MySQL for robust data storage.",
    tags: [
      {
        name: "PHP",
        color: "blue-text-gradient",
      },
      {
        name: "SQL",
        color: "green-text-gradient",
      },
      
    ],
    image: Database,
    hosted_link: "https://github.com/dhruvkp7/Company-Management-System",
  },
  {
    name: "E - Commerce Clothing Classifier ",
    description:
      " I Developed a Keras-based deep learning model and Flask app for classifying e-commerce clothing images, achieving high accuracy and optimized performance.",
    tags: [
      {
        name: "python",
        color: "blue-text-gradient",
      },
      {
        name: "Tensorflow",
        color: "green-text-gradient",
      },
      {
        name: "Flask",
        color: "pink-text-gradient",
      },
    ],
    image: Graph,
    hosted_link: "https://github.com/dhruvkp7/E-Commerce-Clothing-Classifier-",
  },
 
];

const personalInfo = {
  name: "Dhruv",
  fullName: "Dhruv Palakkal",
  email: "dhruv.palakkal@gmail.com",
  role: "CS Student at the Ohio State University ",
  about: `Hi, I’m Dhruv Palakkal—a passionate software engineer and computer science student at The Ohio State University, 
  set to graduate in May 2025. I specialize in software development and cybersecurity, 
  combining technical expertise with creative problem-solving. I’m driven by the challenge of building impactful solutions and exploring new technologies. When I’m not coding, you’ll find me mentoring students, 
  playing pickleball with friends, or hitting the gym.`,
  projectsIntro: `The following projects highlight my technical expertise and hands-on experience through practical, real-world applications. Each project is concisely presented and includes access to my source code. These projects demonstrate my proficiency in problem-solving, versatility with various technologies, and strong project management capabilities.`,
};

const publicUrls = {
  resume:
    "https://drive.google.com/file/d/1aXiAAQ-Uuj491DYoGBqCD7GSi06UytBS/view?usp=sharing",
  socialProfiles: {
    linkedin: {
      title: "linkedin",
      link: "https://www.linkedin.com/in/dhruv-palakkal/",
      icon: linkedIn,
    },
    github: {
      title: "github",
      link: "https://github.com/dhruvkp7",
      icon: github,
    },
  },
};

export {
  services,
  technologies,
  experiences,
  projects,
  navigationPaths,
  personalInfo,
  publicUrls,
};
