// Centralized place to store all our setting data including icons
// Hero
import InstagramLineIcon from "remixicon-react/InstagramLineIcon";
import FacebookCircleLineIcon from "remixicon-react/FacebookCircleLineIcon";
import DribbbleLineIcon from "remixicon-react/DribbbleLineIcon";
import YoutubeLineIcon from "remixicon-react/YoutubeLineIcon";
import GithubLineIcon from "remixicon-react/GithubLineIcon";

/* eslint-disable react/jsx-key */
export const heroIcons = [
  <InstagramLineIcon />,
  <FacebookCircleLineIcon />,
  <DribbbleLineIcon />,
  <YoutubeLineIcon />,
  <GithubLineIcon />,
];

// About Me
import GithubFillIcon from "remixicon-react/GithubFillIcon";
import CodeBoxLineIcon from "remixicon-react/CodeBoxLineIcon";
import CodeLineIcon from "remixicon-react/CodeLineIcon";
import UserVoiceLineIcon from "remixicon-react/UserVoiceLineIcon";

export const aboutData = [
  {
    title: "Repos Created",
    amount: 15,
    icon: <GithubFillIcon />,
  },
  {
    title: "Technologies Learned",
    amount: 40,
    icon: <CodeBoxLineIcon />,
  },
  {
    title: "Commits Made",
    amount: 100,
    icon: <CodeLineIcon />,
  },
  {
    title: "Students Taught",
    amount: 50,
    icon: <UserVoiceLineIcon />,
  },
];

import DownloadLineIcon from "remixicon-react/DownloadLineIcon";
import ArrowLeftSFillIcon from "remixicon-react/ArrowLeftSFillIcon";

export const downloadIcon = <DownloadLineIcon />;
export const arrowLeftIcon = <ArrowLeftSFillIcon />;

export const aboutText =
  " Hi, I’m Darren, a recent Computer Science graduate from UCSC and an aspiring software engineer with a focus on full-stack and mobile app development. I work with tools like Next.js, React Native, Firebase, and Node.js to build responsive apps and clean UIs. Whether I’m building OCR-powered features, exploring AI/ML applications, or teaching kids how to code, I enjoy turning ideas into real, working products with thoughtful design and functionality.";
// End of About Me

// Experience
export const experienceData = [
  {
    year: 1,
    title: "Academic Foundation & Exploration",
    education:
      "University of California, Santa Cruz – B.S. in Computer Science (Fall 2021).",
    experience: [
      "• Completed foundational CS courses in programming and discrete math.",
      "• Started personal projects using Python, HTML/CSS, and Scratch.",
      "• Explored early AI/ML concepts through coursework and self-study.",
    ],
  },
  {
    year: 2,
    title: "Core Computer Science and Independent Learning",
    education: "Progressed through core CS coursework and personal projects.",
    experience: [
      "• Completed data structures and algorithms courses.",
      "• Developed skills in front-end development with JavaScript and React.",
      "• Began learning machine learning (ML) using Python and scikit-learn.",
    ],
  },
  {
    year: 3,
    title: "Team Projects and Full-Stack Development",
    education:
      "Applied skills in real-world projects with a focus on app development.",
    experience: [
      "• Developed a Full-Stack Slack Web App with React Native, Node.js, and PostgreSQL.",
      "• Practiced test-driven development and maintained 100% code coverage.",
      "• Started side projects exploring LSTM for sentiment analysis and AI/ML applications.",
    ],
  },
  {
    year: 4,
    title: "AI Integration and Leadership in Development",
    education: "Completed B.S. in Computer Science (Fall 2024).",
    experience: [
      "• Developed a mobile app using React Native, Firebase, and MLKit for OCR.",
      "• Led a team of 5 in both Software Development and Product Ownership roles.",
      "• Improved OCR runtime performance by 600% through research and optimization.",
      "• Worked with ML models to process data and implement real-time document scanning.",
    ],
  },
  {
    year: 5,
    title: "Teaching, Mentorship, and Continued AI Growth",
    education: "Post-grad role focused on education and mentoring.",
    experience: [
      "• Code Coach at theCoderSchool, teaching Python, JavaScript, HTML/CSS, and Scratch.",
      "• Adapted teaching methods to various learning styles and mentored students on logic and problem-solving.",
      "• Continued self-study and side projects in AI/ML topics, including neural networks and computer vision.",
    ],
  },
];

