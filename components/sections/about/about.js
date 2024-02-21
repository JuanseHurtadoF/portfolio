import { Subtitle, Text } from "@/components/ui/text/text";
import styles from "./about.module.scss";

const About = () => {
  return (
    <div className={styles.container}>
      <Subtitle>About</Subtitle>
      <div className={styles.text}>
        <Text size="Lg">
          {` I'm Juanse, a full stack developer from Ecuador. I used to lead digital
        marketing in McDonald's Ecuador, but I fell in love with web development.`}
        </Text>
        <Text size="Lg">
          {`I've been building web applications for over 3 years, and I'm currently
        building BetterUI.io, an open source reusable UI components library for React.`}
        </Text>
        <Text size="Lg">
          {`I'm actively looking for new opportunities, so if you're looking for a
        developer, let's get in touch!`}
        </Text>
      </div>
    </div>
  );
};

export default About;
