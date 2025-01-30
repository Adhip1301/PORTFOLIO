import {
  FormDetails,
  PersonalDetails,
  Projects,
  Skills,
  WorkExperience,
} from "@/types";
import { AtSign, MapPin, Phone } from "lucide-react";
import azure from "../../public/azure.svg";
import csharp from "../../public/csharp.svg";
import css from "../../public/css.svg";
import git from "../../public/git.svg";
import html from "../../public/html.svg";
import java from "../../public/java.svg";
import javascript from "../../public/javascript.svg";
import mongoBD from "../../public/mongoDB.svg";
import mysql from "../../public/mysql.svg";
import nextJS from "../../public/nextJS.svg";
import postgresql from "../../public/postgresql.svg";
import python from "../../public/python.svg";
import react from "../../public/react.svg";
import typescript from "../../public/typescript.svg";

export const MENU_LIST = [
  "About",
  "Projects",
  "Experience",
  "Skills",
  "Contact",
];


export const PROJECTS: Projects[] = [
  {
    title: "IP-TRACKER",
    description: "An IP Tracker identifies and locates devices by tracking their IP addresses, providing details like geographic location, ISP, and network information. It aids in analytics, security, and troubleshooting.",
    tech: "HTML, CSS, javascript",
    gitLink: "https://github.com/Adhip1301/IP-TRACKER",
    URL: "https://ip-tracker-adhip.vercel.app/",
    image:"/images/IP-tracker.png",
  },
  {
    title: "Cryptoverse",
    description: "A Cryptocurrency Tracker provides real-time prices, live value updates, and interactive charts of major cryptocurrencies, enabling users to analyze market trends and make informed investment decisions.",
    tech: "HTML, CSS, Node, React, Tailwind, Zod, Prisma ORM",
    gitLink: "https://github.com/Adhip1301/cryptocurrent",
    URL: "https://cryptoverse-steel.vercel.app/",
    image:"/images/Cryptoverse.png",
  },
  {
    title: "invoice-builder",
    description: "An Invoice Builder simplifies creating professional invoices with customizable templates, automated calculations, and payment integration. It streamlines billing for businesses and freelancers, ensuring efficiency and professionalism.",
    tech: "React, Next.JS, TypeScript, Tailwind, tRPC, Zod, Prisma ORM",
    gitLink: "https://github.com/Adhip1301/invoice-builder",
    URL: "https://invoice-generator-react.netlify.app/",
    image:"/images/invoice-builder.png",
  },
  {
    title: "Drumkit",
    description: "A Drumkit Game designed for kids simulates the experience of playing drums on a PC, featuring interactive keys and sounds to create a fun and engaging way to explore rhythm and music.",
    tech: "HTML, CSS, Javascript, Tailwind,",
    gitLink: "https://github.com/Adhip1301/Drumkit",
    URL: "https://drumkit-pi-three.vercel.app/",
    image:"/images/Drumkit.png",
  },
  {
    title: "Portfolio",
    description: "A place to Know about Adhip Bhattacharya",
    tech: "React, Next.JS, TypeScript, Tailwind",
    gitLink: "https://github.com/CVamsi27/portfolio",
    URL: "https://vamsi-krishna-portfolio.vercel.app",
    image:"/images/Portfolio.png",
  },
];

export const WORK_EXPERIENCE: WorkExperience[] = [

  {
    title: "DATACOM",
    description: "Full Stack Developer",
    tech: "Critical Thinking, Developer Tools,Root Cause Analysis, Software Development, Software Review, Written Communication",
    duration: "August 2024 - January 2025",
    company: "DATACOM",
    URL: "/DATACOM-CERTIFICATE.pdf",
  },
  {
    title: "HEWLETT PACKARD ENTERPRISE",
    description: "Software Engineering",
    tech: "GreenLake Cloud Platform, HTTP requests, Java, Java Spring Boot, JSON, JUnit, Mockito, RESTful Development, RESTful Web Development",
    duration: "January 2025",
    company: "Hewlett Packard Enterprise",
    URL: "/hewlettpackardcertificate.pdf",
  },
  {
    title: "SKYSCANNER",
    description: "Software Engineering",
    tech: "Backpack, JavaScript, React, RESTful Web Development",
    duration: "January 2025",
    company: "Skyscanner",
    URL: "/Scyscanner.pdf",
  },
];