// Skills
export const skillsData = [
  {
    name: "VS Code",
    icon: "/skills/vscode.png",
  },
  {
    name: "Python",
    icon: "/skills/Python_logo.png",
  },
  {
    name: "HTML",
    icon: "/skills/html.png",
  },
  {
    name: "CSS",
    icon: "/skills/css.png",
  },
  {
    name: "JavaScript",
    icon: "/skills/js.png",
  },
  {
    name: "TailwindCSS",
    icon: "/skills/tailwind.png",
  },
  {
    name: "Vite",
    icon: "/skills/vite.png",
  },
  {
    name: "Firebase",
    icon: "/skills/Firebase_logo.jpg",
  },
  {
    name: "C",
    icon: "/skills/C_logo.png",
  },
  {
    name: "C++",
    icon: "/skills/CPP_logo.png",
  },
  {
    name: "OpenApi",
    icon: "/skills/Openapi_logo.png",
  },
  {
    name: "ReactJS",
    icon: "/skills/react.png",
  },
  {
    name: "TypeScript",
    icon: "/skills/ts.png",
  },
  {
    name: "AI",
    icon: "/skills/ai.png",
  },
  {
    name: "Framer Motion",
    icon: "/skills/framer.png",
  },
  {
    name: "NextJS",
    icon: "/skills/nextjs.png",
  },
  {
    name: "NodeJS",
    icon: "/skills/nodejs.png",
  },
  {
    name: "Github",
    icon: "/skills/github.png",
  },
];

// Reviews
import StarFillIcon from "remixicon-react/StarFillIcon";
import StarHalfLineIcon from "remixicon-react/StarHalfLineIcon";
import ArrowLeftSLineIcon from "remixicon-react/ArrowLeftSLineIcon";
import ArrowRightSLineIcon from "remixicon-react/ArrowRightSLineIcon";

/* eslint-disable react/jsx-key */
export const starIcons = [<StarFillIcon />, <StarHalfLineIcon />];
export const arrowIcons = [<ArrowLeftSLineIcon />, <ArrowRightSLineIcon />];

export const funFacts = [
  {
    image: "/reviews/KunaTata.png",
    fact: "I have two cats",
    comment:
      "They're named Kuna and Tata — one sleeps 20 hours a day, the other thinks my keyboard is her throne.",
  },
  {
    image: "/reviews/tableTennis.png",
    fact: "Table Tennis Captain for 3 Years",
    comment:
      "I’ve probably hit over 100,000 ping pong balls — and yes, I still celebrate every shot like I just won the Olympics.",
  },
  {
    image: "/reviews/Tutor.png",
    fact: "I am a Code Coach",
    comment:
      "I work with students of all ages and love turning tricky topics into easy, bite-sized lessons — especially when helping younger learners feel confident and curious.",
  },
  {
    image: "/reviews/BobaCold.png",
    fact: "I drink way too much boba",
    comment:
      "Pretty sure my local spot knows my order better than my friends do.",
  },
  {
    image: "/reviews/graduation.png",
    fact: "I finished my degree in three years",
    comment: "I did it not because I am smart, but because I am impatient",
  },
];

