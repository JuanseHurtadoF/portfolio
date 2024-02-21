import styles from "./skill.module.scss";

const Skill = ({ children }) => {
  return (
    <div className={styles.skill}>
      <p className={styles.label}>{children}</p>
    </div>
  );
};

export default Skill;