export const FORM_DETAILS: FormDetails[] = [
  {
    name: "name",
    label: "Your Name:",
  },
  {
    name: "email",
    label: "Your Email:",
  },
  {
    name: "message",
    label: "Your Message:",
  },
];

export const PERSONAL_DETAILS: PersonalDetails[] = [
  {
    icon: AtSign,
    value: "adhipbhattacharya@gmail.com",
  },
  {
    icon: Phone,
    value: "+91 9794193681",
  },
  {
    icon: MapPin,
    value: "Delhi, India",
  },
];

export const SKILLS: Skills[] = [
  {
    img: html,
    alt: "HTML",
  },
  {
    img: css,
    alt: "CSS",
  },
  {
    img: react,
    alt: "React",
  },
  {
    img: javascript,
    alt: "Javascript",
  },
  {
    img: typescript,
    alt: "Typescript",
  },
  {
    img: git,
    alt: "Git",
  },
  {
    img: nextJS,
    alt: "NextJS",
  },
  {
    img: java,
    alt: "Java",
  },
  {
    img: csharp,
    alt: "C#",
  },
  {
    img: python,
    alt: "Python",
  },
  {
    img: mongoBD,
    alt: "MongoBD",
  },
  {
    img: mysql,
    alt: "Mysql",
  },
  {
    img: postgresql,
    alt: "Postgresql",
  },
  {
    img: azure,
    alt: "Azure",
  },
];

export const ADHIP = [
  { "language": "English", "word": "ADHIP" },
  { "language": "Telugu", "word": "అధిప్" },
  { "language": "Hindi", "word": "अधिप" },
  { "language": "Tamil", "word": "அதிப்" },
  { "language": "Punjabi", "word": "ਅਧਿਪ" },
  { "language": "Marathi", "word": "अधिप" },
  { "language": "Gujarati", "word": "અધિપ" },
  { "language": "Arabic", "word": "أدهيب" },
  { "language": "Thai", "word": "อธิพ" },
  { "language": "Khmer", "word": "អធិប" },
  { "language": "Burmese", "word": "အဓိပ်" },
  { "language": "Russian", "word": "АДХИП" },
  { "language": "Amharic", "word": "አድሂፕ" },
  { "language": "Nepali", "word": "अधिप" },
  { "language": "Lao", "word": "ອັດທິພ" },
  { "language": "Sinhala", "word": "අධිප්" },
  { "language": "Japanese", "word": "アディップ" },
  { "language": "Korean", "word": "아딥" },
  { "language": "Tibetan", "word": "ཨ་དིབ།" },
  { "language": "Ukrainian", "word": "АДХІП" }
]
;

export const BHATTACHARYA = [
  { "language": "English", "word": "BHATTACHARYA" },
  { "language": "Telugu", "word": "భట్టాచార్య" },
  { "language": "Hindi", "word": "भट्टाचार्य" },
  { "language": "Tamil", "word": "பட்டாசார்யா" },
  { "language": "Punjabi", "word": "ਭੱਟਾਚਾਰਿਆ" },
  { "language": "Marathi", "word": "भट्टाचार्य" },
  { "language": "Gujarati", "word": "ભટ્ટાચાર્ય" },
  { "language": "Arabic", "word": "بهاتاتشاريا" },
  { "language": "Thai", "word": "ภัททาจารยา" },
  { "language": "Khmer", "word": "ភាត់តាចារយា" },
  { "language": "Burmese", "word": "ဘတ်တချာရာ" },
  { "language": "Russian", "word": "БХАТТАЧАРЬЯ" },
  { "language": "Amharic", "word": "ቢሐታቻርያ" },
  { "language": "Nepali", "word": "भट्टाचार्य" },
  { "language": "Lao", "word": "ພັດຕາຈາຣຍາ" },
  { "language": "Sinhala", "word": "භට්ටාචාර්ය" },
  { "language": "Japanese", "word": "バッタチャーリヤ" },
  { "language": "Korean", "word": "바타차르야" },
  { "language": "Tibetan", "word": "བྷ་ཏ་ཆ་རྱ།" },
  { "language": "Ukrainian", "word": "БХАТТАЧАР'Я" }
]
;
