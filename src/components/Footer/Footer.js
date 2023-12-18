import styles from "./Footer.module.css";
import instagramIcon from "../../images/icons/instagram-icon.png";
import githubIcon from "../../images/icons/github-icon.png";

export default function Footer() {
    return (
        <footer>
            <div className={`${styles.container} container`}>
                <div className={styles["footer-text"]}>
                    <div className={styles["name-container"]}>
                        <span className={`${styles.name} highlight`}>Jesse McCullough</span>
                        <span className="title">Software Developer</span>
                    </div>
                    <ul>
                        <li><a href="#portfolio">Portfolio</a></li>
                        <li><a href="#skills">Skills</a></li>
                        <li><a href="#about">About</a></li>
                    </ul>
                </div>
                <div className={styles.icons}>
                    <a href="https://www.instagram.com/jessemccullough" 
                        target="_blank" rel="noreferrer">
                        <img src={instagramIcon} alt="" />
                    </a>
                    <a href="https://github.com/jessemccullough"
                        target="_blank" rel="noreferrer">
                        <img src={githubIcon} alt="" />
                    </a>
                </div>
                <p className={styles.copyright}>Copyright &copy; 2023 Jesse McCullough. All Rights Reserved.</p>
            </div>
        </footer>
    );
}