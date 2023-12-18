import styles from "./Hero.module.css";
import profilePicture from "../../images/profile-picture-crop.jpg";

export default function Hero() {
    return (
        <section className={styles.hero} id="#about">
            <div className={`${styles.container} container`}>
                <div className={styles.text}>
                    <h1>Hi, <span className={styles.highlight}>I'm Jesse McCullough</span>
                        <span className={styles.subtitle}>a Software Developer</span>
                    </h1>
                    <img src={profilePicture} className={styles["mobile-profile-picture"]} alt="" />
                    <p>I primarily develop for the web, whether it's a simple website or a dynamic web app. I enjoy learning new technologies across all platforms though. Right now, I'm creating a portfolio to demonstrate proficiency in different tech stacks. Feel free to follow my progress through this website or on <a href="https://www.instagram.com/jessemccullough" target="_blank" rel="noreferrer">my Instagram @JesseMcCullough</a>.</p>
                    <a className={styles.button} href="#contact">Contact Me</a>
                </div>
                <div className={styles.image}>
                    <img src={profilePicture} alt="" />
                </div>
            </div>
        </section>
    );
}