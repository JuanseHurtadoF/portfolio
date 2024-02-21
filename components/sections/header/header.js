import Avatar from "@/components/ui/avatar/avatar";
import styles from "./header.module.scss";
import { Name, Role, Text } from "@/components/ui/text/text";

const Header = () => {
  return (
    <div className={styles.header}>
      <Avatar src="/avatar.png" alt="Juanse's Profile Picture" />
      <div className={styles.info}>
        <Name>Juanse Hurtado</Name>
        <Role>Full Stack Developer</Role>
        <Text>
          With over <span className="bold">5 years</span> of combined
          experience, I&apos;m a Full-stack developer skilled in building
          digital products, with a solid background in digital marketing.
        </Text>
      </div>
    </div>
  );
};

export default Header;
