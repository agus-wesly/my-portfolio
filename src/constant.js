import react from "./assets/react.svg";
import redux from "./assets/redux.svg";
import tailwind from "./assets/tailwind.svg";
import express from "./assets/express.svg";
import p1 from "./assets/p1.png";
import p2 from "./assets/p2.png";

export const navItems = ["Heading", "Skills", "Projects", "Contact"];

export const skillItems = [
  {
    icon: react,
    title: "React",
    text: "React is one of the most popular javascript framework. Over 6 months of practicing React. And I build total of 4 application.",
  },
  {
    icon: tailwind,
    title: "Tailwind CSS",
    text: "Tailwind is a utility-first CSS framework packed with classname. I often use tailwind for my projects.",
  },
  {
    icon: redux,
    title: "Redux",
    text: "Redux is state management for react. I use redux because its simple and powerful. ",
  },
  {
    icon: express,
    title: "Express JS",
    text: "This node js framework is very easy to use. I always use express to build a backend server for my aplication. ",
  },
];

export const projects = [
  {
    img: p1,
    name: "Scrt.ly",
    desc: "Let’s you send a message to someone without letting they know the sender.",
    url: "https://secret-ly.netlify.app",
  },
  {
    img: p2,
    name: "CryptoCurrency",
    desc: "CryptoCurrency is the best app to keep tracking of your favorite crypto coins.",
    url: "https://cryptocurrencybyisaac.netlify.app",
  },
];
