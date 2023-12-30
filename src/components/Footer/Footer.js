import styles from "./Footer.module.css";
import instagramIcon from "../../images/icons/instagram-icon.png";
import githubIcon from "../../images/icons/github-icon.png";
import logo from "../../images/logo.jpg";

export default function Footer() {
    return (
        <footer>
            <div className={`${styles.container} container`}>
                <img className={styles.logo} src={logo} alt="" />
                <ul>
                    <li>
                        <a href="#portfolio">Portfolio</a>
                    </li>
                    <li>
                        <a href="#skills">Skills</a>
                    </li>
                </ul>
                <div className={styles.icons}>
                    <a
                        href="https://www.instagram.com/jessemccullough"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <img src={instagramIcon} alt="" />
                    </a>
                    <a
                        href="https://github.com/jessemccullough"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <img src={githubIcon} alt="" />
                    </a>
                </div>
                <p className={styles.copyright}>
                    Copyright &copy; 2023 Jesse McCullough. All Rights Reserved.
                </p>
            </div>
        </footer>
    );
}
