import Project from "@/components/ui/project/project";
import { Subtitle } from "@/components/ui/text/text";
import styles from "./projects.module.scss";
import { projects } from "../../../data/projects";

const Projects = () => {
  return (
    <div className={styles.container}>
      <Subtitle>Projects</Subtitle>
      <div className={styles.projects}>
        {projects.map(({ title, src, alt, description, link, spanColumns }) => {
          return (
            <Project
              key={title}
              src={src}
              alt={alt}
              title={title}
              description={description}
              link={link}
              spanColumns={spanColumns ? spanColumns : null}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Projects;
