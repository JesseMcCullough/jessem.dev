import { useState } from "react";
import styles from "./Navigation.module.css";
import { useStrapi, getStrapiUrl } from "../../hooks/useStrapi";
import Button from "../Button/Button";

export default function Navigation() {
    const { loading, error, data } = useStrapi(
        "/home?populate[navigation][populate][0]=navigationLink&populate[navigation][populate][1]=callToAction&populate[navigation][populate][2]=logo"
    );
    const [isMobileMenuActive, setIsMobileMenuActive] = useState(false);

    if (loading) return;
    if (error) return;

    const navigation = data.data.attributes.navigation;
    const links = navigation.navigationLink;
    const callToAction = navigation.callToAction;
    const logo = navigation.logo.data.attributes.url;

    function onClickMobileMenu() {
        setIsMobileMenuActive(!isMobileMenuActive);
    }

    const navClasses = isMobileMenuActive ? styles.active : "";

    return (
        <nav className={navClasses}>
            <div className={styles.background}></div>
            <div className={`${styles.container} container`}>
                <img className={styles.logo} src={getStrapiUrl(logo)} alt="" />
                <ul>
                    {links.map((link) => {
                        return (
                            <li onClick={onClickMobileMenu}>
                                <a href={link.url}>{link.title}</a>
                            </li>
                        );
                    })}
                    <li onClick={onClickMobileMenu} className={styles.button}>
                        <Button data={callToAction} />
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
