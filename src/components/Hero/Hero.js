import styles from "./Hero.module.css";
import profilePicture from "../../images/profile-picture.jpg";
import Markdown from "react-markdown";
import useFetch from "../../hooks/useFetch";

export default function Hero() {
    const { loading, error, data } = useFetch(
        "/api/home?populate[hero][populate][0]=image"
    );

    if (loading) return;
    if (error) return;

    const hero = data.data.attributes.hero;
    const title = hero.title;
    const image = hero.image.data.attributes.url;
    const button = hero.button;

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
                    <a className={styles.button} href="#contact">
                        {button}
                    </a>
                </div>
                <div className={styles.image}>
                    <img src={`http://localhost:1337${image}`} alt="" />
                </div>
            </div>
        </section>
    );
}
