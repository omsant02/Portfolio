import {
  javascript,
  typescript,
  reactjs,
  nodejs,
  mongodb,
  docker,
  python,
  solidity,
  blockchain,
  aws,
  postgre,
  freelancer,
  python2,
  WebD,
  angular,
  django,
  cyberlabs,
  oasis,
  marketeers,
  cookers,
  pizza,
  chat,
} from "../assets";

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
    id: "tech",
    title: "Skills",
  },
  {
    id: "project",
    title: "Project",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: WebD,
  },
  {
    title: "Blockchain Developer",
    icon: blockchain,
  },
  {
    title: "Python Developer",
    icon: python2,
  },
  {
    title: "FreeLancer",
    icon: freelancer,
  },
];

const technologies = [
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "Python",
    icon: python,
  },
  {
    name: "Solidity",
    icon: solidity,
  },
  {
    name: "blockchain",
    icon: blockchain,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Angular",
    icon: angular,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "Django",
    icon: django,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Postgre",
    icon: postgre,
  },

  {
    name: "docker",
    icon: docker,
  },
  {
    name: "aws",
    icon: aws,
  },
];

const experiences = [
  {
    title: "Blockchain Developer",
    company_name: "Cyberlabs",
    icon: cyberlabs,
    iconBg: "#383E56",
    date: "dec 2022 - Present",
    points: [
      "Developing and maintaining Decentralized applications using Solidity and other related technologies.",
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
  {
    title: "Full stack Developer",
    company_name: "Oasis Infobyte",
    icon: oasis,
    iconBg: "#383E56",
    date: "Nov 2023 - Dec 2023",
    points: [
      "Collaborated with the development team to design and implement features on a full stack Online Food delivery application.",
      "Architected a user-centric interface, revolutionizing user interactions with NextJS",
      "Utilized MongoDB and AWS for streamlined data storage and retrieval, ensuring efficient login/signup, datahandling within the application.",
      "Implemented Stripe payment gateway for smoother payment checkouts.",
    ],
  },
  {
    title: "Front end Developer",
    company_name: "Marketeers",
    icon: marketeers,
    iconBg: "#383E56",
    date: "Dec 2023 - Jan 2023",
    points: [
      "Contributed as a freelance front-end web developer specializing in implementing captivating animations and dynamic effects.",
      "Collaborated closely with clients and development teams to integrate animations seamlessly into existing web applications.",
      "Demonstrated proficiency in creating fluid animations and interactive elements to elevate the overall user experience.",
      "Provided support and guidance to ensure smooth integration of animations with existing codebases.",
    ],
  },
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
    name: "Pizza Ordering",
    description:
      "Pizza ordering full stack web application. From frontend customization to backend payment processing. Build your perfect pizza, effortlessly checkout, and savor every bite – all in one seamless platform!",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "aws",
        color: "pink-text-gradient",
      },
      {
        name: "stripe",
        color: "pink-text-gradient",
      },
    ],
    image: pizza,
    source_code_link: "https://github.com/omsant02/OIBSIP",
  },
  {
    name: "cookers",
    description:
      "Welcome to our versatile web application where users can effortlessly search for, add, and customize food recipes to fit their desired servings.",
    tags: [
      {
        name: "javascript",
        color: "blue-text-gradient",
      },
      {
        name: "api",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: cookers,
    source_code_link: "https://github.com/omsant02/Cookers-recipe",
  },
  {
    name: "Talk-A-Tive",
    description:
      "Introducing our robust real-time chat application. Users can engage in both individual and group chats, search for other users, view profiles, and effortlessly log out.",
    tags: [
      {
        name: "nodejs",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "react",
        color: "pink-text-gradient",
      },
      {
        name: "websockets",
        color: "pink-text-gradient",
      },
    ],
    image: chat,
    source_code_link: "https://github.com/omsant02/Chat-App",
  },
  // {
  //   name: "Trip Guide",
  //   description:
  //     "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
  //   tags: [
  //     {
  //       name: "nextjs",
  //       color: "blue-text-gradient",
  //     },
  //     {
  //       name: "supabase",
  //       color: "green-text-gradient",
  //     },
  //     {
  //       name: "css",
  //       color: "pink-text-gradient",
  //     },
  //   ],
  //   image: tripguide,
  //   source_code_link: "https://github.com/",
  // },
  // {
  //   name: "Trip Guide",
  //   description:
  //     "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
  //   tags: [
  //     {
  //       name: "nextjs",
  //       color: "blue-text-gradient",
  //     },
  //     {
  //       name: "supabase",
  //       color: "green-text-gradient",
  //     },
  //     {
  //       name: "css",
  //       color: "pink-text-gradient",
  //     },
  //   ],
  //   image: tripguide,
  //   source_code_link: "https://github.com/",
  // },
  // {
  //   name: "Trip Guide",
  //   description:
  //     "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
  //   tags: [
  //     {
  //       name: "nextjs",
  //       color: "blue-text-gradient",
  //     },
  //     {
  //       name: "supabase",
  //       color: "green-text-gradient",
  //     },
  //     {
  //       name: "css",
  //       color: "pink-text-gradient",
  //     },
  //   ],
  //   image: tripguide,
  //   source_code_link: "https://github.com/",
  // },
];

export { services, technologies, experiences, testimonials, projects };
