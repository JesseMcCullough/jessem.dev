import styles from "./Footer.module.css";
import { useStrapi, getStrapiUrl } from "../../hooks/useStrapi";

export default function Footer() {
    const { loading, error, data } = useStrapi(
        "/home?populate[footer][populate][0]=navigationLink&populate[footer][populate][1]=socialMedia.icon&populate[footer][populate][2]=logo"
    );

    if (loading) return;
    if (error) return;

    const footer = data.data.attributes.footer;
    const links = footer.navigationLink;
    const socialMedia = footer.socialMedia;
    const logo = getStrapiUrl(footer.logo.data.attributes.url);
    const copyright = footer.copyright;

    return (
        <footer>
            <div className={`${styles.container} container`}>
                <img className={styles.logo} src={logo} alt="" />
                <ul>
                    {links.map((link) => {
                        return (
                            <li>
                                <a href={link.url}>{link.title}</a>
                            </li>
                        );
                    })}
                </ul>
                <div className={styles.icons}>
                    {socialMedia.map((social) => {
                        const icon = getStrapiUrl(
                            social.icon.data.attributes.url
                        );

                        return (
                            <a
                                href={social.url}
                                target="_blank"
                                rel="noreferrer"
                            >
                                <img src={icon} alt={social.title} />
                            </a>
                        );
                    })}
                </div>
                <p className={styles.copyright}>{copyright}</p>
            </div>
        </footer>
    );
}
