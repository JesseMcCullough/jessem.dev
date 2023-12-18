import styles from "./Hero.module.css";
import profilePicture from "../../images/profile-picture-crop.jpg";

export default function Hero() {
    return (
        <section className={styles.hero} id="#about">
            <div className={`${styles.container} container`}>
                <div className={styles.text}>
                    <h1>
                        Hi, I'm{" "}
                        <span className={styles.highlight}>
                            Jesse McCullough
                        </span>
                        ,<br /> a{" "}
                        <span className={styles.highlight}>
                            software engineer
                            <br />
                        </span>{" "}
                        who specializes in{" "}
                        <span className={styles.highlight}>
                            web development
                        </span>
                        .
                    </h1>
                    <img
                        src={profilePicture}
                        className={styles["mobile-profile-picture"]}
                        alt=""
                    />
                    <a className={styles.button} href="#contact">
                        Contact me
                    </a>
                </div>
                <div className={styles.image}>
                    <img src={profilePicture} alt="" />
                </div>
            </div>
        </section>
    );
}
