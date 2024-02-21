import Image from "next/image";
import styles from "./page.module.scss";
import Header from "@/components/sections/header/header";
import About from "@/components/sections/about/about";
import Experience from "@/components/sections/experience/experience";
import Skills from "@/components/sections/skills/skills";
import Projects from "@/components/sections/projects/projects";
import Contact from "@/components/sections/contact/contact";

export default function Home() {
  return (
    <main className={styles.main}>
      <Header />
      <span className="divider"></span>
      <About />
      <span className="divider"></span>
      <Experience />
      <span className="divider"></span>
      <Skills />
      <span className="divider"></span>
      <Projects />
      <span className="divider"></span>
      <Contact />
    </main>
  );
}
