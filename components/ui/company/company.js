/* eslint-disable @next/next/no-img-element */
import styles from "./company.module.scss";
const Company = ({ company, defaultColor, role, date, src }) => {
  return (
    <div className={styles.company}>
      <div className={styles.imgContainer}>
        <img
          alt="Logo"
          src={src}
          className={
            defaultColor
              ? `${styles.img} ${styles.imgDefault}`
              : `${styles.img}`
          }
        ></img>
      </div>
      <div className={styles.textContainer}>
        <p className={styles.company}>{company}</p>
        <p className={styles.roleInfo}>
          {role} &middot; {date}
        </p>
      </div>
    </div>
  );
};

export default Company;
