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
      name: "Software Delivery Engineer",
      url: "https://www.linkedin.com/in/alexisvalentino/",
      position: "",
      location: "",
      date: "September 2023",
      description:
        "I conduct regression testing and test reporting based on solution requirements specifications, using in-house tools to identify and track bugs, and collaborate with teams across DEV, SIT, and UAT to resolve issues and ensure smooth application delivery.",
      stacks: ["Software Testing", "Test Reporting", "Application Delivery"],
    },
    {
      name: "Information Technology Operations Associate",
      url: "https://www.linkedin.com/in/alexisvalentino/",
      position: "",
      location: "",
      date: "December 2021",
      description:
        " I provided technical assistance for Microsoft Corporation, leveraging tools like ServiceNow, BeyondTrust, and Genesys Cloud to resolve system issues efficiently.",
      stacks: ["Active Directory", "Technical Documentation", "Ticketing Systems", "Remote Desktop Support", "Cloud Applications", "Database Administration", "Technical Support", "Endpoint Security", "Account Management", "Access Control"],
    },
    {
      name: "Software Developer",
      url: "https://www.linkedin.com/in/alexisvalentino/",
      position: "",
      location: "",
      date: "April 2023",
      description: "Developed, tested, and maintained web applications across multiple projects, ensuring high performance and alignment with client expectations.",
      stacks: ["Next.js 13", "React", "Tailwind", "Svelte", "MongoDB", "Python", "Hosting", "Project Management", "Version Control", "Client Relations", "Problem solving", "Attention to detail"],
    },

  ];

  const internships: Work[] = [
    {
      name: "Smart Security Robot - Bagsik 1",
      url: "https://ieeexplore.ieee.org/document/10402359",
      position: "",
      location: "",
      date: "September 2023",
      description:
        "Iot Powered Smart Security Surveillance Robot with ML Based Real-time Threat Detection, Real time alerts with Event and Geolocation logging, Night Vision Capabilities and Mobile Integration for Remote Monitoring and Control",
      stacks: ["opencv", "haarcascade", "robot operating system", "python"],
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
              Work Experience
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
                    {work.stacks.map((item, index) => {
                      return <button key={index}>{item}</button>;
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
                      <span>View</span>
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
              Projects
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
                    {internship.stacks.map((item, index) => {
                      return <button key={index}>{item}</button>;
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
                      <span>View</span>
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
