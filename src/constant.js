import react from "./assets/react.svg"
import redux from "./assets/redux.svg"
import tailwind from "./assets/tailwind.svg"
import express from "./assets/express.svg"
import vue from "./assets/vue.svg"
import p1 from "./assets/p1.png"
import p2 from "./assets/p2.png"
import p3 from "./assets/p3.png"
import p4 from "./assets/p4.png"

export const navItems = ["About me", "Skills", "Projects", "Contact"]

export const skillItems = [
  {
    icon: react,
    title: "React",
    text: "React is one of the most popular javascript framework. Over 6 months of practicing React. And I build total of 4 applications.",
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
  {
    icon: vue,
    title: "Vue.JS",
    text: "Vue.js is a powerful and flexible JavaScript framework for building modern web applications. With its intuitive and easy-to-learn syntax, Vue.js allows developers to quickly create dynamic user interfaces with minimal effort.",
  },
]

export const projects = [
  {
    img: p1,
    name: "Scrt.ly",
    desc: "<p style='color:white'>Let’s you <span style='color:#64FFDA'>send a message</span> to someone without letting they know the sender.</p>",
    url: "https://secret-ly.netlify.app",
    descSm:
      "Let’s you send message to someone without letting they know the sender.",
  },
  {
    img: p2,
    name: "CryptoCurrency",
    desc: "<p style='color:white'>CryptoCurrency is the best app to keep tracking of your favorite <span style='color:#64FFDA'>crypto</span> coins.</p>",
    descSm:
      "CryptoCurrency is the best app to keep tracking of your favorite crypto coins.",
    url: "https://cryptocurrencybyisaac.netlify.app",
  },
  {
    img: p3,
    name: "CH-STORE",
    desc: "<p style='color:white'>Simple e-commerce app for your product. Using <span style='color:#64FFDA'>Next.JS 13</span> as it's framework</p>",
    descSm:
      "Simple e-commerce app for your product. Using Next.JS 13 as it's framework",
    url: "https://ch-store-tawny.vercel.app",
  },
  {
    img: p4,
    name: "Twitter clone",
    desc: "<p style='color:white'>Twitter cloning that is built with <span style='color:#64FFDA'>Nuxt.JS</span></p>",
    descSm: "Twitter cloning that is built with Nuxt.JS",
    url: "https://twitter-clone-isaac.vercel.app",
  },
]
