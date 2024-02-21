/* eslint-disable @next/next/no-img-element */
import styles from "./project.module.scss";
import Link from "next/link";

const Project = ({ src, alt, title, description, spanColumns, link }) => {
  const style = {
    gridColumnEnd: `span ${spanColumns}`,
  };
  return (
    <a style={style} target="_blank" href={link}>
      <div className={styles.project}>
        <div className={styles.imgContainer}>
          <img className={styles.img} alt={alt} src={src}></img>
        </div>
        <div className={styles.details}>
          <h4 className={styles.projectTitle}>{title}</h4>
          <p className={styles.projectDescription}>{description} </p>
        </div>
      </div>
    </a>
  );
};

export default Project;
