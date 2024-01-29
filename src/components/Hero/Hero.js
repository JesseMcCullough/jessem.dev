import styles from "./Hero.module.css";
import profilePicture from "../../images/profile-picture.jpg";
import Markdown from "react-markdown";
import { useStrapi, getStrapiUrl } from "../../hooks/useStrapi";
import Button from "../Button/Button";
// import getStrapiUrl from "../../hooks/useStrapi";

export default function Hero() {
    const { loading, error, data } = useStrapi(
        "/home?populate[hero][populate][0]=image&populate[hero][populate][1]=button"
    );

    if (loading) return;
    if (error) return;

    const hero = data.data.attributes.hero;
    const title = hero.title;
    const imageUrl = hero.image.data.attributes.url;
    const buttonText = hero.button.text;
    const buttonUrl = hero.button.url;
    const buttonOpenNewTab = hero.button.openNewTab;

    let buttonTarget = buttonOpenNewTab ? "_blank" : "";

    return (
        <section className={styles.hero} id="#about">
            <div className={`${styles.container} container`}>
                <div className={styles.text}>
                    <Markdown components={{ p: "h1" }}>{title}</Markdown>
                    <img
                        src={profilePicture}
                        className={styles["mobile-profile-picture"]}
                        alt=""
                    />
                    {/* <a
                        className={styles.button}
                        href={buttonUrl}
                        target={buttonTarget}
                    >
                        {buttonText}
                    </a> */}
                    <Button data={hero.button} className={styles.button} />
                </div>
                <div className={styles.image}>
                    <img src={getStrapiUrl(imageUrl)} alt="" />
                </div>
            </div>
        </section>
    );
}
