/* eslint-disable @next/next/no-img-element */
import styles from "./avatar.module.scss";

const Avatar = ({ src, alt }) => {
  return (
    <div className={styles.container}>
      <img className={styles.avatar} src={src} alt={alt} />
    </div>
  );
};

export default Avatar;