// Projects
export const projectsData = [
  {
    name: "DSA and Systems Programming",
    link: "https://github.com/DarrenTef/class_projects",
    desc: "Instrumental courses in shaping my understanding of programming, algorithms, and systems-level concepts.",
    url: "/projects/portfolio_img5.png",
    tech: ["C", "C++"],
  },
  {
    name: "Cover Letter Generator",
    link: "https://github.com/DarrenTef/CoverLetterGen",
    desc: "A tool that uses APIs for content generation and Firebase for data storage to help users create personalized cover letters. Still building out core features and templates—open to feedback and contributions!",
    url: "/projects/portfolio_img4.png",
    tech: ["ReactJS", "Firebase", "MUI"],
  },
  {
    name: "My Portfolio",
    link: "https://devdarren.vercel.app/",
    desc: "A technology news and review site covering the latest gadgets, software updates, and trends in the tech industry.",
    url: "/projects/portfolio_img3.png",
    tech: [
      "JavaScript",
      "CSS",
      "NextJs",
      "FramerMotion",
      "TailwindCSS",
      "HTML",
      "CSS",
    ],
  },
  {
    name: "Awesome Receipt App",
    link: "https://github.com/DarrenTef/ReceiptApp",
    desc: "React Native receipt app for android that takes a picture of a receipt and splits it accordingly amongst a group of people.",
    url: "/projects/portfolio_img2.png",
    tech: ["TypeScript", "CSS", "ReactJS", "JavaScript"],
  },
  {
    name: "Distributed Systems Projects",
    link: "https://github.com/DarrenTef/Distributed-Systems",
    desc: "Distributed Systems projects using Node.js and Docker, including a replicated key-value store with causal consistency and dynamic replica management.",
    url: "/projects/portfolio_img6.png",
    tech: ["TypeScript", "JavaScript", "Docker"],
  },
];

export const projectsButton = [
  "All",
  "Python",
  "C",
  "C++",
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "ReactJS",
  "TailwindCSS",
  "NextJS",
  "FramerMotion",
  "MUI",
  "Firebase",
  "Docker"
];

export const pricingPlans = [
  {
    title: "Starter",
    pricing: "$100 - $250",
    features: [
      "4 sessions per month (1x/week)",
      "1-on-1 or 2-on-1 format available",
      "Intro to coding concepts (HTML, JavaScript, Python, etc.)",
      "Homework help & basic debugging",
      "Email support between sessions",
      "Flexible rescheduling",
    ],
    recommended:
      "New coders, younger students, or those needing homework support",
  },
  {
    title: "Intensive",
    pricing: "$1,000+",
    features: [
      "Custom schedule (3+ sessions/week)",
      "1-on-1 mentorship or focused 2-on-1 partner learning",
      "Portfolio & GitHub project development",
      "College apps, CS competitions, or internship prep",
      "On-demand help via email or Slack",
      "Progress tracking for students & parents",
    ],
    recommended:
      "Aspiring software engineers, long-term learners, and portfolio builders",
  },
  {
    title: "Pro",
    pricing: "$400 - $700",
    features: [
      "8 sessions per month (2x/week)",
      "1-on-1 or 2-on-1 format",
      "Tailored curriculum with hands-on coding projects",
      "Support for school, bootcamp, or personal learning goals",
      "Live coding & real-time feedback",
      "Weekly check-ins or progress summaries",
    ],
    recommended: "High schoolers, early college students, or bootcamp learners",
  },
];

import CheckLineIcon from "remixicon-react/CheckLineIcon";

export const checkIcon = <CheckLineIcon />;

