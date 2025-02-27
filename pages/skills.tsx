import Head from "next/head";
import Link from "next/link.js";
import Image from "next/image";

import { motion } from "framer-motion";
import { container, skillsItem } from "../animation";
import { useContext } from "react";
import { MouseContext } from "../context/mouseContext";

export default function Skills() {
  const { cursorChangeHandler } = useContext(MouseContext);

  interface Skill {
    url: string;
    name: string;
    color: string;
    colorRGB: string;
    isBgBlack?: boolean;
  }

  interface SkillSection {
    title: string;
    skills: Skill[];
  }

  interface Certifications {
    name: string;
    url: string;
  }

  const allSkills: SkillSection[] = [
    {
      title: "Web",
      skills: [
        {
          url: "https://www.svgrepo.com/show/354310/sass.svg",
          name: "SASS",
          color: "#CC6699",
          colorRGB: "204, 102, 153",
        },
        {
          url: "https://www.svgrepo.com/show/353925/javascript.svg",
          name: "JavaScript",
          color: "#F7DF1E",
          colorRGB: "247, 223, 30",
        },
        {
          url: "https://www.svgrepo.com/show/354478/typescript-icon.svg",
          name: "TypeScript",
          color: "#3178C6",
          colorRGB: "49, 120, 198",
        },
        {
          url: "https://www.svgrepo.com/show/354259/react.svg",
          name: "React",
          color: "#61DAFB",
          colorRGB: "97, 218, 251",
        },
        {
          url: "https://www.svgrepo.com/show/369457/nextjs.svg",
          name: "NextJS",
          color: "#000000",
          colorRGB: "0, 0, 0",
          isBgBlack: true,
        },
        {
          url: "https://www.svgrepo.com/show/374109/svelte.svg",
          name: "Svelte",
          color: "#FF3E00",
          colorRGB: "255, 62, 0",
        },
        {
          url: "https://www.svgrepo.com/show/374118/tailwind.svg",
          name: "TailwindCSS",
          color: "#38B2AC",
          colorRGB: "56, 178, 172",
        },
      ],
    },
    {
      title: "Deployment",
      skills: [
        {
          url: "https://www.svgrepo.com/show/378475/vercel-fill.svg",
          name: "Vercel",
          color: "#000000",
          colorRGB: "0, 0, 0",
          isBgBlack: true,
        },
      ],
    },
    {
      title: "Other",
      skills: [
        {
          url: "https://www.svgrepo.com/show/452210/git.svg",
          name: "Git",
          color: "#F05032",
          colorRGB: "240, 80, 50",
        },
        {
          url: "https://www.svgrepo.com/show/452202/figma.svg",
          name: "Figma",
          color: "#F24E1E",
          colorRGB: "242, 78, 30",
        },
        {
          url: "https://www.svgrepo.com/show/373595/firebase.svg",
          name: "Firebase",
          color: "#FFCA28",
          colorRGB: "255, 202, 40",
        },
      ],
    },
  ];

  const certifications: Certifications[] = [
    {
      name: "Cisco Networking Academy",
      url: "https://www.credly.com/users/alexis-valentino/badges",
    },
    {
      name: "IBM Digital Badge Program",
      url: "https://www.credly.com/users/alexis-valentino/badges",
    },
  ];

  return (
    <>
      <Head>
        <title>Alexis Valentino | Skills</title>
        <meta
          name="description"
          content="
        I’m a Front-end Developer & Web Integrator, I’m passionate about creating beautiful, intuitive and responsive websites.
        "
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="skills">
        <div className="page__lines"></div>
        {allSkills.map((skillSection, sectionIndex) => (
          <motion.div
            className="skills-section"
            key={sectionIndex}
            variants={container}
            initial="hidden"
            animate="show"
          >
            <div
              className="skills-section__title"
              style={{ overflow: "hidden" }}
            >
              <motion.h2
                animate={{ y: 0, opacity: 1 }}
                initial={{ y: "50%", opacity: 0 }}
                transition={{ delay: 0.1, duration: 0.5 }}
              >
                {skillSection.title}
              </motion.h2>
            </div>
            <div className="skills-section__cards">
              {skillSection.skills.map((skill, skillIndex) => (
                <div
                  key={skillIndex}
                  style={{
                    overflow: "hidden",
                  }}
                >
                  <motion.div
                    className={skill.isBgBlack ? "card card-black" : "card"}
                    key={skillIndex}
                    variants={skillsItem}
                  >
                    <div
                      className="card-icon"
                      style={{
                        backgroundColor: `rgba(${skill.colorRGB}, .1)`,
                        border: `1px solid ${skill.color}`,
                      }}
                    >
                      <Image
                        src={skill.url}
                        alt={skill.name}
                        width={50}
                        height={50}
                      />
                    </div>
                    <h3
                      style={{
                        color: skill.color,
                      }}
                    >
                      {skill.name}
                    </h3>
                  </motion.div>
                </div>
              ))}
            </div>
          </motion.div>
        ))}
        <motion.div
          className="skills-certif"
          variants={container}
          initial="hidden"
          animate="show"
        >
          <div className="skills-certif__title">
            <motion.h2
              animate={{ y: 0, opacity: 1 }}
              initial={{ y: "50%", opacity: 0 }}
              transition={{ delay: 0.1, duration: 0.5 }}
            >
              Certifications
            </motion.h2>
          </div>
          <ul className="skills-certif__cards">
            {certifications.map((certif, certifIndex) => (
              <motion.li key={certifIndex} variants={skillsItem}>
                <Link
                  href={certif.url}
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
                  <span>{certif.name}</span>
                </Link>
              </motion.li>
            ))}
          </ul>
        </motion.div>
      </main>
    </>
  );
}
