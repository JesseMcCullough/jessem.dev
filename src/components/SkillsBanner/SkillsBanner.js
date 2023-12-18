import styles from "./SkillsBanner.module.css";
import reactLogo from "../../images/skills/react-logo.png";
import cssLogo from "../../images/skills/css-logo.png";
import javaLogo from "../../images/skills/java-logo.png";
import phpLogo from "../../images/skills/php-logo.png"
import htmlLogo from "../../images/skills/html-logo.png";
import javascriptLogo from "../../images/skills/javascript-logo.png";
import mysqlLogo from "../../images/skills/mysql-logo.png";

export default function SkillsBanner() {
    return (
        <section className={styles["skills-banner"]} id="skills">
            <div className={`${styles.container} container`}>
                <img src={reactLogo} alt="" />
                <img src={javascriptLogo} alt="" />
                <img src={phpLogo} alt="" />
                <img src={javaLogo} alt="" />  
                <img src={mysqlLogo} alt="" />
                <img src={htmlLogo} alt="" />
                <img src={cssLogo} alt="" />
            </div>
        </section>
    );
}