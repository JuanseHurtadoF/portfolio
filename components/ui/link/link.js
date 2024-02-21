import { MdArrowForward } from "react-icons/md";
import styles from "./link.module.scss";

const CustomLink = ({ children, href }) => {
  return (
    <a className={styles.link} target="_blank" href={href}>
      <p>{children}</p>
      <div className={styles.icon}>
        <MdArrowForward />
      </div>
    </a>
  );
};

export default CustomLink;
