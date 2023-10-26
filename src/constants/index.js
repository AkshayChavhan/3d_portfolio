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
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
  nextjs
} from "../assets";
import { portfolio2022 , dashboard , portfolio2023 , socialmedia , amazon , addtocart} from "../assets/project_ss";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Frontend React Developer",
    icon: backend,
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
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  // {
  //   name: "Three JS",
  //   icon: threejs,
  // },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "Nextjs",
    icon: nextjs,
  },
];

const experiences = [
  {
    title: "Full Stack React Developer",
    company_name: "Rethink Ledgers LLC",
    icon: meta,
    iconBg: "#E6DEDD",
    date: "Jal 2022 - Present",
    points: [
      "Coding and Developing New Features. Successfully implemented and improved the invoice ,payment and Purchase Order module.",
      "Experience in AWS S3 setup , redux implementation.",
      "Work on web development life cycle (from concept ,design and testing) Understanding of Deployment , all git processes including reviewing code.",
      "Design and implement efficient and reusable backend and frontend components using the DAML based , Javascript libraries and framework",
      "Development of Scalable APIs using Nodejs and ExpressJs for integration with frontend components. Building responsive React.js component using its life cycles, write efficient and well documented code.",
      "Proficient in creating and documentation and updating readme files for projects Maintained daily logs to track project progress and identify areas for improvements"
    ],
  },
  {
    title: "React.js Developer",
    company_name: "Newton School Bangalore",
    icon: starbucks,
    iconBg: "#383E56",
    date: "March 2021 - April 2022",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  // {
  //   title: "React Native Developer",
  //   company_name: "Tesla",
  //   icon: tesla,
  //   iconBg: "#E6DEDD",
  //   date: "Jan 2021 - Feb 2022",
  //   points: [
  //     "Developing and maintaining web applications using React.js and other related technologies.",
  //     "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
  //     "Implementing responsive design and ensuring cross-browser compatibility.",
  //     "Participating in code reviews and providing constructive feedback to other developers.",
  //   ],
  // },
  // {
  //   title: "Web Developer",
  //   company_name: "Shopify",
  //   icon: shopify,
  //   iconBg: "#383E56",
  //   date: "Jan 2022 - Jan 2023",
  //   points: [
  //     "Developing and maintaining web applications using React.js and other related technologies.",
  //     "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
  //     "Implementing responsive design and ensuring cross-browser compatibility.",
  //     "Participating in code reviews and providing constructive feedback to other developers.",
  //   ],
  // },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Personal Portfolio 2022",
    description:
      "Web application that provide a details information about the developer and the services provided by him.Also provide middleware to contact using mail services.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "css",
        color: "green-text-gradient",
      },
      {
        name: "javascript",
        color: "pink-text-gradient",
      },
      {
        name: "styled component",
        color: "yellow-text-gradient",
      },
    ],
    image: portfolio2022,
    source_code_link: "https://github.com/AkshayChavhan/personal-portfolio-react-v3.git",
    link: "https://akshaychavhan.netlify.app"
  },
  {
    name: "Personal Portfolio 2023",
    description:
      "Web application that provide a details information about the developer and the services provided by him.Also provide middleware to contact using mail services.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "css",
        color: "green-text-gradient",
      },
      {
        name: "javascript",
        color: "pink-text-gradient",
      },
      {
        name: "tailwindcss",
        color: "yellow-text-gradient",
      },
      {
        name: "motion",
        color: "green-text-gradient",
      },
    ],
    image: portfolio2023,
    source_code_link: "https://github.com/AkshayChavhan/3d_portfolio.git",
    // link:"https://akshaychavhan.netlify.app"
  },
  {
    name: "Dashboard 2023",
    description:
      "A web application showing various datas in the form of graph and pie charts.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: dashboard,
    source_code_link: "https://github.com/AkshayChavhan/dashboard.git",
    link: "https://admin-frontend-auj7.onrender.com"
  },
  {
    name: "Amazon Website 2021",
    description:
      "Web-based platform that allows users to search and add product into the amazon cart, providing a convenient and efficient solution for buying product online.",
    tags: [
      {
        name: "javascript",
        color: "blue-text-gradient",
      },
      {
        name: "html",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: amazon,
    source_code_link: "https://github.com/AkshayChavhan/amazon-clone.git",
    link: "https://amazoncloneakshay.netlify.app"
  },
  {
    name: "Social Media Web Application",
    description:
      "Web-based platform that allows users to search user and get connect ,follow them and see their post, like and comment",
    tags: [
      {
        name: "javascript",
        color: "blue-text-gradient",
      },
      {
        name: "reactjs",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
      {
        name: "tailwindcss",
        color: "red-text-gradient",
      },
    ],
    image: socialmedia,
    source_code_link: "https://social-akshay-app.netlify.app/",
    link: "https://social-akshay-app.netlify.app/",
  },
  {
    name: "Add to Cart",
    description:
      "Web-based platform that allows users to add product into cart",
    tags: [
      {
        name: "javascript",
        color: "blue-text-gradient",
      },
      {
        name: "reactjs",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      }
    ],
    image: addtocart,
    source_code_link: "https://github.com/AkshayChavhan/add-to-cart.git",
    link: "https://akshay-addtocart.netlify.app/",
  },
];

export { services, technologies, experiences, testimonials, projects };