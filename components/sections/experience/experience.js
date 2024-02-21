import { Subtitle, Text } from "@/components/ui/text/text";
import styles from "./experience.module.scss";
import Company from "@/components/ui/company/company";
import { FaCode } from "react-icons/fa";

const Experience = () => {
  return (
    <div className={styles.container}>
      <Subtitle>Experience</Subtitle>
      <div className={styles.companies}>
        <Company
          company="Better UI"
          role="Lead Contributor"
          date="2023"
          src="/logos/betterui.png"
          defaultColor
        />
        <Company
          company="Logihub"
          role="Product Marketing Manager"
          date="2022"
          src="/logos/logihub.png"
        />
        <Company
          company="Long Lost Friends"
          role="Full Stack Developer"
          date="2021 - 2022"
          src="/logos/llf.png"
        />
        <Company
          company="McDonald's - Ecuador"
          role="Digital Marketing Lead"
          date="2019 - 2021"
          src="/logos/mcdlogo.png"
        />
      </div>
    </div>
  );
};

export default Experience;
