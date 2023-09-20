import Head from "next/head";
import Link from "next/link.js";
import Image from "next/image";

import { motion } from "framer-motion";
import { container, item, skillsItem } from "../animation";
import { useContext, useState } from "react";
import { MouseContext } from "../context/mouseContext";

export default function Experience() {
  const { cursorChangeHandler } = useContext(MouseContext);

  interface Work {
    name: string;
    url?: string;
    location: string;
    position: string;
    date: string;
    description: string;
    stacks?: string[];
  }

  interface PersonalWork {
    name: string;
    url: string;
    image: string;
  }

  const works: Work[] = [
    {
      name: "Learning Planet Institute",
      url: "https://www.learningplanetinstitute.org/",
      position: "Freelance FrontEnd Developer",
      location: "Remote",
      date: "April 2023 - Present",
      description: "",
      stacks: ["Vue3", "StoryBook", "Nuxt", "SASS"],
    },
    {
      name: "Diadromoove",
      position: "Freelance FrontEnd Developer",
      location: "Remote",
      date: "January 2023 - July 2023",
      description:
        "Development of the front-end of the Gloovee web application",
      stacks: ["NextJS", "SASS"],
    },
    {
      name: "Mboa Digital",
      url: "https://www.mboadigital.tech/",
      position: "Digital Consultant",
      location: "Yaoundé, Cameroon",
      date: "August 2022 - April 2023",
      description:
        "More than a front-end developer, I am here a Digital consultant. My goal is to design robust web applications with good UI/UX. While working as a team.",
      stacks: ["ReactJS", "Framer Motion", "TypeScript", "JavaScript", "SASS"],
    },
    {
      name: "Freelance",
      position: "Front-end Developer",
      location: "Remote",
      date: "From June 2021",
      description:
        " a freelancer I have worked for many independent clients and agencies around the world, especially in the position of front-end developer and also web integrator, my goal is to create robust web applications with a good UI/UX.",
      stacks: ["React", "NextJS", "VueJS", "Svelte", "SCSS", "TypeScript"],
    },
    {
      name: "AfritechHub",
      url: "https://afritechh.com/",
      position: "Web Trainer",
      location: "Douala",
      date: "April 2021",
      description:
        "For two weeks I trained students to become apprentices in web development including the basics of HTML5 - CSS3 - JavaScript.",
      stacks: ["HTML", "CSS", "JS"],
    },
  ];
  const internships: Work[] = [
    {
      name: "Mboa Digital",
      url: "https://www.mboadigital.tech/",
      position: "Front-end Developer",
      location: "Yaoundé, Cameroon",
      date: "June 2022 - August 2022",
      description:
        "During this internship my main goal was the development of websites respecting very specific designs, it allowed me to increase my skills in ReactJS and also to work better in a team.",
      stacks: ["ReactJS", "Framer Motion", "TypeScript", "JavaScript", "SASS"],
    },
    {
      name: "LOHCE",
      url: "https://lohce.com/",
      position: "Front-end Developer",
      location: "Remote",
      date: "April 2022 - June 2022",
      description:
        "The main goal of this internship was to create a prototype chat bot to help people buy a travel ticket online.",
      stacks: ["React"],
    },
    {
      name: "Genuka",
      url: "https://genuka.com/",
      position: "Front-end Developer",
      location: "Remote",
      date: "March 2022 - May 2022",
      description:
        "The main goal was the implementation of templates for Genuka stores through their API, I was also to form a team of two people for the accomplishment of this said task.",
      stacks: ["Svelte"],
    },
  ];
  

  const [imageUrl, setImageUrl] = useState("");
  const [imageName, setImageName] = useState("");
  const handleMouseEnter = (url: string, name: string) => {
    setImageUrl(url);
    setImageName(name);
  };
  const handleMouseLeave = () => {
    setImageUrl("");
    setImageName("");
  };

  return (
    <>
      <Head>
        <title>Alexis Valentino | Experience</title>
        <meta
          name="description"
          content="
          I’m a Front-end Developer & Web Integrator, I’m passionate about creating beautiful, intuitive and responsive websites.
          "
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="experience">
        <div className="page__lines"></div>
        <motion.div
          className="experience-works"
          variants={container}
          initial="hidden"
          animate="show"
        >
          <div
            className="experience-works__title"
            style={{ overflow: "hidden" }}
          >
            <motion.h2
              animate={{ y: 0, opacity: 1 }}
              initial={{ y: "50%", opacity: 0 }}
              transition={{ delay: 0.1, duration: 0.5 }}
            >
              Featured Projects
            </motion.h2>
          </div>
          <div className="experience-works__cards">
            {works.map((work, index) => (
              <motion.div className="card" key={index} variants={skillsItem}>
                <div className="card-header">
                  <div className="card-header__left">
                    <h3>{work.name}</h3>
                    <p>{work.position}</p>
                  </div>
                  <div className="card-header__right">
                    <h3>{work.date}</h3>
                    <p>{work.location}</p>
                  </div>
                </div>
                <div className="card-description">
                  <p>{work.description}</p>
                </div>
                {work.stacks && (
                  <div className="card-stacks">
                    {work.stacks.map((item) => {
                      return <button>{item}</button>;
                    })}
                  </div>
                )}
                <div className="card-footer">
                  {work.url && (
                    <Link
                      href={work.url}
                      passHref
                      onMouseEnter={() => cursorChangeHandler("hovered")}
                      onMouseLeave={() => cursorChangeHandler("")}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={2}
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25"
                        />
                      </svg>
                      <span>Website</span>
                    </Link>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
        <motion.div
          className="experience-internship"
          variants={container}
          initial="hidden"
          animate="show"
        >
          <div
            className="experience-internship__title"
            style={{ overflow: "hidden" }}
          >
            <motion.h2
              animate={{ y: 0, opacity: 1 }}
              initial={{ y: "50%", opacity: 0 }}
              transition={{ delay: 0.1, duration: 0.5 }}
            >
              Internships
            </motion.h2>
          </div>
          <div className="experience-internship__cards">
            {internships.map((internship, index) => (
              <motion.div className="card" key={index} variants={skillsItem}>
                <div className="card-header">
                  <div className="card-header__left">
                    <h3>{internship.name}</h3>
                    <p>{internship.position}</p>
                  </div>
                  <div className="card-header__right">
                    <h3>{internship.date}</h3>
                    <p>{internship.location}</p>
                  </div>
                </div>
                <div className="card-description">
                  <p>{internship.description}</p>
                </div>
                {internship.stacks && (
                  <div className="card-stacks">
                    {internship.stacks.map((item) => {
                      return <button>{item}</button>;
                    })}
                  </div>
                )}
                <div className="card-footer">
                  {internship.url && (
                    <Link
                      href={internship.url}
                      passHref
                      onMouseEnter={() => cursorChangeHandler("hovered")}
                      onMouseLeave={() => cursorChangeHandler("")}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={2}
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25"
                        />
                      </svg>
                      <span>Website</span>
                    </Link>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </main>
    </>
  );
}  
