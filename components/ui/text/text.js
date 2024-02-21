import styles from "./text.module.scss";

export const Name = ({ children, ...rest }) => (
  <h1 className={styles.name} {...rest}>
    {children}
  </h1>
);

export const Role = ({ children, ...rest }) => (
  <p className={styles.role} {...rest}>
    {children}
  </p>
);

export const Subtitle = ({ children, ...rest }) => (
  <h2 className={styles.subtitle} {...rest}>
    {children}
  </h2>
);

export const Text = ({ size, children, ...rest }) => (
  <p className={`${styles.text} ${styles[size]}`} {...rest}>
    {children}
  </p>
);
