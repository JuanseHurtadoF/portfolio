import { Subtitle, Text } from "@/components/ui/text/text";
import styles from "./contact.module.scss";
import Button from "@/components/ui/button/button";
import CustomLink from "@/components/ui/link/link";

const Contact = () => {
  return (
    <div className={styles.contact}>
      <Subtitle>Let&apos;s create awesome products!</Subtitle>
      <Text size="Lg">
        Feel free to talk about your project, share your product, or just chat
        with me anytime.
      </Text>
      <div className={styles.buttonContainer}>
        <Button>Say hello</Button>
      </div>
      <div className={styles.links}>
        <CustomLink href="https://github.com/JuanseHurtadoF">Github</CustomLink>
        <CustomLink href="https://www.linkedin.com/in/juansehurtado/">
          LinkedIn
        </CustomLink>
        <CustomLink href="https://twitter.com/JuanseHF">Twitter/X</CustomLink>
      </div>
    </div>
  );
};

export default Contact;
