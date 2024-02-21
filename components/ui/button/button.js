import styles from "./button.module.scss";
const Button = ({ children, href, ...rest }) => {
  return (
    <a href="mailto:juansebastianhurtadof@gmail.com">
      <button className={styles.button} {...rest}>
        {children}
      </button>
    </a>
  );
};

export default Button;
