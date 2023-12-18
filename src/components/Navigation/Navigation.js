import { useState } from "react";
import styles from "./Navigation.module.css";

export default function Navigation() {
    const [isMobileMenuActive, setIsMobileMenuActive] = useState(false);

    function onClickMobileMenu() {
        setIsMobileMenuActive(!isMobileMenuActive);
    }

    const navClasses = isMobileMenuActive ? styles.active : "";

    return (
        <nav className={navClasses}>
            <div className={`${styles.container} container`}>
                <div className={styles.person}>
                    <span className={styles.name}>Jesse McCullough</span>
                </div>
                <ul>
                    <li>
                        <a href="#portfolio">Portfolio</a>
                    </li>
                    <li>
                        <a href="#skills">Skills</a>
                    </li>
                    <li>
                        <a href="#about">About</a>
                    </li>
                    <li className={styles.button}>
                        <a href="#contact">Contact me</a>
                    </li>
                </ul>
                <div
                    className={styles["mobile-menu-icon"]}
                    onClick={onClickMobileMenu}
                >
                    <div className={styles.bar}></div>
                    <div className={styles.bar}></div>
                    <div className={styles.bar}></div>
                </div>
            </div>
        </nav>
    );
}
