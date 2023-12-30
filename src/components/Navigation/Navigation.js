import { useState } from "react";
import styles from "./Navigation.module.css";
import logo from "../../images/logo.jpg";

export default function Navigation() {
    const [isMobileMenuActive, setIsMobileMenuActive] = useState(false);

    function onClickMobileMenu() {
        setIsMobileMenuActive(!isMobileMenuActive);
    }

    const navClasses = isMobileMenuActive ? styles.active : "";

    return (
        <nav className={navClasses}>
            <div className={styles.background}></div>
            <div className={`${styles.container} container`}>
                <img className={styles.logo} src={logo} alt="" />
                <ul>
                    <li onClick={onClickMobileMenu}>
                        <a href="#portfolio">Portfolio</a>
                    </li>
                    <li onClick={onClickMobileMenu}>
                        <a href="#skills">Skills</a>
                    </li>
                    <li onClick={onClickMobileMenu} className={styles.button}>
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
