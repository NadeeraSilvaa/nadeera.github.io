import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import corpcommentImg from "@/public/corpcomment.png";
import rmtdevImg from "@/public/rmtdev.png";
import wordanalyticsImg from "@/public/wordanalytics.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Started Diploma in Computer System Design",
    location: "NIBM - Colombo",
    description:
      "After A/Ls , I immediately started Diploma In Computer System Design and Completed it by end of2022 ",
    icon: React.createElement(LuGraduationCap),
    date: "2022 - 2023",
  },
  {
    title: "Started Higher National Diploma in Software Engineering",
    location: "NIBM - Colombo",
    description:
      "By the completion of Diploma , I immediately started HND in Software engineering ",
    icon: React.createElement(LuGraduationCap),
    date: "2023 - 2024",
  },
  {
    title: "Front-End Developer (6 Months Intern)",
    location: "CyberCraft.lk",
    description:
      "I worked as a front-end developer for 2 years on remote projects at CyberCraft PVT LTD. During this time, I enhanced my skills in React Native and Node.js.",
    icon: React.createElement(CgWorkAlt),
    date: "2022 - 2024",
  },
  {
    title: "Full-Stack MERN Developer",
    location: "Fiverr , Upwork",
    description:
      "I'm now a full-stack MERN developer working as a freelancer. My stack includes React.js, Express.js, Node.js and MongoDB. I'm open to full-time opportunities.",
    icon: React.createElement(FaReact),
    date: "2021 - present",
  },
] as const;

export const projectsData = [
  {
    title: "Driver-Smart",
    description:
      "I developed two mobile apps, one for drivers and another for police officers, aimed at verifying driving licenses, recording violations, and facilitating fines and payments.",
    tags: ["React Native", "Node.js", "MongoDB", "Express.js"],
    imageUrl: corpcommentImg,
    url: "https://github.com/NadeeraSilvaa/DriveSmartDriver",
  },
  {
    title: "Course Connect",
    description:
      "Developed a android application to manage short courses offered by a university. It allows students to register as users and enroll in courses, while admins can log in to add new short courses.",
    tags: ["Java", "XML", "Firebase", "SQLITE", "Android Studio"],
    imageUrl: rmtdevImg,
    url: "https://github.com/NadeeraSilvaa/Course_Management_System",
  },
  {
    title: "Emotion-Detector",
    description:
      "I developed a Facial Emotion Detector using digital image processing libraries and by training a machine learning model.",
    tags: ["Python", "HTML", "CSS","JavaScript", "TensorFlow", "Open-CV"],
    imageUrl: wordanalyticsImg,
    url: "https://github.com/NadeeraSilvaa/Facial-Emotion-Detector-with-Live-Feed",
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Express",
  "Git",
  "MongoDB",
  "Python",
  "MySQL",
  "SQLlite",
  "Java",
  "Arduino - Robotics",
  "Solidity - BlockChain"
  
] as const;

export const softSkillsData = [
  "Sinhala - Native",
  "English - Professional",
  "Tamil - Good",
  "Self Study",
  "Team Player",
  "Punctual",
  "Problem Solving",
  "Eager to Learn",
 
  
] as const;
