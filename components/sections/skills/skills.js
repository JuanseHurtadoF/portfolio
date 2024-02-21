import { Subtitle } from "@/components/ui/text/text";
import styles from "./skills.module.scss";
import Skill from "@/components/ui/skills/skill";

const Skills = () => {
  const skills = [
    "JavaScript",
    "React",
    "NextJS",
    "TypeScript",
    "NodeJS",
    "Express",
    "SQL",
    "MongoDB",
    "CSS",
    "SASS",
    "Tailwind",
    "GitHub",
    "SEO",
    "UX Research",
    "User Interviews",
    "Figma",
  ];

  return (
    <div className={styles.container}>
      <Subtitle>Skills</Subtitle>
      <div className={styles.skills}>
        {skills.map((skill) => {
          return <Skill key={skill}>{skill}</Skill>;
        })}
      </div>
    </div>
  );
};

export default Skills;