// Q & A
export const questions = [
  {
    question: "How much do you charge for a website?",
    answer:
      "Our website packages usually range from £2997 – £4997. However it really depends on what kind of website you need. We recently wrote a full guide on how much it costs for a website to give you an idea of the different options available.",
  },
  {
    question: "Why are you so expensive?",
    answer:
      "he process we use to build your website takes a certain amount of time and a lot of planning and research. Unlike other agencies, we DON’T use templates. We build your website from scratch, which means you get a unique design tailored around your business. Buying a website from us should not just simply be seen as a business expense as your website is a sales tool that should earn you money",
  },
  {
    question: "How long does it take to build a website?",
    answer:
      "It takes approximately 6-10 weeks to build a website from start to finish, providing we have all the information from you. Our full web design process is broken down here. Generally speaking, the website will only take a long time if we are still waiting for text and images from yourself.",
  },
  {
    question: "How do we communicate throughout the website build?",
    answer:
      "Before we begin working together, we’ll usually have an initially chat on the phone or via Skype to discuss the project. Once we get started, most of the communication will take place over email. This makes the process a lot easier as we’ll have all of the information saved and can come back to it later. Once we’ve finished the project, we will book in your 1hr digital marketing training session.",
  },
  {
    question: "What will you need from me?",
    answer:
      "It really depends on what type of website you want. We’ll be able to discuss this on our discovery call before we start working together. Depending on which package we agree on we could need…",
  },
  {
    question: "What if I don’t like the website?",
    answer:
      "You’re in luck. We offer a risk-free guarantee. Before we build your new website, we’ll design a mockup of your homepage. We’ll design a layout in Photoshop first, that way you’ll get to see our initial designs within approximately ten days. This is your opportunity to give us feedback and if you really don’t like it, you don’t have to move forward. Best part is, this won’t cost you anything.",
  },
  {
    question: "Do you offer a payment schedule?",
    answer:
      "Yes, we split the payment into two. The first 50% is usually taken once you have seen the mockup of your homepage and you’re happy to move forward. The following 50% is taken 30 days after this.",
  },
  {
    question: "Can I make the final payment when the site is ready to go live?",
    answer:
      "No. In the past we have found that projects can take a lot longer than expected to complete. We might be waiting for information from you and this can delay the process. Sometimes these delays can take months. This is why we always invoice 30 days after the original payment. At this point we’ll be well on our way with your new website and you’ll be able to see the progress.",
  },
  {
    question: "Who hosts the website?",
    answer:
      "If we build your website, we will generally manage the hosting for you so you don’t need to do anything. We use the same hosting company for our own website and for ALL our clients. Each website is managed individually to avoid any security issues. Every website we build has unlimited bandwidth, 20GB of disk space, 2GB Ram and 99.9% uptime. We’ve used the same company for 5 years and we don’t plan on changing this anytime soon.",
  },
  {
    question: "Can I update the website myself once it’s been built?",
    answer:
      "Yes. We like to offer the ability for our clients to update the website themselves. We we’ll give you all the training and tools to be able to make website amendments. We use a easy to use platform called WordPress so you can add edit and delete content without paying us to do it for you.",
  },
  {
    question:
      "What if I don’t want to manage the website at all. Can you do it all for me?",
    answer:
      "Yes, we can arrange a maintenance package to suit your needs. This can range from 1hr per month to 10 hours per month and we can discuss a package that’s right for you.",
  },
];

import ArrowDropDownLineIcon from "remixicon-react/ArrowDropDownLineIcon";
export const questionArrow = <ArrowDropDownLineIcon />;

// Navbar
import CopyrightLineIcon from "remixicon-react/CopyrightLineIcon";

export const copyRightIcon = <CopyrightLineIcon />;

import Home5LineIcon from "remixicon-react/Home5LineIcon";
import UserLineIcon from "remixicon-react/UserLineIcon";
import HistoryLineIcon from "remixicon-react/HistoryLineIcon";
import BriefcaseLineIcon from "remixicon-react/BriefcaseLineIcon";
import UserStarLineIcon from "remixicon-react/UserStarLineIcon";
import ProjectorLineIcon from "remixicon-react/ProjectorLineIcon";
import PriceTag3LineIcon from "remixicon-react/PriceTag3LineIcon";
import ContactsBook2LineIcon from "remixicon-react/ContactsBook2LineIcon";
import QuestionAnswerLineIcon from "remixicon-react/QuestionAnswerLineIcon";

export const navbarData = [
  {
    id: "home",
    name: "Home",
    icon: <Home5LineIcon />,
  },
  {
    id: "about",
    name: "About",
    icon: <UserLineIcon />,
  },
  {
    id: "experience",
    name: "MyRoad",
    icon: <HistoryLineIcon />,
  },
  {
    id: "skills",
    name: "Skills",
    icon: <BriefcaseLineIcon />,
  },
  {
    id: "facts",
    name: "Facts",
    icon: <UserStarLineIcon />,
  },
  {
    id: "projects",
    name: "Projects",
    icon: <ProjectorLineIcon />,
  },
  {
    id: "pricing",
    name: "Pricing",
    icon: <PriceTag3LineIcon />,
  },
  {
    id: "contact",
    name: "Contact",
    icon: <ContactsBook2LineIcon />,
  },
  // {
  //   id: 'questions',
  //   name: 'Questions',
  //   icon: <QuestionAnswerLineIcon />,
  // },
];

// Toggle
import MoonFoggyFillIcon from "remixicon-react/MoonFoggyFillIcon";
import SunFoggyFillIcon from "remixicon-react/SunFoggyFillIcon";

export const sunIcon = <SunFoggyFillIcon />;
export const moonIcon = <MoonFoggyFillIcon />;
