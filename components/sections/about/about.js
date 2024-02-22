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
          I&apos;ve been building web applications for over 3 years, and
          I&apos;m currently building{" "}
          <a target="_blank" href="https://www.betterui.io/" className="underlined">
            BetterUI.io
          </a>
          , an open source reusable UI components library for React.
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
